var mysql = require('mysql')

var con = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Goldfish@123',
        database: 'students'

    }
)

module.exports = con;