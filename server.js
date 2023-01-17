const express = require("express");
const connectDB = require("./db/connect");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const student = require("./routes/student");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const morgan = require("morgan");
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1/student", student);
app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    // console.log(process.env.MONGO_URI);
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listing to the port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
