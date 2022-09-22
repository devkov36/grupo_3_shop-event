const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/usersController');

router.get('/users', usersController.list);
router.get('/users/:id', usersController.detail);
router.get('/user/last', usersController.last_user_created);

module.exports = router;