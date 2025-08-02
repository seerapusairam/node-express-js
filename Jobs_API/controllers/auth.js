const model = require('../models/User')
const {StatusCodes} = require('http-status-codes')


const login = async(req,res)=>{
    const user = await model.create({...req.body})
    const token = user.createJWT()
    console.log(token)
    res.status(StatusCodes.CREATED).json({user:{name:user.name},token})
}

const register = async(req,res)=>{
    res.send("register")
}

module.exports = {
    login,
    register
}