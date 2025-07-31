const customError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')

class Unauth extends customError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = Unauth