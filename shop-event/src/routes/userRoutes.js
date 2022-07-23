const express = require('express');
const router = express.Router();
const session = require ('express-session');

// Controller
const usersController = require('../controllers/usersController');

// Middlewares
const validationsRegister = require('../middlewares/validateRegisterMiddleware');
const validationLogin = require('../middlewares/validateLoginMiddleware');
const guestMiddlewares = require ('../middlewares/guestMiddlewares');
const authtMiddlewares = require ('../middlewares/authMiddlewares');
const uploadFile = require('../middlewares/multerRegisterMiddleware');

// Obtiene el formulario de Login
router.get('/login', usersController.login);

// Procesa el login
router.post('/login', validationLogin, usersController.processLogin);

// Formulario de Registro
router.get('/register', usersController.register);

// Procesar el Registro
router.post('/register/', uploadFile.single('avatar'), validationsRegister, usersController.processRegister );

// Perfil de Usuario
router.get('/profile', authtMiddlewares, usersController.profile);

// Checa si el usuario esta autenticado
router.get ('/check', usersController.check);

module.exports = router;