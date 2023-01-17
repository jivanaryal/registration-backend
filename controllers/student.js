const Student = require("../models/Student");
const asyncWrapper = require("../middleware/async");
// const { createCustomError } = require("../errors/custom-error");

const getAllStudent = asyncWrapper(async (req, res) => {
  const student = await Student.find({});
  res.status(200).json(student);
});

const createStudent = asyncWrapper(async (req, res) => {
  const student = await Student.create(req.body);

  res.status(200).json(student);
});

const getSingleStudent = asyncWrapper(async (req, res, next) => {
  const student = await Student.findOne({ _id: req.params.id });
  if (!student) {
    const error = new Error();
    error.status = 404;
    error.message = "not found";
    return next(error);
  } else {
    res.status(200).json(student);
  }
});
const removeStudent = asyncWrapper(async (req, res, next) => {
  const student = await Student.findByIdAndRemove(req.params.id);
  if (!student) {
    res.status(404).json({ msg: "cannot get that id" });
  }
  res.status(200).json(student);
});

const updateStudent = asyncWrapper(async (req, res, next) => {
  const student = await Student.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!student) {
    res.status(404).json({ msg: "cannot get that id" });
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
