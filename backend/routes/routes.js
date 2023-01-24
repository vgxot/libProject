const Router = require('express')
const router = new Router()
const userController = require('../users/user.control')

router.post('/user', userController.createUser)             // создает юзера
router.post('/user/update', userController.userBeAuthor)    // делает юзера автором
router.delete('/user', userController.deleteUser)              // удаляет юзера
router.post('/user/auth', userController.authUser)      // аутентификация юзера
router.post('/user/logout', userController.logoutUser)
router.post('/user/getToken', userController.logoutUser)
router.post('/user/token', userController.logoutUser)
router.post('/user/upload', userController.logoutUser)
router.get('/user/download', userController.logoutUser)//

module.exports = router
