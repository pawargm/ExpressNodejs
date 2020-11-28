const mongoose = require('mongoose')
const StudentSchema = mongoose.Schema(
    {
        studentId: {
            type: Number,
            required: true
        },
        studentName: 
        {
            type:String,
            required: true
        }
    }
)

module.exports = mongoose.model('student', StudentSchema)