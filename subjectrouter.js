const express = require('express')
const routerSubject = express.Router()

const { getSubjects  } = require('./controller/coursecontroller')

routerSubject.route('/').get(getSubjects)

module.exports = routerSubject