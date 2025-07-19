const express = require('express')
const router = express.Router()

const controller = require('../controller/peopleController')

// //GET
// router.get('/', controller.getPeople)
// //POST
// router.post('/', controller.postPeople)

// //request to check in postman
// router.post('/postman', controller.postPostman)

// //PUT - Update id
// router.put('/:id', controller.putPeople)
// // //DELETE - id
// router.delete('/:id', controller.deletePeople)

// or we can do in this method also 
router.route('/').get(controller.getPeople).post(controller.postPeople)
router.route('/postman').post(controller.postPostman)
router.route('/:id').put(controller.putPeople).delete(controller.deletePeople)


module.exports = router