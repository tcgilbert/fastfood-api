const mongoose = require('mongoose')

const fastFoodSchema = new mongoose.Schema({
  name: String,
  stores: Number,
  menuItems: [String],
  thomasScore: String
});

module.exports = mongoose.model('fastFood', fastFoodSchema);