const model = require('../models/Job')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError,NotFoundError} = require('../errors/index')

const getAllJobs = async (req,res)=>{
    const job = await model.find({createdBy:req.user.userId}).sort('-createdAt')
    res.status(StatusCodes.OK).json({job, count:job.length})
}

const getJobById = async (req,res)=>{
    const {user:{userId},params:{id}} = req
    const job = await model.findOne({
        _id:id,
        createdBy:userId
    })
    
    if(!job){
        throw new NotFoundError("User not found")
    }
    res.status(StatusCodes.OK).json({job})
}

const postJobs = async (req,res)=>{
    req.body.createdBy = req.user.userId
    const job = await model.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const updateJobById = async (req,res)=>{
    const {
        body:{company,position},
        user:{userId},
        params:{id}
    } = req
    if(company === ''|| position === ''){
        throw new BadRequestError("Company and Position fields cannot be empty")
    }
    const job = await model.findOneAndUpdate({
        _id:id,
        createdBy:userId
    },req.body,{new:true, runValidators:true})
    
    if(!job){
        throw new NotFoundError("User not found")
    }
    res.status(StatusCodes.OK).json({job})
}

const deleteJobById = async (req,res)=>{
    const {
        user:{userId},
        params:{id}
    } = req
    const job = await model.findByIdAndDelete({
        _id:id,
        createdBy:userId
    })
    
    if(!job){
        throw new NotFoundError("User not found")
    }
    res.status(StatusCodes.OK).json({job})
}

module.exports = {
    getAllJobs,
    getJobById,
    postJobs,
    updateJobById,
    deleteJobById
}