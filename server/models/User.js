const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

userSchema.methods.verifyPassword = function checkPassowrd(password) {
  if (this.password === password) {
    return true;
  }
  return false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
