const express = require('express')
const router = require(__dirname + '/routes/routes')
const app = express()
const cors = require('cors')
const PORT = 3000;
const path = require('path')

app.use(express.json())
app.use(cors())
app.use('/api', router)
app.listen(PORT, () => console.log(`Сервер запущен. Порт ${PORT}`))

app.get(`/book-photo/:id`, function (req, res) {
    let book_id = req.params.id
    res.sendFile(__dirname + `/libraryDB/img/1080p/${book_id}`);
});
app.get(`/book/full-size/:id`, function (req, res) {
    let book_id = req.params.id
    res.sendFile(__dirname + `/libraryDB/full-size-books/${book_id}`);
});
app.get(`/book/get`, function (req, res) {
    let book_id = req.params.id
    let file = `${__dirname}/libraryDB/book.txt`
    res.download(file);
});
app.get(`/user-avatar/:id`, function (req, res) {
    let username = req.params.id
    res.sendFile(__dirname + `/libraryDB/img/${username}.jpg`);
});