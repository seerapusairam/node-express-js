const express = require('express')
const {products} = require('./data.js')
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product) =>{
     const {id, name, image} = product
     return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/1', (req,res)=>{
    const number = products.find((product)=> product.id === 1)
    const {id, name, image} = number
    res.json({id, name, image})
})



app.listen(5000, ()=>{
    console.log("Starting at 5000..")
})