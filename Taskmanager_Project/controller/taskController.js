const getTask = (req,res)=>{
    res.send("get all items")
}

const postTask = (req,res)=>{
    res.send("post a item")
}

const getTaskById = (req,res)=>{
    res.send("get one task by id")
}

const updateTaskById = (req,res)=>{
    res.send("update one task by id")
}

const deleteTaskById = (req,res)=>{
    res.send("delete task by id")
}

module.exports = {
    getTask,
    postTask,
    getTaskById,
    updateTaskById,
    deleteTaskById
}