import asyncHandler from "express-async-handler";
import Business from "../models/userModel.js";

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExisted = await User.findOne({ email });
  if (userExisted) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      isBusinessOwnner: user.isBusinessOwnner,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid user");
  }
});
