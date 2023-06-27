const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  vote: { type: Boolean },
  title: { type: [String] },
  subject: { type: [String] },
  grade: { type: [Number] },
  price: { type: [Number] },
  description: { type: [String] },
});

module.exports = mongoose.model('userData10', userSchema);