const express = require('express')
const path = require('path')
const app = express()

//static assests and middleware
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     // we need to send the file path with absoulte path of the file 
//     // either we can include it directly or we can use path module 

//     //without 
//     // res.sendFile('C:/Users/subbu/Desktop/Backend API dev/Express_js/web/index.html')
//     //with
//     res.sendFile(path.resolve(__dirname,'./web/index.html')
// added .html file in static assests
// })

app.all('*',(req,res)=>{
    res.status(404).json({code:404,error:"resource not found"})
})

app.listen(5000, ()=>{
    console.log("Server listing at 5000")
})