const express = require('express');
const eventsController = require('../controllers/eventsController');

const router = express.Router();

router.get('/cart', eventsController.cart);

router.get('/detail', eventsController.detail);

router.get('/create', eventsController.create); 

module.exports = router;

