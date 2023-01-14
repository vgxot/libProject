const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'libraryDB',
    user: 'postgres',
    password: '00000000'
};
const db = pgp(cn);
db.one('SELECT username FROM users WHERE id = 2')
    .then(value => {
        console.log(value.username);
    })
    .catch(eval => {
        console.log('Ошибка')
    });
function database() {
    db.any('SELECT $1:name FROM $2:name', ['*', 'users'])
        .then(value => {
            console.log(value);
        });
}
let name = "Ревизор";
let author = "Гоголь";
db.none('INSERT INTO books(book, author) VALUES($1, $2)', [name, author])
    .then(() => {
        console.log('Все круто, в базу записали')
    })
    .catch(error => {
        console.log('не работает')
    });
