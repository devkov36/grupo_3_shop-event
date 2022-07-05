const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

// Formulario de Login
router.get('/login', usersController.login);

// Formulario de Registro

router.get('/register', usersController.register);

// Procesar el Registro
// router.post('/register', )

// Perfil de Usuario

module.exports = router;