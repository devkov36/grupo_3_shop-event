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

// Checa si el usuario esta autenticado
router.get ('/check', function (req, res){
    if (req.session.usuarioLogueado == undefined)
    { 'No Estas Logueado'}
    else{
        res.send ('El usuario Logueado es:'+ req.session.usuarioLogueado.email)
    }
});

module.exports = router;