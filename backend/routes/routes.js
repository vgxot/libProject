const Router = require('express')
const router = new Router()
const userControl = require('../controls/user.control')
const tokenControl = require('../controls/token.control')
const booksControl = require('../controls/books.control')
const other = require('../controls/other')


router.post('/user', userControl.createUser)             // создает юзера
router.post('/user/update', userControl.userBeAuthor)    // делает юзера автором
router.delete('/user', userControl.deleteUser)              // удаляет юзера
router.post('/user/login', userControl.loginUser)      // вход
router.post('/user/logout', userControl.logoutUser)  // logout юзера
router.get('/users/:id', userControl.getUser)               // получить данные о юзере
router.get('/ratings/users/:id', userControl.getUserRatings)               // получить данные юзера о рейтинге, поставленном книгам
router.get('/users', userControl.getUsers)               // получить всех юзеров
router.post('/users/search', userControl.searchUsers)               // поиск юзера

router.post('/token/refresh', userControl.refresh)
router.post('/user/getToken', tokenControl.generateToken)   // generate token

router.post('/books/upload', booksControl.booksUpload)               // загрузка книги на сервер
router.get('/books/download', booksControl.booksDownload)               // загрузка книги с сервера
router.get('/books', booksControl.books)               // получить книги
router.post('/books/search', booksControl.booksSearch)               // поиск книги
router.get('/books/:id', booksControl.bookInfo)               // получить данные о какой-то книге
router.get('/genre/books/:id', booksControl.bookGenre)               // получить жанр книги
router.get('/tags/books/:id', booksControl.bookTags)               // получить теги книги

router.get('/statistics', other.statistics)               // получение статистики (beta)
router.get('/datetime', other.dateTime)
router.get('/date', other.date)

module.exports = router
