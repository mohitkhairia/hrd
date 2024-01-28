const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    lastActivity: Date,
    courseAbandoned: Boolean,
  });
  
  const User = mongoose.model('User', userSchema);

  module.exports = User;