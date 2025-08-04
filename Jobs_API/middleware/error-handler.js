// Import the CustomAPIError class from the errors module
const { CustomAPIError } = require('../errors')
// Import StatusCodes for standardized HTTP status codes
const { StatusCodes } = require('http-status-codes')

// Error handling middleware function
const errorHandlerMiddleware = (err, req, res, next) => {
  // Set up a default custom error object
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong'
  }

  // Handle custom API errors
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ message: err.message })
  }

  // Handle MongoDB duplicate key error
  if (err.code && err.code === 11000) {
    customError.message = `Duplicate value entered ${err.keyValue} field, choose another value`
    customError.statusCode = StatusCodes.BAD_GATEWAY
  }

  // Handle Mongoose validation errors
  if (err.name == "ValidationError") {
    customError.message = Object.values(err.errors).map((item) => item.message).join(',')
    customError.statusCode = StatusCodes.BAD_GATEWAY
  }

  // Handle Mongoose cast errors (e.g., invalid ObjectId)
  if (err.name == "CastError") {
    customError.message = `No Id was found: ${err.value}`
    customError.statusCode = StatusCodes.NOT_FOUND
  }

  // Send the custom error response
  return res.status(customError.statusCode).json({ message: customError.message })
}

// Export the middleware
module.exports = errorHandlerMiddleware
