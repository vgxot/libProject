const pgp = require('pg-promise')()
const books = require('./books_add.json')
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'libraryDB',
    user: 'postgres',
    password: '00000000'
};
let count = 0;
const db = pgp(cn);
let k = -1;
for (let i in books) {
    k += 1;
    db.none('INSERT INTO books("book_name", "author", "description", "popularity", "rating", "one", "two", "three", "four", "five", "year", "age", "pages", "isbn", "photo_link") VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)',
        [books[k].book_name, books[k].author, books[k].description, books[k].popularity, books[k].rating, books[k].one, books[k].two, books[k].three, books[k].four, books[k].five, books[k].info_year, books[k].info_age, books[k].volume, books[k].isbn, books[k].resource_link])
}
