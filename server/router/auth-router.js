const express = require("express");

const router = express.Router();

const authcontroller = require("../controller/auth-controller");

const signupSchema = require("../validators/auth-validators");
const loginSchema = require("../validators/auth-validators-login");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

// router.get("/", (req, res) => {
//   res.status(200).send("Hello World!");
// });

// router.route("/").get((req, res) => {
//   res.status(200).send("Hello World!!!!!!!!!");
// });
router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema), authcontroller.register);
router.route("/login").post(validate(loginSchema), authcontroller.login);
router.route("/user").get(authMiddleware, authcontroller.user);
// router.get("/register", (req, res) => {
//   res.status(200).send("Welcome Register");
// });

module.exports = router;
