const model = require('../models/Job')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError,NotFoundError} = require('../errors/index')

const getAllJobs = async (req,res)=>{
    const job = await model.find({createdBy:req.user.userId}).sort('-createdAt')
    res.status(StatusCodes.OK).json({job, count:job.length})
}

const getJobById = async (req,res)=>{
    const {id} = req.params
    const job = await model.findById(id)
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
    res.json({message:"Update job by ID"})
}

const deleteJobById = async (req,res)=>{
    
    res.json({message:"Delete job by ID"})
}

module.exports = {
    getAllJobs,
    getJobById,
    postJobs,
    updateJobById,
    deleteJobById
}