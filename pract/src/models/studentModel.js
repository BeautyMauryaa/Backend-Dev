const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    department: {
        type: String,
        required: true
    },

    semester: {
        type: Number,
        min: 1,
        max: 8
    }

}, {
    timestamps: true
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;