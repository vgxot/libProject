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
    .then(user => {
        console.log(user.username);
    });