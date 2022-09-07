const express = require('express');
const router = express.Router();
const session = require ('express-session');

// Controller
const usersController = require('../controllers/usersController');
const usersdbController = require('../controllers/usersdbController');

// Middlewares
const validationsRegister = require('../middlewares/validateRegisterMiddleware');
const validationLogin = require('../middlewares/validateLoginMiddleware');
const guestMiddlewares = require ('../middlewares/guestMiddlewares');
const authtMiddlewares = require ('../middlewares/authMiddlewares');
const uploadFile = require('../middlewares/multerRegisterMiddleware');

router.get('/login', guestMiddlewares, usersdbController.login);
router.post('/login', validationLogin, usersdbController.processLogin);

// USER DB
router.get('/register', guestMiddlewares, usersdbController.register);
router.post('/register/', uploadFile.single('avatar'), validationsRegister, usersdbController.processRegister );
// AQUI ESTAMOS TRABAJANDO ARRIBA


// Perfil de Usuario
router.get('/profile', authtMiddlewares, usersdbController.profile);

// Checa si el usuario esta autenticado
router.get ('/check', usersController.check);

// Logout
router.get('/logout/', usersController.logout);

// Create user

//router.get ("/create", userControllers.create);

module.exports = router;