const express = require('express');
const router = express.Router();
const session = require ('express-session');

// Controller
const usersdbController = require('../controllers/usersdbController');

// Middlewares
const validationsRegister = require('../middlewares/validateRegisterMiddleware');
const validationLogin = require('../middlewares/validateLoginMiddleware');
const guestMiddlewares = require ('../middlewares/guestMiddlewares');
const authtMiddlewares = require ('../middlewares/authMiddlewares');
const uploadFile = require('../middlewares/multerRegisterMiddleware');

router.get('/login', guestMiddlewares, usersdbController.login);
router.post('/login', validationLogin, usersdbController.processLogin);

router.get('/register', guestMiddlewares, usersdbController.register);
router.post('/register', uploadFile.single('avatar'), validationsRegister, usersdbController.processRegister );

// Perfil de Usuario
router.get('/profile', authtMiddlewares, usersdbController.profile);

// Logout
router.get('/logout', usersdbController.logout);


module.exports = router;