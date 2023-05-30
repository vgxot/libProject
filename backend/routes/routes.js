const Router = require('express')
const router = new Router()
const userControl = require('../controls/userControl')
const booksControl = require('../controls/booksControl')
const other = require('../controls/other')
const auth = require("../middlewares/auth")

router.post('/user', userControl.createUser)
router.delete('/user', userControl.deleteUser)
router.post('/user/update', userControl.userBeAuthor)
router.post('/user/login', userControl.loginUser)
router.post('/user/logout', auth, userControl.logoutUser)
router.get('/user/refresh', userControl.refreshToken)
router.get('/user/account', auth, userControl.getAccount)
router.get('/users/:id', userControl.getUser)
router.get('/ratings/users/:id', userControl.getUserRatings)
router.post('/users/search', userControl.searchUsers)

router.post('/books/upload', booksControl.booksUpload)               // загрузка книги на сервер
router.get('/books/download', booksControl.booksDownload)               // загрузка книги с сервера
router.get('/books', booksControl.books)               // получить книги
router.post('/books/search', booksControl.booksSearch)               // поиск книги
router.get('/books/info/:id', booksControl.bookInfo)               // получить данные о какой-то книге

router.get('/statistics', other.statistics)               // получение статистики (beta)
router.get('/datetime', other.dateTime)
router.get('/date', other.date)

module.exports = router
