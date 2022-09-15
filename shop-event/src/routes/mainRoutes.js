const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.home);

router.get('/contact', mainController.contact);

router.get('/about-us', mainController.about_us);

router.get('/order-detail', mainController.orderDetail);

router.get('/pay', mainController.pay);

module.exports = router;