const mongoose = require('mongoose');

// Esquema de Usuario
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User; // Exportar solo el modelo User
