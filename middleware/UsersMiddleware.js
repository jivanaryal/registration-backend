const User = require("../models/Users");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.Token, async (err, decodedToken) => {
      if (err) {
        res.json({ status: false });
        next();
      } else {
        const user = await User.findById(decodedToken.id);
        if (user) res.json({ status: true, user: user.email });
        else res.json({ status: false });
        next();
      }
    });
  } else {
    res.json({ status: false });
  }
};
module.exports = checkUser;
