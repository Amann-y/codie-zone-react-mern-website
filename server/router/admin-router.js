const express = require("express");
const {
  getAllUsers,
  getAllContacts,
} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.get("/users", authMiddleware, getAllUsers);
router.get("/contacts", authMiddleware, getAllContacts);

module.exports = router;
