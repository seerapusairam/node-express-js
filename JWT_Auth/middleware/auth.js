const {UnauthorizedError} = require('../errors/allErrors')
const jwt = require('jsonwebtoken')

const auth = async(req,res,next)=>{
    console.log(req.headers.authorization);

    const authHeader = req.headers.authorization
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthorizedError("Please provide the Auth Token")
    }
 
    const token = authHeader.split(' ')[1]
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const {id,username} = decode

        req.user = {id,username}
    } catch (error) {
        throw new UnauthorizedError("No authorized for this route")
    }

    next()
}

module.exports = auth