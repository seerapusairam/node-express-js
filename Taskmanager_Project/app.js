const express = require('express')
const app = express() 
const port  = 3000

const taskrouter = require('./router/taskRouter')

//middleware 
app.use(express.json())

app.use('/api/v1/tasks', taskrouter)

app.listen(port,()=>{
    console.log("at 3000..")
})