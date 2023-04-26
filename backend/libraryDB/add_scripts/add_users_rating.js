const users = require('../users/users1.json')
const db = require('../../db/database')
const {errors} = require("pg-promise");
let count = 0;
let i = 0;
let db_count = 1;
for (i in users) {
    console.log(count)
    count += 1
    let username = users[i].username
    for (let k in users[i].book_ratings) {
        db.none('INSERT INTO users_rating(book_id, username, rating) VALUES($1, $2, $3)',
            [users[i].book_ratings[k].book_id, username, users[i].book_ratings[k].rating])
            .then(() => {
                console.log(`записал в базу ${db_count} элемент`)
                db_count += 1
            })
            .catch(() => {
                console.log(errors)
            })
    }
}
