const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
  },
  address: {
    type: String,
    required: [true, "must provide address"],
  },
  fathername: {
    type: String,
    required: [true, "must provide fathername"],
  },
  contact: {
    type: String,
    required: [true, "must provide contact"],
  },
  nationality: {
    type: String,
    required: [true, "must provide nationality"],
  },
  email: {
    type: String,
    required: [true, "must provide email"],
  },
});

module.exports = mongoose.model("Student", StudentSchema);
