const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

// Generate token for user authentication
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

// @Desc    Register new user
// @Route   POST /api/users
// @Access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please type all fields');
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User with this email already exists');
  }

  // Hash passwords with bcryptjs
  // This module enables storing of passwords as hashed passwords instead of plaintext.
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    isAdmin: isAdmin ? isAdmin : false,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @Desc    Authenticate user
// @Route   POST /api/users/login
// @Access  Public
const loginUser = (req, res) => {
  res.json({ message: 'Login User' });
};

// @Desc    Get logged in user
// @Route   GET /api/users/me
// @Access  Private
const getMe = (req, res) => {
  res.json({ message: 'Get User' });
};

module.exports = { registerUser, loginUser, getMe };
