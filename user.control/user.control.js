const db = require('../database/database')
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
        const {username, name} = req.body
        const newUser = db.none('INSERT INTO users("username", "name", "reg_time", "reg_date") VALUES($1, $2, $3, $4)'
            , [username, name, time(), date()])
            .then(() => {
                console.log('Все круто, в базу записали')
                res.end('ok');
            })
            .catch(() => {
                console.log('не работает')
                res.end('error');
            });
        console.log(newUser)
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