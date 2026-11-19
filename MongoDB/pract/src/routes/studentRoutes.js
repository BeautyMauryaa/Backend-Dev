const express = require("express");
const router = express.Router();
const {
  createStudent,
  getStudents,
  getStudentAnalytics,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

router.get("/analytics", getStudentAnalytics);

router.route("/")
  .get(getStudents)
  .post(createStudent);

router.route("/:id")
  .get(getStudentById)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;