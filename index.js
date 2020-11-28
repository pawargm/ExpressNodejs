const express = require('express')
const app = express()
const router = require('./studentrouter')
const routerMongoDB = require('./studentmongodbrouter')
const routerSubject = require('./subjectrouter')
const routerSub = require('./')
const mongoose = require('mongoose')

app.use(express.json())


//const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
//app.use(bodyParser.json())

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myfirstdb', {useNewUrlParser:true}, ()=>console.log('Mongoose Connected'))

//Add middleware logic for authentication
app.use(require('./mware/auth'))
app.use('/students', router)
app.use(require('./mware/auth'))
app.use('/subjects', routerSubject)
app.use('/login', require('./controller/logincontroller'))

app.use('/studentDB', routerMongoDB)
//app.use('/studentDB', routerMongoDB)
app.listen(5000, () => console.log('Server is running'))
