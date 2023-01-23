// этот файл содержит цикл для записи всех книг в базу данных

const pgp = require('pg-promise')()
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'libraryDB',
    user: 'postgres',
    password: '00000000'
};
const db = pgp(cn);
const book = [
    "",
    "",
    "",
]
const isbn = [
]
const author = [
]
const pages = [
]
const year = [
]


for (let i = 0; i < 4; i++) {
    db.none('INSERT INTO books("book-name", "isbn", "author", "pages", "year") VALUES($1, $2, $3, $4, $5)',
        [book[i], isbn[i], author[i], pages[i], year[i]])
        .then(() => {
            console.log(`записали ${book[i]}, ${isbn[i]}, ${author[i]}, ${pages[i]}, ${year[i]}`)
        })
        .catch(() => {
            console.log(`что-то не так ${book[i]}, ${isbn[i]}, ${author[i]}, ${pages[i]}, ${year[i]}`)
        });
}