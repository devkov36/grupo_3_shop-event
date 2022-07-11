const express = require('express');
const router = express.Router();
const session = require ('express-session');


const path = require('path');
const multer = require('multer');

const { body } = require('express-validator');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../public/images/users');
    },
    filename: (req, file, cb) => {
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
    }
});

const uploadFile = multer({ storage });

const usersController = require('../controllers/usersController');

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
];

const valiadationsLogin = [
    body ('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body ('password').notEmpty().withMessage('Tienes que escribir una contraseña')
];

let guestMiddlewares = require ('../middlewares/guestMiddlewares')
let authtMiddlewares = require ('../middlewares/authMiddlewares')

// Obtiene el formulario de Login
router.get('/login', valiadationsLogin, usersController.login);

// Procesa el login
// NECESITA HABER UN router.post

router.get ('/check', function (req, res){
    if (req.session.usuarioLogueado == undefined)
    { 'No Estas Logueado'}
    else{
        res.send ('El usuario Logueado es:'+ req.session.usuarioLogueado.email)
    }
})


// Formulario de Registro
// VOY A COMENTAR EL AUTH MIDDLEWARE YA QUE NO ESTA FUNCIONANDO
router.get('/register',usersController.register);

// Procesar el Registro
router.post('/register', validations, uploadFile.single('avatar'), usersController.processRegister );

// Perfil de Usuario

module.exports = router;