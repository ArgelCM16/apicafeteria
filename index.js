const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user'); // Asegúrate de que esta ruta sea correcta
const Reservation = require('./models/reservation'); // Cambia a la ruta correcta
const Coffee = require('./models/coffee'); // Cambia a la ruta correcta

const cors = require('cors');
app.use(cors());



const app = express();
const port = process.env.PORT || 3000;


// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB Atlas
mongoose.connect('mongodb+srv://canoargel:1621241526@tarearuth.tfh1w.mongodb.net/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado a MongoDB Atlas');
}).catch(err => {
  console.error('Error conectando a MongoDB Atlas', err);
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// -------------------- CRUD para User -------------------- //

// Crear un nuevo usuario
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
});

// Obtener todos los usuarios
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Actualizar un usuario
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Eliminar un usuario
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// -------------------- CRUD para Reservation -------------------- //

// Crear una nueva reservación
app.post('/reservations', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).send(reservation);
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
});

// Obtener todas las reservaciones
app.get('/reservations', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).send(reservations);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Actualizar una reservación
app.put('/reservations/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!reservation) {
      return res.status(404).send();
    }
    res.status(200).send(reservation);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Eliminar una reservación
app.delete('/reservations/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) {
      return res.status(404).send();
    }
    res.status(200).send(reservation);
  } catch (error) {
    res.status(500).send(error);
  }
});

// -------------------- CRUD para Coffee -------------------- //

// Crear un nuevo café
app.post('/coffees', async (req, res) => {
  try {
    const coffee = new Coffee(req.body);
    await coffee.save();
    res.status(201).send(coffee);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obtener todos los cafés
app.get('/coffees', async (req, res) => {
  try {
    const coffees = await Coffee.find();
    res.status(200).send(coffees);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Actualizar un café
app.put('/coffees/:id', async (req, res) => {
  try {
    const coffee = await Coffee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!coffee) {
      return res.status(404).send();
    }
    res.status(200).send(coffee);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Eliminar un café
app.delete('/coffees/:id', async (req, res) => {
  try {
    const coffee = await Coffee.findByIdAndDelete(req.params.id);
    if (!coffee) {
      return res.status(404).send();
    }
    res.status(200).send(coffee);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});