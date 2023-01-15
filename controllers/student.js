const Student = require("../models/Student");
const asyncWrapper = require("../middleware/async");

const getAllStudent = asyncWrapper(async (req, res) => {
  const student = await Student.find({});
  res.status(200).json(student);
});

const createStudent = asyncWrapper(async (req, res) => {
  const student = await Student.create(req.body);

  res.status(200).json(student);
});

const getSingleStudent = asyncWrapper(async (req, res) => {
  const student = await Student.findOne({ _id: req.params.id });
  if (!student) {
    res.status(500).json({ msg: `cannot get the id:${id}` });
  }
  res.status(200).json(student);
});
const removeStudent = asyncWrapper(async (req, res) => {
  const student = await Student.findByIdAndRemove(req.params.id);
  if (!student) {
    res.status(500).json({ msg: `cannot get the id:${id}` });
  }
  res.status(200).json(student);
});

const updateStudent = asyncWrapper(async (req, res) => {
  const student = await Student.updateOne({ _id: req.params.id }, req.body);
  if (!student) {
    res.status(500).json({ msg: `cannot get the id:${id}` });
  }
  res.status(200).json(student);
});

module.exports = {
  getAllStudent,
  createStudent,
  getSingleStudent,
  removeStudent,
  updateStudent,
};
