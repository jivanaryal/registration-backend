const express = require("express");
const connectDB = require("./db/connect");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const student = require("./routes/student");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const morgan = require("morgan");
const users = require("./routes/users");
const app = express();
dotenv.config();

const corsOptions = {
  origin: "https://rm-system.netlify.app",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1/user", users);
app.use("/api/v1/student", student);
app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    console.log(process.env.MONGO_URI);
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listing to the port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
