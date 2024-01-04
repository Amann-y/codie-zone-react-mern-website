const express = require("express");
const {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  updateUserById,
  updateUserDetailById,
  deleteContactById 
} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router = express.Router();

router.get("/users", authMiddleware, adminMiddleware, getAllUsers);
router.get("/contacts", authMiddleware, adminMiddleware, getAllContacts);

router.delete(
  "/users/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteUserById
);

router.get("/users/:id", authMiddleware, adminMiddleware, updateUserById);

router.patch("/users/update/:id",authMiddleware, adminMiddleware, updateUserDetailById )

router.delete("/contacts/delete/:id", authMiddleware, adminMiddleware,deleteContactById )

module.exports = router;
