const Router = require('express')
const router = new Router()
const controller = require('./routes/authController')
const {check} = require("express-validator")
const authMiddleware = require('middleware/authMiddleware')
const roleMiddleware = require('middleware/roleMiddleware')

router.post('/registration', [
    check('username', "Cannot be empty").notEmpty(),
    check('password', "Password might be less than 10 and more than 4").isLength({min:4, max:10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(["USER"]), controller.getUsers)

module.exports = router