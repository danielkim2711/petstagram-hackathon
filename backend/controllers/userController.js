const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');
const Pet = require('../models/petModel');
const Post = require('../models/postModel');

// Generate JSON Web Token for user authorisation
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '14d',
  });
};

// @Desc    Register new user
// @Route   POST /api/users
// @Access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, imageUrl, email, password, isAdmin } = req.body;

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
    imageUrl,
    email,
    password: hashedPassword,
    isAdmin: isAdmin ? isAdmin : false,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      imageUrl: user.imageUrl,
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
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      imageUrl: user.imageUrl,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user credentials');
  }
});

// @Desc    Update user
// @Route   PUT /api/users/:id
// @Access  Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

// @Desc    Delete user
// @Route   DELETE /api/users/:id
// @Access  Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  // Delete associated user's posts and pets
  await Post.find({ user: req.params.id }).remove();
  await Pet.find({ user: req.params.id }).remove();
  await user.remove();

  res.status(200).json({ _id: req.params.id, success: true });
});

module.exports = { registerUser, loginUser, updateUser, deleteUser };
