const Router = require("express");
const { loginUser, registerUser } = require("../controllers/users");
const checkUser = require("../middleware/UsersMiddleware");
const router = Router();
router.route("/").post(checkUser);
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

module.exports = router;
