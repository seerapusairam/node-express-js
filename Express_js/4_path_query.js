const express = require('express')
const {products} = require('./data.js')
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})
//getting json data
app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product) =>{
     const {id, name, image} = product
     return {id, name, image}
    })
    res.json(newProducts)
})
//path parameter - route param
app.get('/api/products/:productId', (req,res)=>{
    const id = req.params.productId
    const number = products.find((product)=> product.id === Number(id))
    // const {id, name, image} = number
    if(number){
        return res.json(number)
    }else{
        return res.status(404).json({code:404,error:"Resource not found"})
    }
})
// accessing query parameters
app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    const {start, limit} = req.query
    let newProducts = [...products];// we can do products direct but it will ref to same memory for protecting the data we are using spread operator

    if(start){
        newProducts = products.filter((product) => {
            return product.name.startsWith(start)
        })
    }

    if(limit){
        newProducts = newProducts.slice(0,Number(limit))
    }

    if(newProducts.length < 1){
        return res.status(404).json({code:404,error:"Resource not found"})
    }else{
        return res.status(200).json({ success:true, data:newProducts})
    }
})

app.listen(5000, ()=>{
    console.log("Starting at 5000..")
})