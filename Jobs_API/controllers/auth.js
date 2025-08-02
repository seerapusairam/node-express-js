const model = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError,UnauthenticatedError} = require('../errors/index')

// Controller for handling user login
const register= async(req,res)=>{
    // Create a new user with the request body data
    const user = await model.create({...req.body})
    // Generate a JWT token for the user
    const token = user.createJWT()
    // Respond with the user's name and the generated token
    res.status(StatusCodes.CREATED).json({user:{name:user.name},token})
}

// Controller for handling user registration (currently a placeholder)
const login = async(req,res)=>{
    // Extract email and password from the request body
    const {email, password} = req.body
    // Check if both email and password are provided
    if (!email || !password) {
        throw new BadRequestError("Please give the data in req body")
    }
    // Find the user by email
    const user = await model.findOne({email})
    if (!user) {
        throw new UnauthenticatedError("Invalid Credentials")
    }
    // Check if the provided password matches the stored password
    const isPassword = await user.checkPassword(password)
    if (!isPassword) {
        throw new UnauthenticatedError("Invalid Credentials")
    }
    // Generate a JWT token for the authenticated user
    const token = user.createJWT()
    // Respond with the user's name and the generated token
    res.status(StatusCodes.OK).json({user: {name: user.name}, token})
}

module.exports = {
    login,
    register
}