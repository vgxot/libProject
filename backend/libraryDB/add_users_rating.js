const pgp = require('pg-promise')()
const users = require('./users4.json')
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'libraryDB',
    user: 'postgres',
    password: '00000000'
};
const db = pgp(cn);
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
    }
}
