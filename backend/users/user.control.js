const db = require('../db/database')
const crypt = require('bcryptjs')
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
    async createUser(req, res) {
        const {username, name, password} = req.body
        let salt = crypt.genSaltSync(10);                  // создание соли
        let hash = crypt.hashSync(password, salt);                // хеширование и соление пароля
        const newUser = db.none('INSERT INTO users("username", "name", "password", "reg_date", "reg_time", "role")' +
            'VALUES($1, $2, $3, $4, $5, $6)'
            , [username, name, hash, date(), time(), "user"])
            .then(() => {
                console.log('Все круто, в базу записали');
                res.end('ok');
            })
            .catch(() => {
                console.log('не работает');
                res.end('error');
            });
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
    async updateUser(req, res) {

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
    async authUser(req, res) {
        const {username, password} = req.body;
        let hash = await db.query(`SELECT password FROM users WHERE username LIKE $1`, [username])
        hash = JSON.stringify(hash);
        hash = hash.substr(14, 60);         // выбирает чисто хэш из строки
        if (crypt.compareSync(password, hash)) {
            console.log(`Все круто, ${username} вошел`);
            res.end('true');
        }
        else {
            console.log('логин или пароль неверный')
            res.end('false');
        }
    }
}
module.exports = new UserControl()