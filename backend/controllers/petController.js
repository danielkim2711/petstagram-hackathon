const asyncHandler = require('express-async-handler');

const Pet = require('../models/petModel');

// @Desc    Get all pets of user
// @Route   GET /api/pets
// @Access  Private
const getPets = asyncHandler(async (req, res) => {
  const pets = await Pet.find({ user: req.user._id });

  if (!req.user) {
    res.status(400);
    throw new Error('User not found');
  }

  res.status(200).json(pets);
});

// @Desc    Get a pet
// @Route   GET /api/pets/:id
// @Access  Private
const getPet = asyncHandler(async (req, res) => {
  const pet = await Pet.findById(req.params.id);

  if (!req.user) {
    res.status(400);
    throw new Error('User not found');
  }

  if (!pet) {
    res.status(400);
    throw new Error('Pet not found');
  }

  // Check the logged in user matches with the pet user
  if (pet.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Invalid Request. Unauthorised');
  }

  res.status(200).json(pet);
});

// @Desc    Create pet
// @Route   POST /api/pets
// @Access  Private
const createPet = asyncHandler(async (req, res) => {
  const { imageUrl, name, age, type } = req.body;

  if (!name || !age || !type) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const pet = await Pet.create({
    user: req.user._id,
    imageUrl,
    name,
    age,
    type,
  });

  res.status(201).json(pet);
});

// @Desc    Update pet
// @Route   PUT /api/pets/:id
// @Access  Private
const updatePet = asyncHandler(async (req, res) => {
  const pet = await Pet.findById(req.params.id);

  if (!req.user) {
    res.status(400);
    throw new Error('User not found');
  }

  if (!pet) {
    res.status(400);
    throw new Error('Pet not found');
  }

  // Check the logged in user matches with the pet user
  if (pet.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Invalid Request. Unauthorised');
  }

  const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPet);
});

// @Desc    Delete pet
// @Route   DELETE /api/pets/:id
// @Access  Private
const deletePet = asyncHandler(async (req, res) => {
  const pet = await Pet.findById(req.params.id);

  if (!req.user) {
    res.status(400);
    throw new Error('User not found');
  }

  if (!pet) {
    res.status(400);
    throw new Error('Pet not found');
  }

  // Check the logged in user matches with the pet user
  if (pet.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Invalid Request. Unauthorised');
  }

  await pet.remove();

  res.status(200).json({ _id: req.params.id, success: true });
});

module.exports = {
  getPets,
  getPet,
  createPet,
  updatePet,
  deletePet,
};
