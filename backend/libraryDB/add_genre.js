const pgp = require('pg-promise')()
const books = require('./books_add.json')
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'libraryDB',
    user: 'postgres',
    password: '00000000'
};
// запись тегов - долгий процесс, у меня занял больше минуты
const db = pgp(cn);
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
        countTags ++
        db.none('INSERT INTO books_tags("book_id", tags) VALUES($1, $2)', [j, books[j - 1].tags[x]])
            .then(() => {
                console.log(`ok`)
            })
            .catch(() => {
                console.log(`что-то не так, книга номер ${count}`)
            });
        console.log(`записали ${countTags}тегов для книги номер`)
        x ++
        count++
    }
}