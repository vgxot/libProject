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
        [books[k].book_name, books[k].author, books[k].description, books[k].populariry, books[k].rating, books[k].one, books[k].two, books[k].three, books[k].four, books[k].five, books[k].info_year, books[k].info_age, books[k].volume, books[k].isbn, books[k].resourseLink])
        .then(() => {
            console.log(`записали книгу номер ${count += 1}`)
        })
        .catch(() => {
            console.log(`что-то не так, книга номер ${count += 1}`)
        });
}
count = 0;
let j = 0;
let countGenre = 0;
for (let i in books) {
    j += 1;
    let x = 0;
    for (let y in books[j - 1].genre) {
        countGenre ++
        db.none('INSERT INTO books_genre("book_id", genre) VALUES($1, $2)', [j, books[j - 1].genre[x]])
            .then(() => {
                console.log(`ok`)
            })
            .catch(() => {
                console.log(`что-то не так, книга номер ${count}`)
            });
        console.log(`записали ${countGenre} жанров для книги номер`)
        x ++
        count ++
    }
}
count = 0;
j = 0;
let countTags = 0;
for (let i in books) {
    j += 1;
    let x = 0;
    countTags = 0
    for (let y in books[j - 1].tags) {
        db.none('INSERT INTO books_tags("book_id", tags) VALUES($1, $2)', [j, books[j - 1].tags[x]])
            .then(() => {
                console.log(`ok`)
                countTags ++
            })
            .catch(() => {
                console.log(`что-то не так, книга номер ${count}`)
            });
        console.log(`записали ${countTags}тегов для книги номер`)
        x ++
        count++
    }
}