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

// Esquema de Reservación
const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  people: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Reservation = mongoose.model('Reservation', reservationSchema);

// Esquema de Café
const coffeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['caliente', 'frío'],
    required: true
  }
});
const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = { User, Reservation, Coffee };
