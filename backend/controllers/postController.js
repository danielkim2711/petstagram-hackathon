const asyncHandler = require('express-async-handler');

const Post = require('../models/postModel');

// @Desc    Get posts
// @Route   GET /api/posts
// @Access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });

  res.status(200).json(posts);
});

// @Desc    Get post
// @Route   GET /api/posts/:id
// @Access  Public
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }

  res.status(200).json(post);
});

// @Desc    Create post
// @Route   POST /api/posts
// @Access  Private
const createPost = asyncHandler(async (req, res) => {
  const { title, imageUrl, body } = req.body;

  if (!title || !body) {
    res.status(400);
    throw new Error('Please add title and body');
  }

  const post = await Post.create({
    user: req.user._id,
    title,
    imageUrl,
    body,
  });

  res.status(201).json(post);
});

// @Desc    Update post
// @Route   PUT /api/posts/:id
// @Access  Private
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }

  // Check the logged in user matches with the post author
  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('User do not match. Not Authorised');
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPost);
});

// @Desc    Delete post
// @Route   DELETE /api/posts/:id
// @Access  Private
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }

  // Check the logged in user matches with the post author
  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('User do not match. Not Authorised');
  }

  await post.remove();

  res.status(200).json({ _id: req.params.id, success: true });
});

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
