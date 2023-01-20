const Router = require('express')
const router = new Router()
const userController = require('../users/user.control')

router.post('/user', userController.createUser)
router.post('/user/update', userController.userBeAuthor)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

module.exports = router
