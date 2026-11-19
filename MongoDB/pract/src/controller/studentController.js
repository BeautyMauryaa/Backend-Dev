const mongoose = require("mongoose");
const Student = require("../models/Student");

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// POST /api/students
const createStudent = async (req, res, next) => {
  try {
    const { name, email, department, semester, marks } = req.body;

    const student = await Student.create({
      name,
      email,
      department,
      semester,
      marks,
    });

    return res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/students (filtering, sorting, pagination)
const getStudents = async (req, res, next) => {
  try {
    const {
      department,
      semester,
      minMarks,
      maxMarks,
      sortBy = "createdAt",
      order = "desc",
      page = 1,
      limit = 10,
    } = req.query;

    const filter = {};
    if (department) filter.department = department;
    if (semester) filter.semester = Number(semester);
    if (minMarks !== undefined || maxMarks !== undefined) {
      filter.marks = {};
      if (minMarks !== undefined) filter.marks.$gte = Number(minMarks);
      if (maxMarks !== undefined) filter.marks.$lte = Number(maxMarks);
    }

    const allowedSortFields = ["name", "department", "semester", "marks", "createdAt"];
    const sortField = allowedSortFields.includes(sortBy) ? sortBy : "createdAt";
    const sortDirection = order === "asc" ? 1 : -1;

    const pageNum = Math.max(1, Number(page) || 1);
    const limitNum = Math.min(100, Math.max(1, Number(limit) || 10));
    const skip = (pageNum - 1) * limitNum;

    const [students, total] = await Promise.all([
      Student.find(filter)
        .sort({ [sortField]: sortDirection })
        .skip(skip)
        .limit(limitNum),
      Student.countDocuments(filter),
    ]);

    return res.status(200).json({
      success: true,
      count: students.length,
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
      data: students,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/students/analytics
const getStudentAnalytics = async (req, res, next) => {
  try {
    const analytics = await Student.aggregate([
      {
        $group: {
          _id: "$department",
          totalStudents: { $sum: 1 },
          averageMarks: { $avg: "$marks" },
          highestMarks: { $max: "$marks" },
          lowestMarks: { $min: "$marks" },
        },
      },
      {
        $project: {
          _id: 0,
          department: "$_id",
          totalStudents: 1,
          averageMarks: { $round: ["$averageMarks", 2] },
          highestMarks: 1,
          lowestMarks: 1,
        },
      },
      {
        $sort: { averageMarks: -1 },
      },
    ]);

    return res.status(200).json({
      success: true,
      data: analytics,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/students/:id
const getStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID format",
      });
    }

    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/students/:id
const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID format",
      });
    }

    const { name, email, department, semester, marks } = req.body;
    const updates = {};
    if (name !== undefined) updates.name = name;
    if (email !== undefined) updates.email = email;
    if (department !== undefined) updates.department = department;
    if (semester !== undefined) updates.semester = semester;
    if (marks !== undefined) updates.marks = marks;

    const student = await Student.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/students/:id
const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID format",
      });
    }

    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createStudent,
  getStudents,
  getStudentAnalytics,
  getStudentById,
  updateStudent,
  deleteStudent,
};