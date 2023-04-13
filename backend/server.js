const express = require('express')
const router = require(__dirname + '/routes/routes')
const app = express()
const cors = require('cors')
const PORT = 3000;
const path = require('path')
const fs = require("fs");
const date = require("./dateTime")
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)
app.listen(PORT, () =>
    console.log(`сервер запущен. Порт ${PORT}`))



app.get(`/img/book/min/:id`, function (req, res) {
    let book_id = req.params.id
    res.sendFile(__dirname + `/img/books/360p/${book_id}`);
});
app.get(`/img/book/mid/:id`, function (req, res) {
    let book_id = req.params.id
    res.sendFile(__dirname + `/img/books/1080p/${book_id}`);
});
app.get(`/img/book/max/:id`, function (req, res) {
    let book_id = req.params.id
    res.sendFile(__dirname + `/img/books/2160p/${book_id}`);
});



app.get(`/book/get`, function (req, res) {
    let book_id = req.params.id
    let file = `${__dirname}/libraryDB/book.txt`
    res.download(file);
});
app.get(`/img/user/:id`, function (req, res) {
    let id = req.params.id
    res.sendFile(__dirname + `/img/users/avatars/${id}.jpg`);
});
app.get(`/img/background/:id`, function (req, res) {
    let id = req.params.id
    res.sendFile(__dirname + `/img/users/backgrounds/${id}.jpg`);
});