const Router = require('express')
const router = new Router()
const userControl = require('../controls/user.control')
const tokenControl = require('../controls/token.control')
const booksControl = require('../controls/books.control')

router.post('/user', userControl.createUser)             // создает юзера
router.post('/user/update', userControl.userBeAuthor)    // делает юзера автором
router.delete('/user', userControl.deleteUser)              // удаляет юзера
router.post('/user/auth', userControl.authUser)      // аутентификация юзера
router.post('/user/logout', userControl.logoutUser)  // logout юзера
router.get('/users/:id', userControl.getUser)               // получить данные о юзере
router.get('/ratings/users/:id', userControl.getUserRatings)               // получить данные юзера о рейтинге, поставленном книгам
router.get('/users', userControl.getUsers)               // получить всех юзеров
router.post('/users/search', userControl.searchUsers)               // поиск юзера

router.post('/user/getToken', tokenControl.generateToken)   // generate token
router.get('/user/token', tokenControl.saveToken)   // save token

router.post('/books/upload', booksControl.booksUpload)               // загрузка книга на сервер
router.get('/books/download', booksControl.booksDownload)               // загрузка книги с сервера
router.get('/books', booksControl.books)               // получить книги
router.post('/books/search', booksControl.booksSearch)               // поиск книги
router.get('/books/:id', booksControl.bookInfo)               // получить данные о какой-то книге
router.get('/genre/books/:id', booksControl.bookGenre)               // получить жанр книги
router.get('/tags/books/:id', booksControl.bookTags)               // получить теги книги
router.get('/statistics', booksControl.statistics)               // получение статистики (beta)



module.exports = router
