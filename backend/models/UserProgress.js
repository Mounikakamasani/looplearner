const mongoose = require("mongoose");

const userProgressSchema = new mongoose.Schema({
  userId: String,
  checkedStates: Object,  // key-value pair like { "0-0-0-0": true, ... }
  progress: Number,
});

module.exports = mongoose.model("UserProgress", userProgressSchema);
