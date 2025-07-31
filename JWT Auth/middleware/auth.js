const customError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const auth = async(req,res,next)=>{
    console.log(req.headers.authorization);

    const authHeader = req.headers.authorization
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new customError("Please provide the Auth Token",400)
    }

    const token = authHeader.split(' ')[1]
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const {id,username} = decode

        req.user = {id,username}
    } catch (error) {
        throw new customError("Unauthorized",401)
    }

    next()
}

module.exports = auth