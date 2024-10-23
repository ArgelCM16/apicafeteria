const mongoose = require('mongoose');

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
module.exports = Coffee; // Exportar solo el modelo Coffee
