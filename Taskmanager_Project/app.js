const connectDb = require('./db/connect')
require('dotenv').config()
const express = require('express')
const app = express() 
const port  = 3000

const taskrouter = require('./router/taskRouter')

//middleware 
app.use(express.json())

app.use('/api/v1/tasks', taskrouter)

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