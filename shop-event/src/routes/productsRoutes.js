const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/cart', productsController.cart);

router.get('/detail', productsController.detail);

router.get('/index1', productsController.index1);

module.exports = router;