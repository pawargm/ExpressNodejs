const express = require('express')
const app = express()
const router = require('./studentrouter')
const routerSubject = require('./subjectrouter')
const routerSub = require('./')

app.use(express.json())


//const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
//app.use(bodyParser.json())

//Add middleware logic for authentication
app.use(require('./mware/auth'))
app.use('/students', router)
app.use(require('./mware/auth'))
app.use('/subjects', routerSubject)
app.use('/login', require('./controller/logincontroller'))
app.listen(5000, () => console.log('Server is running'))
