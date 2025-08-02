const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors/index')

// Middleware to verify JWT token in the Authorization header
const verifyToken = async (req, res, next) => {
    // Get the Authorization header from the request
    const authHeader = req.headers.authorization

    // Check if the header exists and starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        // If not, throw an authentication error
        throw new UnauthenticatedError("Please provide token.")
    }

    // Extract the token from the header
    const token = authHeader.split(' ')[1]
    try {
        // Verify the token using the secret key
        const payload = jwt.verify(token, process.env.JWT_SECRET)

        // Attach user information to the request object
        req.user = { userId: payload.userId, name: payload.user }
    } catch (error) {
        // If verification fails, throw an authentication error
        throw new UnauthenticatedError("Invalid Token")
    }
    // Proceed to the next middleware or route handler
    next()
}

module.exports = verifyToken
