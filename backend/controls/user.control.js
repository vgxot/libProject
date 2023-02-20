const db = require('../db/database')
const crypt = require('bcryptjs')
const tokenControl = require('./token.control')
const {stat} = require("fs");

function date() {
    let currentDate = new Date();               // проблемы с записью месяца и числа, начинающихся с нуля
    return currentDate.getFullYear() + "-"
        + (currentDate.getMonth()+1 < 10 ? "" : "")
        + currentDate.getMonth()+1 + "-" +
        + currentDate.getDate();
}
function time() {
    let currentTime = new Date();
    return currentTime.getHours() + "-"
        + currentTime.getMinutes() + "-"
        + currentTime.getSeconds();
}
class UserControl {
    async testRequest(req, res) {
        const {test} = req.body;
        console.log(test)
        let text = 'Данные получили'
        text = JSON.stringify(text)
        res.end(text)
    }
    async testResponse(req, res) {
        const {test} = req.body;
        console.log(test)
        let text = 'Данные получили'
        text = JSON.stringify(text)
        res.end(text)
    }
    async createUser(req, res) {
        const {username, name, password} = req.body
        // await db.query('SELECT username FROM users WHERE username LIKE $1', [username])
        //     .then(() => {
        //         res.json({message: "username is busy"})
        //         res.end()
        //     })
        let salt = crypt.genSaltSync(5);                  // создание соли
        let hash = crypt.hashSync(password, salt);                // хеширование и соление пароля

        const newUser = await db.none('INSERT INTO users("username", "name", "password", "reg_date", "reg_time", "role", "photo_link", "background_link") VALUES($1, $2, $3, $4, $5, $6, $7, $8)', [username, name, hash, date(), time(), "user", "0", "0"])
            .then(() => {
                res.json({message: "Пользователь зарегистрировался"})
            })
            .catch(() => {
                res.end('error');
            });
        const tokens = tokenControl.generateToken(username);
        await tokenControl.saveToken(username, tokens.refreshToken);
        res.end({s: "d"})
    }
    async authUser(req, res) {
        const {username, password} = req.body;
        let hash = await db.query(`SELECT password FROM users WHERE username LIKE $1`, [username])
        hash = JSON.stringify(hash);
        hash = hash.substr(14, 60);         // выбирает чисто хэш из строки
        if (crypt.compareSync(password, hash)) {
            console.log(`Все круто, ${username} вошел`);
            const token = tokenControl.generateToken(username)
            res.json({token})
        }
        else {
            console.log('логин или пароль неверный')
            res.end('false');
        }
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
    async logoutUser(req, res) {
        const {username} = req.body;
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