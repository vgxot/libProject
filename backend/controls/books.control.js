const db = require('../db/database')
const stat = require('../stat/stat.json');

class bookControl {
    async books(req, res) {
        let query = "*";
        let limit = 51;
        let books = await db.query(`SELECT * FROM books ORDER BY popularity DESC LIMIT $1`, [limit])
        books = JSON.stringify(books);
        console.log('отправил книги по запросу')
        res.end(books)
    }
    async booksSearch(req, res) {

        let query = req.body;
        query = query.query
        console.log(`ищем ${query}`)
        let books = await db.query(`SELECT * FROM books WHERE author LIKE $1`, [query])
        books = JSON.stringify(books);
        res.end(books)
    }
    async bookInfo(req, res) {
        let query = parseInt(req.params.id);
        console.log(`ищем книгу с id: ${query}`)
        let book = await db.query(`SELECT * FROM books WHERE book_id=$1`, [query])
        book = JSON.stringify(book);
        res.end(book)
    }
    async booksUpload(req, res) {

    }
    async booksDownload(req, res) {

    }
    async statistics(req, res) {
        let stat = require('../stat/stat.json')
        stat = JSON.stringify(stat)
        res.end(stat)
    }
}

module.exports = new bookControl()