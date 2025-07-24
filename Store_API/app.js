const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
require('express-async-errors')

const notFound = require('./middleware/not-found')
const errorHandling = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const routers = require('./routes/products')

const port = process.env.PORT || 3000
//middleware
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1><a href="api/v1/products">Products</a>')
})

app.use('/api/v1/products',routers)

app.use(notFound)
app.use(errorHandling)

const start = async ()=>{
    try {
        await connectDB(process.env.URL)
        app.listen(port, ()=>{
            console.log(`Running at: ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()