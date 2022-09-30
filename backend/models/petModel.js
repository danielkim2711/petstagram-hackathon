const mongoose = require('mongoose');

const petSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: [true, "Please enter your pet's name"],
    },
    age: {
      type: Number,
      required: [true, "Please enter your pet's age"],
    },
    type: {
      type: String,
      required: [true, "Please enter your pet's type"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Pet', petSchema);
