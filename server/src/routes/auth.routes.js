const Router = require ('express')
const router = Router()
const authController = require('../controllers/auth.controller')

//router.get('/verificacorreoregistrado/:email', authController.verificaCorreoRegistrado)


router.post('/signup', authController.signUp)
module.exports= router