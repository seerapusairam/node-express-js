const Task = require('../models/Task')

const getTask = async (req,res)=>{
    const tasks = await Task.find({})
    res.json({tasks})
}
const postTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json(error)
    }
}

const getTaskById = async (req,res)=>{
    try {
        const { id:taskId } = req.params
        const task = await Task.findOne({_id:taskId})
        if(!task){
            return res.status(404).json({
                status:false,
                message:"Id not found"
            })
        }
        res.json({task})
    } catch (error) {
        res.status(500).json({
            msg:`No task with id :${req.params.id}`
        })
    }
}

const deleteTaskById = async (req,res)=>{
    try {
        const { id:taskId } = req.params
        const task = await Task.findOneAndDelete({_id:taskId})
        if(!task){
            return res.status(404).json({
                status:false,
                message:"Id not found"
            })
        }
        res.json({task})
    } catch (error) {
        res.status(500).json({
            msg:`No task with id :${req.params.id}`
        })
    }
}

const updateTaskById = async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!task) {
        res.status(500).json({
            msg:`No task with id :${req.params.id}`
        })
  }
  res.status(200).json({ task })
}

module.exports = {
    getTask,
    postTask,
    getTaskById,
    updateTaskById,
    deleteTaskById
}