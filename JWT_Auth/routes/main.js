const express = require('express')
const router = express.Router()

const {login,dashboard} = require('../controllers/main')
const authMiddle = require('../middleware/auth')

router.route('/dashboard').get(authMiddle, dashboard)
router.route('/login').post(login)

module.exports = router