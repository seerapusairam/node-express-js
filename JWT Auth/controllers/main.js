const customError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const dashboard = async(req,res,next)=>{
    const {id,username} = req.user
    const randomNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello: ${id} ,${username}`,secret:`your lucky number ${randomNumber}`})
}

const login = async(req,res,next)=>{
    const {username,password} = req.body

    if(!username || !password){
        throw new customError("Please Provide the data",400)
    }

    //just for demo
    const id = new Date().getDate()

    const token = jwt.sign({id,username},secret,{expiresIn:'30d'})
    res.json({message:"Fine",token})

}

module.exports = {
    dashboard,login
}