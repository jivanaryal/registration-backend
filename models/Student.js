const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

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
autoIncrement.initialize(mongoose.connection);
StudentSchema.plugin(autoIncrement.plugin, "Student");

module.exports = mongoose.model("Student", StudentSchema);
