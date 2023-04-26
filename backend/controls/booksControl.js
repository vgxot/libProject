const db = require('../db/database')
const stat = require('../stat/stat.json');
const fs = require("fs");
const date = require("../dateTime");


// пока что все эти функции на каждую книгу отправляют всю строку из бд, сделано это из-за удобства парсинга json
// в скором времени сделаю так, чтобы запрашивалась и отправлялась только нужная информация


class bookControl {
    async books(req, res) {
        let limit = 50;
        let books = await db.query(`SELECT * FROM books ORDER BY popularity DESC LIMIT $1`, [limit])
        books = JSON.stringify(books);
        console.log('отправил книги по запросу')
        res.end(books)
    }
    async booksSearch(req, res) {
        let {query, sorting, sortColumn, limit} = req.body;
        console.log(req.body)
        if (query.length > 0) {
            let books = await db.query(`SELECT * FROM books WHERE author LIKE $3
                        OR book_name LIKE $3 OR year LIKE $3 ORDER BY ${sortColumn} ${sorting} LIMIT ${limit}`, [sortColumn, sorting, query])
            books = JSON.stringify(books);
            res.end(books)
        } else {
            let books = await db.query(`SELECT * FROM books ORDER BY ${sortColumn} ${sorting} LIMIT ${limit}`, [sortColumn, sorting])
            books = JSON.stringify(books);
            console.log('книги отправлены')
            res.end(books)
        }
    }
    async bookInfo(req, res) {
        let query = parseInt(req.params.id);
        console.log(`ищем книгу с id: ${query}`)
        let book = await db.query(`SELECT * FROM books WHERE book_id=$1`, [query])
        book = JSON.stringify(book);
        res.end(book)
    }
    async bookGenre(req, res) {
        let query = parseInt(req.params.id);
        console.log(`ищем жанры для книги с id: ${query}`)
        let genre = await db.query(`SELECT genre FROM books_genre WHERE book_id=$1`, [query])
        genre = JSON.stringify(genre);
        res.end(genre)
    }
    async bookTags(req, res) {
        let query = parseInt(req.params.id);
        console.log(`ищем теги для книги с id: ${query}`)
        let tags = await db.query(`SELECT tags FROM books_tags WHERE book_id=$1`, [query])
        tags = JSON.stringify(tags);
        res.end(tags)
    }
    async booksUpload(req, res) {

    }
    async booksDownload(req, res) {

    }
}

module.exports = new bookControl()