const books = require('./books_add.json')
const db = require('./../db/database')
const {errors} = require("pg-promise");
let k = -1;
for (let i in books) {
  k += 1;
  db.none('INSERT INTO book_ratings(book_id, five, four, three, two, one) VALUES($1, $2, $3, $4, $5, $6)',
    [k, books[k].five, books[k].four, books[k].three, books[k].two, books[k].one])
    .then(() => {
      console.log(`записали ${k} книгу`)
    })
    .catch(() => {
      console.log(errors)
    })
}
