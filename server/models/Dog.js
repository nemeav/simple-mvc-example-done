// do i need this here or only in cat???
const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // wish I would've known this for proj 1...
    unique: true, // no duplicates?
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

DogModel = mongoose.model('Dog', DogSchema);

module.exports = DogModel;
