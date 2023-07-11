const router = require("express").Router();
const {
  registerUser,
  authUser,
  allUsers,
} = require("../Controllers/userControllers");
const protect = require("../Middleware/authMiddleware");

// Creating User and getting all user
router.route("/signup").post(registerUser).get(protect, allUsers);

// Login User

router.route("/login").post(authUser);

module.exports = router;
