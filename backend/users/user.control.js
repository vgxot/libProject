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
        let salt = crypt.genSaltSync(10);                   // создание соли
        let hash = crypt.hashSync(password, salt)                  // хеширование и соление пароля
        const newUser = db.none('INSERT INTO users("username", "name", "password", "reg_date", "reg_time") VALUES($1, $2, $3, $4, $5)'
            , [username, name, hash, date(), time()])
            .then(() => {
                console.log('Все круто, в базу записали')
                res.end('ok');
            })
            .catch(() => {
                console.log('не работает')
                res.end('error');
            });
    }
    async getUsers(req, res) {

    }
    async getOneUser(req, res) {

    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {

    }
}
module.exports = new UserControl()