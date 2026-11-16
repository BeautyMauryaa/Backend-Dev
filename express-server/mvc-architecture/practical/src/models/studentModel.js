const students = [];

function getAllStudents() {
    return students;
}

function getStudentById(id) {
    return students.find(student => student.id === Number(id));
}

function createStudent(data) {
    const newStudent = {
        id: students.length + 1,
        name: data.name,
        email: data.email
    };

    students.push(newStudent);

    return newStudent;
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent
};