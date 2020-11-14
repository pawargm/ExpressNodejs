const express = require('express')
const router = express.Router()

const { getStudents, createStudents, getStudent, getStudentPost  } = require('./controller/studentcontroller')

router.route('/').get(getStudents).post( getStudentPost,createStudents)
router.route('/:id').get(getStudent)


module.exports = router