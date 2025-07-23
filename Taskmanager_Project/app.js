const connectDb = require('./db/connect')
require('dotenv').config()
const express = require('express')
const app = express() 
const port  = 3000

const taskrouter = require('./router/taskRouter')
const notFound = require('./middleware/NotFound')
const errorHandler = require('./middleware/errorHandler')

//middleware 
app.use(express.json())
app.use(express.static('./public'))
app.use(express.static('./middleware/notFound'))
app.use(express.static('./middleware/errorHandler'))

app.use('/api/v1/tasks', taskrouter)

app.use(notFound)
app.use(errorHandler)

const start = async () =>{
    try {
        await connectDb(process.env.URL)
        app.listen(port,()=>{
        console.log("at 3000..")
    })
    } catch (error) {
        console.log("connection failed to DB")
    }
}

start()