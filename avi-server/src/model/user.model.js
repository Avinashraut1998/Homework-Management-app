const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requried: true,
  },
});

module.exports = mongoose.model("User", userSchema);
