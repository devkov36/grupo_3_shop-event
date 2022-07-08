const express = require('express');
const router = express.Router();

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

];
// Formulario de Login
router.get('/login', usersController.login);

// Formulario de Registro

router.get('/register', usersController.register);

// Procesar el Registro
router.post('/register', usersController.processRegister );

// Perfil de Usuario

module.exports = router;