const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('first_name')
        .notEmpty().withMessage('Tienes que escribir un nombre')
        .isLength({ min: 2 }).withMessage('Tu nombre tiene que tener más de dos caracteres'),
    body('last_name')
        .notEmpty().withMessage('Tienes que escribir tus apellidos')
        .isLength({ min: 2 }).withMessage('Tus apellidos tienen que tener más de dos caracteres'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password')
        .notEmpty().withMessage('Tienes que escribir una contraseña')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage('La contraseña deberá tener mayúsculas, minúsculas, un número y un carácter especial')
]