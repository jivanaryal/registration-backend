const Users = require("../models/Users");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const maxAge = 3 * 24 * 60 * 60;
const createJwtToken = (id) => {
  return jwt.sign({ id }, process.env.Token, {
    expiresIn: maxAge,
  });
};

const handleError = (err) => {
  let errors = { email: "", password: "" };

  if (err.message === "Incorrect Email")
    errors.email = "The email is not registered";

  if (err.message === "Incorrect Password")
    errors.password = "The password is incorrect";

  if (err.message === "Email already exists") {
    errors.email = "Email is already registered";
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
const loginUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await Users.login(email, password);
    const token = createJwtToken(user._id);
    res.cookie("jwt", token, {
      withCrdentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000,
    });
    return res.status(201).json({ user: user._id, created: true });
  } catch (error) {
    const errors = handleError(error);
    return res.json({ errors, created: false });
  }
};

const registerUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await Users.create({ email, password });
    const token = createJwtToken(user._id);
    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
    });
    return res.status(201).json({ user: user._id, created: true });
  } catch (error) {
    console.log(error);
    const errors = handleError(error);
    return res.json({ errors, created: false });
  }
};
module.exports = {
  loginUser,
  registerUser,
};
