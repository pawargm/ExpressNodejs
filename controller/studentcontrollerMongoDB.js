const Student = require('../model/Student')

exports.getStudents = async (req, res, next) => {
    
    console.log("Welcome")
    try{
        const students = await Student.find()
        res.json(students)
    } catch (err) {
        res.json({msg:err})
    }
}

exports.createStudents = async (req, res, next) => {
    const student = new Student(
        {
            studentId : req.body.studentId,
            studentName: req.body.studentName
        })
    try{
        const saveStudent = await student.save()
        res.json(saveStudent)
    } catch (err) { res.json({message: err})}

}



