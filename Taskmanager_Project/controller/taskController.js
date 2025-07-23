const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')

const getTask = asyncWrapper(async (req,res)=>{
    const tasks = await Task.find({})
    res.json({tasks})
})

const postTask = asyncWrapper(async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

const getTaskById =asyncWrapper(async (req,res)=>{
        const { id:taskId } = req.params
        const task = await Task.findOne({_id:taskId})
        if(!task){
            return res.status(404).json({
                status:false,
                message:"Id not found"
            })
        }
        res.json({task})
})

const deleteTaskById = asyncWrapper(async (req,res)=>{
        const { id:taskId } = req.params
        const task = await Task.findOneAndDelete({_id:taskId})
        if(!task){
            return res.status(404).json({
                status:false,
                message:"Id not found"
            })
        }
        res.json({task})
})

const updateTaskById = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!task) {
        return res.status(404).json({
            msg:`No task with id :${req.params.id}`
        })
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