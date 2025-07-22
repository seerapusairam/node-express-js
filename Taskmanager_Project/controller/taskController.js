const model = require('../models/Task')

const getTask = async (req,res)=>{
    const getTask = await model.find({})
    res.json({data:getTask})
}
const postTask = async (req,res)=>{
    try {
        const postTask = await model.create(req.body)
        res.status(201).json({postTask})
    } catch (error) {
        res.status(500).json(error)
    }
}

const getTaskById = async (req,res)=>{
    try {
        const { id:taskId } = req.params
        const getId = await model.findOne({_id:taskId})
        if(!getId){
            return res.status(404).json({
                status:false,
                message:"Id not found"
            })
        }
        res.json({data:getId})
    } catch (error) {
        res.status(500).json({
            msg:`No task with id :${req.params.id}`
        })
    }
}

const updateTaskById = (req,res)=>{
    res.send("update one task by id")
}

const deleteTaskById = async (req,res)=>{
    try {
        const { id:taskId } = req.params
        const deleteId = await model.findOneAndDelete({_id:taskId})
        if(!deleteId){
            return res.status(404).json({
                status:false,
                message:"Id not found"
            })
        }
        res.json({data:deleteId})
    } catch (error) {
        res.status(500).json({
            msg:`No task with id :${req.params.id}`
        })
    }
}

module.exports = {
    getTask,
    postTask,
    getTaskById,
    updateTaskById,
    deleteTaskById
}