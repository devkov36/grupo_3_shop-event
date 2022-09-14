const express = require('express');
const router = express.Router();
const eventsController = require('../../controllers/api/eventsController');

router.get('/events', eventsController.list);
router.get('/events/:id', eventsController.detail);

module.exports = router;