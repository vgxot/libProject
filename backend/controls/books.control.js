const db = require('../db/database')
const stat = require('../stat/stat.json');

class bookControl {
    async books(req, res) {
        let query = "*";
        let limit = 51;
        let books = await db.query(`SELECT * FROM books ORDER BY popularity DESC LIMIT $1`, [limit])
        books = JSON.stringify(books);
        res.end(books)
    }
    async booksSearch(req, res) {
        console.log("ищем")
        let query = req.body;
        console.log(query)
        query = query.query
        let books = await db.query(`SELECT * FROM books WHERE author LIKE $1`, [query])
        books = JSON.stringify(books);
        res.end(books)
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