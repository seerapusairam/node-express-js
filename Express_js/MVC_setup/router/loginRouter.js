const express = require('express')
const router = express.Router()

const controller = require('../controller/loginController')

router.post('/', controller.postlogin)

module.exports = router