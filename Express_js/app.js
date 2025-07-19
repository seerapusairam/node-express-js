const express = require('express')
const app = express()
const { people } = require('./data')

app.use(express.static('./web_post')) 
console.log({ people } )
//parse the urlencoded content type to req.body
app.use(express.urlencoded({ extended: false })) 
app.get('/api/people', (req,res)=>{
    res.status(200).json({
        status:true,
        data:people
    })
})
//parse json 
//request for javascript in UI
app.use(express.json())
app.post('/api/people', (req,res)=>{
    const {name} = req.body

    if(!name){
        res.status(400).json({
            status:false,
            msg:"Please provide the value" // in js we are giving a alert so it will display
        })
    }else{
        res.status(201).send({
            status:true,
            person:name // sending the value to the java script - in that we are appending the value temporally so if we reload we will get the pre values
        })
    }
})
//request to check in postman
app.post('/api/postman/people', (req,res)=>{
    const {name} = req.body

    if(!name){
        res.status(400).json({
            status:false,
            msg:"Please provide the value"
        })
    }else{
        res.status(201).send({
            status:true,
            data:[...people],name
        })
    }
})

//PUT
app.put('/api/people/:id', (req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const person = people.find((p)=> p.id === Number(id))

    if(!person){
        res.status(404).json({
            code:404,
            message:`person id: ${id} not found`
        })
    }
    
    if(name){
        people.filter((p) => p.id === Number(id)).map((p) => p.name = `${name}`)
        res.json({
            data:people
        })
    }else{
        res.status(404).json({
            code:404,
            message:"Please provide the name"
        })
    }
})

app.post('/login',(req,res)=>{
    const {name} = req.body

    if(name){
        res.send(`Welcome ${name}`)
    }else{
        res.status(400).json({code:29,message:"Missing Form value"})
    }
})

app.listen(5050,()=>{
    console.log("Server starting at 5050...")
})