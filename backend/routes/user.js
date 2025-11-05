const express = require('express');

//User Controller function
const { signupUser, loginUser } = require('../controller/userController');

const router = express.Router()

//Login route
router.post('/login', loginUser)

//Signup User
router.post('/signup', signupUser)

module.exports = router;