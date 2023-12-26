const express = require("express");
const {
  getAllUsers,
  getAllContacts,
} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router = express.Router();

router.get("/users", authMiddleware,adminMiddleware, getAllUsers);
router.get("/contacts", authMiddleware,adminMiddleware, getAllContacts);

module.exports = router;
