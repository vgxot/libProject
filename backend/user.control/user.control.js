const db = require('../db/database')
class UserControl {
    async createUser(req, res) {
        const {username, name, password} = req.body
        const newUser = db.none('INSERT INTO users("username", "name", "password", "reg_time", "reg_date") VALUES($1, $2, $3, $4, $5)'
            , [username, name, password, time(), date()])
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