const express = require("express");
const router = express.Router();
const {
  getAllStudent,
  createStudent,
  getSingleStudent,
  removeStudent,
  updateStudent,
} = require("../controllers/student");

router.route("/").get(getAllStudent).post(createStudent);
router
  .route("/:id")
  .get(getSingleStudent)
  .delete(removeStudent)
  .patch(updateStudent);

module.exports = router;
