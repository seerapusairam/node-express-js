const getAllJobs = async (req,res)=>{
    res.json({message:"Get all the jobs"})
}

const getJobById = async (req,res)=>{
    res.json({message:"Get job by ID"})
}

const postJobs = async (req,res)=>{
    res.json({message:"Post jobs"})
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