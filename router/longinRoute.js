const LoginControlles = require('../controlles/loginControlles')
const express = require('express')
const router = express.Router()

router.get('/login', LoginControlles.getlogin)



module.exports = router