const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')


router.get('/', homeController.getIndex) //main page
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin) //when i actually try to login
router.get('/logout', authController.logout) //ability to logout
router.get('/signup', authController.getSignup) //allows us to access the signup
router.post('/signup', authController.postSignup) //posting of sign up, the post on sign up i used the authController and postSignup method, look at auth.js

module.exports = router