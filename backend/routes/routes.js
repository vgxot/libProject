const Router = require('express')
const router = new Router()
const userControl = require('../controls/user.control')
const tokenControl = require('../controls/token.control')
const booksControl = require('../controls/books.control')

router.post('/test', userControl.testRequest)
router.get('/test', userControl.testResponse)

router.post('/user', userControl.createUser)             // создает юзера
router.post('/user/update', userControl.userBeAuthor)    // делает юзера автором
router.delete('/user', userControl.deleteUser)              // удаляет юзера
router.post('/user/auth', userControl.authUser)      // аутентификация юзера
router.post('/user/logout', userControl.logoutUser)  // logout юзера

router.post('/user/getToken', tokenControl.generateToken)   // generate token
router.get('/user/token', tokenControl.saveToken)   // save token

router.post('/books/upload', booksControl.booksUpload)
router.get('/books/download', booksControl.booksDownload)
router.get('/books', booksControl.books)
router.post('/books/search', booksControl.booksSearch)
router.get('/statistics', booksControl.statistics)
router.get('/books/:id', booksControl.bookInfo)



module.exports = router
