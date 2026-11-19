const Student = require("../models/studentModel");

function getStudents(req, res) {
    const students = Student.getAllStudents();

    res.status(200).json({
        success: true,
        data: students
    });
}

function getStudent(req, res) {
    const student = Student.getStudentById(req.params.id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.status(200).json({
        success: true,
        data: student
    });
}

function createStudent(req, res) {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: "Name and email are required"
        });
    }

    const student = Student.createStudent({ name, email });

    res.status(201).json({
        success: true,
        message: "Student created successfully",
        data: student
    });
}

module.exports = {
    getStudents,
    getStudent,
    createStudent
};