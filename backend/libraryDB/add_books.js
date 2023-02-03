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



for (i in books) {
    db.none('INSERT INTO books("bookName", "isbn", "author", "pages", "year", "age", "photoLink", "resourseLink", "popularity", "rating") VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        [book[i], isbn[i], author[i], pages[i], year[i], age[i], resourceLink[i], "none"])
        .then(() => {
            console.log(`записали ${book[i]}, ${isbn[i]}, ${author[i]}, ${pages[i]}, ${year[i]}, ${age[i]}`)
        })
        .catch(() => {
            console.log(`что-то не так ${book[i]}, ${isbn[i]}, ${author[i]}, ${pages[i]}, ${year[i]}`)
        });
}