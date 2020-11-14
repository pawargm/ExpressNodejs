const express = require('express')
const app = express()
const router = require('./studentrouter')
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/students', router)
app.listen(5000, () => console.log('Server is running'))
