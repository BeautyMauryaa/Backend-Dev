// Practical coding challenge
// Create an endpoint:
// GET /students/:studentId/results?semester=5&subject=java


// Your task:
// 1. Extract studentId using req.params.
// 2. Extract semester using req.query.
// 3. Extract subject using req.query.
// 4. Return all three values using res.json().
// 5. Convert semester into a number.
// Expected response:
// {
//   "studentId": "101",
//   "semester": 5,
//   "subject": "java"
// }



const express = require("express");
const app = express();

app.use(express.json());

const students = [
    { id: 1, name: "Alice Smith", grade: "A", department: "Computer Science" },
    { id: 2, name: "Bob Johnson", grade: "B", department: "Mathematics" },
    { id: 3, name: "Charlie Brown", grade: "A", department: "Computer Science" },
    { id: 4, name: "Diana Prince", grade: "C", department: "Physics" },
    { id: 5, name: "Ethan Hunt", grade: "B", department: "Mathematics" },
    { id: 6, name: "Fiona Gallagher", grade: "A", department: "Physics" }
];

app.get("/students", (req, res) => {
    const semester = req.query.semester;
    res.status(200).json({
        message: "Students fetched successfully",
        semester: semester || "no semester provided",
        students: students
    });
});

app.get("/students/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    const foundStudent = students.find(s => s.id === studentId);

    if (!foundStudent) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json({
        message: "Student fetched successfully",
        student: foundStudent
    });
});


app.get("/students/:studentId/results", (req, res) => {
    const studentId = req.params.studentId;

    const semester = Number(req.query.semester);
    const subject = req.query.subject;

    res.status(200).json({
        studentId: studentId,
        semester: semester,
        subject: subject
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
