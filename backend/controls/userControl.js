const db = require('../db/database')
const crypt = require('bcryptjs')
const tokenService = require("../services/tokenService")
const {stat} = require("fs");
const fs = require("fs");
const getDateTime = require("./../dateTime");
const userService = require("../services/userService")

// так-то функции работают, создают юзера и могут его удалить, даже роль ему меняют, правда на фронте это реализовано только на 30%


class UserControl {
    async createUser(req, res) {
        const {username, name, password} = req.body
        await db.query('SELECT username FROM users WHERE username LIKE $1', [username])
            .then(() => {
                // если username занят, то он просто перезапишет токен
            })
        let salt = crypt.genSaltSync(7, 10);                  // создание соли
        let hash = crypt.hashSync(password, salt);                // хеширование и соление пароля
        await db.none('INSERT INTO users("username", "name", "password", "reg_date", "reg_time", "role", "avatar_link", "background_link") VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
            [username, name, hash, getDateTime.date, getDateTime.time, "user", "0", "0"])
            .then(() => {
                // res.json({message: "Пользователь зарегистрировался"})
            })
            .catch(() => {
                res.status(501)
            });
        await db.query('INSERT INTO tokens("username") VALUES ($1)', [username])
        const tokens = tokenService.generateTokens({username: username}, {role: 'user'});
        await tokenService.saveToken(username, tokens.refreshToken);
        res
          .cookie('refreshToken', tokens.refreshToken, {maxAge: 2592000000, httpOnly: true})
          .status(201)
          .end()
    }
    async deleteUser(req, res) {
        const {username} = req.body;
        await db.none(`DELETE FROM public.users WHERE username LIKE $1`, [username])
          .then(() => {
              console.log(`Все круто, ${username} удалился`)
              res.end('ok');
          })
          .catch(() => {
              console.log('что-то не так')
              res.end('error');
          });
    }
    async loginUser(req, res) {
        const {username, password} = req.body;
        let hash = await db.query(`SELECT password FROM users WHERE username LIKE $1`, [username])
        hash = JSON.stringify(hash);
        hash = hash.substr(14, 60);         // выбирает чисто хэш из строки, upd: писал когда не умел работать с json
        if (crypt.compareSync(password, hash)) {
            console.log(`Все круто, ${username} вошел`);
            const tokens = tokenService.generateTokens({username})
            await tokenService.saveToken(username, tokens.refreshToken);
            res
              .cookie('refreshToken', tokens.refreshToken, {maxAge: 2592000000, httpOnly: true})
              .json(tokens.accessToken)
              .end()
        }
        else {
            console.log('логин или пароль неверный')
            res.end('false');
        }
    }
    async logoutUser(req, res) {
        const {refreshToken} = req.cookies;
        await userService.logout(refreshToken)
        res
          .clearCookie('refreshToken')
          .status(200)
          .end()
    }
    async refreshToken(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            console.log("обновляю токен: ", refreshToken)
            const userData = await userService.refresh(refreshToken);
            console.log(userData)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 2592000000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }
    async searchUsers(req, res) {
        let {query, sorting, sortColumn, limit} = req.body;
        console.log(req.body)
        if (query === '*') {
            let users = await db.query(`SELECT * FROM users ORDER BY ${sortColumn} ${sorting} LIMIT
                            ${limit}`, [sortColumn, sorting])
            users = JSON.stringify(users);
            res.end(users)
        }
        else if (query.length > 3){
            let users = await db.query(`SELECT * FROM users WHERE username LIKE $3 OR name LIKE $3 OR
                          role LIKE $3 ORDER BY ${sortColumn} ${sorting} LIMIT ${limit}`, [sortColumn, sorting, query])
            users = JSON.stringify(users);
            res.end(users)
        } else {
            let users = await db.query(`SELECT * FROM users ORDER BY username LIMIT 100`)
            users = JSON.stringify(users);
            console.log(req.body)
            res.end(users)
        }
    }
    async getUser(req, res) {
        let query = req.params.id;
        console.log(query)
        let user = await db.query(`SELECT * FROM users WHERE username=$1`, [query])
        user = JSON.stringify(user);
        res.end(user)
    }
    async getAccount(req, res) {
        const username = req.user['username']
        let user = await db.query(`SELECT * FROM users WHERE username=$1`, [username])
        res.end(JSON.stringify(user))
    }
    async getUserRatings(req, res) {
        let query = req.params.id;
        let ratings = await db.query(`SELECT usr.rating, bks.author, bks.book_name, bks.book_id, bks.photo_link
                                      FROM users_rating AS usr
                                               JOIN books AS bks ON bks.book_id=usr.book_id WHERE usr.username=$1`, [query])
        ratings = JSON.stringify(ratings);
        res.end(ratings)
    }
    async userBeAuthor(req, res) {
        const {username} = req.body;
        await db.none(`UPDATE users SET role = 'author' WHERE username LIKE $1`, [username])
            .then(() => {
                console.log(`Все круто, ${username} стал автором`)
                res.end('ok');
            })
            .catch(() => {
                console.log('что-то не так')
                res.end('error');
            });
    }

}

module.exports = new UserControl()