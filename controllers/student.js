const Student = require("../models/Student");

const getAllStudent = async (req, res) => {
  try {
    const student = await Student.find({});
    res.status(200).json(student);
  } catch (error) {
    console.log("error");
  }
};

const createStudent = (req, res) => {
  try {
    const student = Student.create(req.body);
    console.log(req.body);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleStudent = async (req, res) => {
  // const { id } = req.params;
  // console.log({ id });
  try {
    const student = await Student.findOne({ _id: req.params.id });
    if (!student) {
      res.status(500).json({ msg: `cannot get the id:${id}` });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const removeStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndRemove(req.params.id);
    if (!student) {
      res.status(500).json({ msg: `cannot get the id:${id}` });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.updateOne({ _id: req.params.id }, req.body);
    if (!student) {
      res.statu;
      res.status(200).json(student);
      s(500).json({ msg: `cannot get the id:${id}` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllStudent,
  createStudent,
  getSingleStudent,
  removeStudent,
  updateStudent,
};
