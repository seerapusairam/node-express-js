const express = require('express')
const app = express()

const peopleRouter = require('./router/peopleRouter')
const loginRoute = require('./router/loginRouter')

app.use(express.static('./web_post')) 
//middleware to parse the req.body
app.use(express.urlencoded({ extended: false })) 
//parse json //request for javascript in UI
app.use(express.json())

app.use('/api/people', peopleRouter)

app.use('/login', loginRoute)

app.listen(5050,()=>{
    console.log("Server starting at 5050...")
})