const { body } = require('express-validator');

module.exports = [
    body ('title')
        .notEmpty().withMessage('Tienes que escribir el nombre del evento').bail()
        .isLength({ min: 5 }).withMessage('Tiene que tener al menos 5 caracteres'),
    body('cost')
        .notEmpty().withMessage('Tienes que escribir el costo del evento').bail(),
    body('description')
        .notEmpty().withMessage('Tienes que escribir la descripción del evento').bail()
        .isLength({ min: 20 }).withMessage('Tiene que tener al menos 20 caracteres'),
]