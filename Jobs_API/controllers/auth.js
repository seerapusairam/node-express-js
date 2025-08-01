const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError} = require('../errors/index')

const login = async(req,res)=>{
    const {name, email, password} = req.body

    if(!name || email || !password){
        throw new BadRequestError("please provide the request body params")
    }

    const user = await User.create({...req.body})
    res.status(StatusCodes.CREATED).json({user})
}

const register = async(req,res)=>{
    res.send("register")
}

module.exports = {
    login,
    register
}