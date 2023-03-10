const users = require('./users1.json')
const crypt = require("bcryptjs");
const db = require('./../db/database')
const {errors} = require("pg-promise");
function date() {
    return new Date().toISOString().slice(0, 10)
}
function time() {
    return new Date().toTimeString().slice(0, 8)
}
let count = 0;
let i = 0;
for (i in users) {
    let salt = crypt.genSaltSync(7, 10);                  // создание соли
    let hash = crypt.hashSync(users[i].password, salt);                // хеширование и соление пароля
    console.log('обрабатываем пользователя')
    db.none('INSERT INTO users(username, name, password, role, reg_date, reg_time, avatar_link, background_link) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
        [users[i].username, users[i].name, hash, "user", date(), time(), users[i].avatar_link, users[i].background_link])
        .then(() => {
            count += 1
            console.log(`записали ${count} юзера`)
        })
        .catch(() => {
            console.log(errors)
        })
}