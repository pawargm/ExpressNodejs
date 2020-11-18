const con = require('../configuration/mysql-config')

exports.getSubjects = (req,res, next) => {

    con.query("select * from subject",(err, rows) => {
        
        if(err) throw err

        res.status(200).json(rows)
    })
}