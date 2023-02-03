// этот файл содержит цикл для записи всех книг в базу данных
const fs = require('fs')
const pgp = require('pg-promise')()
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'libraryDB',
    user: 'postgres',
    password: '00000000'
};
const db = pgp(cn);

let jsonBook = fs.readFileSync('book.json');
let books = JSON.parse(jsonBook)

let k;
for (k in books) {
    console.log(k)
}

/*
for (i in books) {
    db.none('INSERT INTO books("bookName", "isbn", "author", "pages", "year", "age", "photoLink", "resourceLink", "popularity", "rating") VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        [books.bookName[i], books.isbn[i], books.author[i], books.info_volume[i], books.info_year[i], books.info_age[i], books.resourceLink[i], "none", books.popularity[i], books.rating[i]])
        .then(() => {
            console.log(`записали`)
        })
        .catch(() => {
            console.log(`что-то не так ${book[i]}, ${isbn[i]}, ${author[i]}, ${pages[i]}, ${year[i]}`)
        });
}*/
