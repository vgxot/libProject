const pgp = require('pg-promise')()
const books = require('./books.json')
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
    db.none('INSERT INTO books("bookName", "isbn", "author", "description", "pages", "year", "age", "photoLink", "resourceLink", "popularity", "rating") VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
        [books[k].bookName, books[k].isbn, books[k].author, books[k].description, books[k].volume, books[k].info_year, books[k].info_age, books[k].resourceLink, "none", books[k].popularity, books[k].rating])
        .then(() => {
            console.log(`записали книгу номер ${count += 1}`)
        })
        .catch(() => {
            console.log(`что-то не так, книга номер ${count += 1}`)
        });
}
