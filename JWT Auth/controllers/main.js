const customError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.JWT_SECRET

const dashboard = async(req,res,next)=>{
    const authHeader = req.headers.authorization
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError("Please provide the Auth Token",400)
    }

    const token = authHeader.split(' ')[1]
    try {
        const decode = jwt.verify(token,secret)
        const randomNumber = Math.floor(Math.random()*100)
        res.status(200).json({msg:`Hello ,${decode.username}`,secret:`your lucky number ${randomNumber}`})
    } catch (error) {
        throw new CustomAPIError("UnAuth Token",401)
    }
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