const express = require('express')
const router = express.Router()

const {
    getAllJobs,
    postJobs,
    getJobById,
    updateJobById,
    deleteJobById
} = require('../controllers/jobs')


router.route('/').get(getAllJobs).post(postJobs)
router.route('/:id').get(getJobById).put(updateJobById).delete(deleteJobById)


module.exports = router