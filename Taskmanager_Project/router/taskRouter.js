const express = require('express')
const router = express.Router();

const controller = require('../controller/taskController')
// app.get('/api/v1/tasks) - get all task
router.get('/',controller.getTask)

// app.post('/api/v1/tasks) - create new task
router.post('/',controller.postTask)

// app.get('/api/v1/tasks/:id) - get one task
router.get('/:id',controller.getTaskById)

// app.patch('/api/v1/tasks:id) - update one task
router.patch('/:id',controller.updateTaskById)

// app.delete('/api/v1/tasks/:id) - delete one task
router.delete('/:id',controller.deleteTaskById)

module.exports = router