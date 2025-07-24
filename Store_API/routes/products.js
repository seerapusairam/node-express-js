const express = require('express')
const route = express.Router()

const controller = require('../controllers/products')


route.get('/',controller.getAllProducts)
route.get('/static',controller.getAllStatic)

module.exports= route