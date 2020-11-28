const express = require('express')
const routerMongoDB = express.Router()

const { getStudents, createStudents  } = require('./controller/studentcontrollerMongoDB')

routerMongoDB.route('/').get(getStudents).post(createStudents)
//routerMongoDB.route('/:id').get(getStudent)


module.exports = routerMongoDB