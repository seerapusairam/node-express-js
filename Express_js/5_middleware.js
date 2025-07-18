const express = require('express')
const app = express()
const log = require('./logger')
const auth = require('./auth')

//middle ware 
// req => middleware => res

// top to down approch if we place it below any route it will wont for it 
// thats why we will have middle ware funtion on the top

app.use([log,auth]) // this will apply the log funtion to all routes

// app.use('/api',log) //this will apply for route /api/*

app.get('/', (req,res)=>{
    res.send("Home")
})

app.get('/about', (req,res)=>{
    console.log(req.pass)
    res.send("About")
})

app.get('/api/product', (req,res)=>{
    res.send("Product")
})

app.get('/api/home', (req,res)=>{
    console.log(req.pass) // -> { name: 'sai', id: 4 } we aare getting the data which we added in the middleware
    res.send("API Home")
})

app.listen(5000, ()=>{
    console.log("Starting at 5000..")
})