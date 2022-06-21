const express = require('express');
const eventsController = require('../controllers/eventsController');

const router = express.Router();

router.get('/cart', eventsController.cart);

router.get('/detail', eventsController.detail);

// CREAR UN PRODUCTO
router.get('/create', eventsController.create); 

// EDITAR UN EVENTO
router.get('/edit/:id', eventsController.edit);
router.put('/edit/:id', eventsController.update);

module.exports = router;

