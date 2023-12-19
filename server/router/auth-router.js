const express = require("express");
const {
  home,
  register,
  login,
  user,
} = require("../controllers/auth-controller");
const { signUpSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.get("/", home);

router.post("/register", validate(signUpSchema), register);

router.post("/login", validate(loginSchema), login);

router.get("/user", authMiddleware, user);

module.exports = router;
