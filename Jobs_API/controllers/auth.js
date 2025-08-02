const model = require('../models/User')
const {StatusCodes} = require('http-status-codes')

// Controller for handling user login
const login = async(req,res)=>{
    // Create a new user with the request body data
    const user = await model.create({...req.body})
    // Generate a JWT token for the user
    const token = user.createJWT()
    // Respond with the user's name and the generated token
    res.status(StatusCodes.CREATED).json({user:{name:user.name},token})
}

// Controller for handling user registration (currently a placeholder)
const register = async(req,res)=>{
    res.send("register")
}

module.exports = {
    login,
    register
}