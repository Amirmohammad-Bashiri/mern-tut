const asyncHandler = require("express-async-handler");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async function (req, res) {
  res.json({ message: "register user" });
});

// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async function (req, res) {
  res.json({ message: "login user" });
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async function (req, res) {
  res.json({ message: "User data" });
});

module.exports = { loginUser, getMe, registerUser };
