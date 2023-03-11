const pgp = require('pg-promise')()
const cn = {
    host: 'localhost',  // тут настраиваем подключение ноды к базе
    port: 5432,
    database: 'libraryDB',
    user: 'postgres',
    password: '00000000'
};
const db = pgp(cn);
module.exports = db;