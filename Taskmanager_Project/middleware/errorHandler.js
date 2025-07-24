const {customError} = require('../errors/customError') 
const errorHandler = (err,req,res,next) =>{
    if(err instanceof customError){
        return res.status(err.statusCode).json({msg:err.message})
    }else{
        return res.status(500).json({msg:"somethings went wrong"})
    }
}

module.exports = errorHandler