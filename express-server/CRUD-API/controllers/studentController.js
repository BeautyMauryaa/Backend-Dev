const students = require("../models/studentModel");

// 1. Get all students
const getStudents = (req, res) => {
    res.status(200).json({
        success: true,
        data: students
    });
};

// 2 & 3. Get single student by ID
const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

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
};

// 4, 5 & 10. Create a new student
const createStudent = (req, res) => {
    const { name, email, department } = req.body;

    // Check missing fields
    if (!name || !email || !department) {
        return res.status(400).json({
            success: false,
            message: "Name, email, and department are required"
        });
    }

    // Check duplicate email
    const emailExists = students.find(s => s.email === email);
    if (emailExists) {
        return res.status(409).json({
            success: false,
            message: "Email is already registered"
        });
    }

    const newStudent = {
        id: students.length + 1,
        name,
        email,
        department
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        data: newStudent
    });
};

// 6. Full update (PUT)
const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, department } = req.body;

    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    if (!name || !email || !department) {
        return res.status(400).json({
            success: false,
            message: "Name, email, and department are required"
        });
    }

    student.name = name;
    student.email = email;
    student.department = department;

    res.status(200).json({
        success: true,
        data: student
    });
};

// 7. Partial update (PATCH)
const patchStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, department } = req.body;

    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    // Only update fields that were sent
    if (name) student.name = name;
    if (email) student.email = email;
    if (department) student.department = department;

    res.status(200).json({
        success: true,
        data: student
    });
};

// 8 & 9. Delete student
const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Student deleted successfully"
    });
};

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    patchStudent,
    deleteStudent
};