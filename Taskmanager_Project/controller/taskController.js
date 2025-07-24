const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const createError = require('../errors/customError')

const getTask = asyncWrapper(async (req,res)=>{
    const tasks = await Task.find({})
    res.json({tasks})
})

const postTask = asyncWrapper(async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

const getTaskById =asyncWrapper(async (req,res,next)=>{
        const { id:taskId } = req.params
        const task = await Task.findOne({_id:taskId})
        if(!task){
            return next(createError.createCustomError('No task with id',404))
        }
        res.json({task})
})

const deleteTaskById = asyncWrapper(async (req,res,next)=>{
        const { id:taskId } = req.params
        const task = await Task.findOneAndDelete({_id:taskId})
        if(!task){
            return next(createError.createCustomError('No task with id',404))
        }
        res.json({task})
})

const updateTaskById = asyncWrapper(async (req, res,next) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!task) {
        return next(createError.createCustomError('No task with id',404))
  }
  res.status(200).json({ task })
})

module.exports = {
    getTask,
    postTask,
    getTaskById,
    updateTaskById,
    deleteTaskById
}