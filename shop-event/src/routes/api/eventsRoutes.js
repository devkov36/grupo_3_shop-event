const express = require('express');
const router = express.Router();
const eventsController = require('../../controllers/api/eventsController');

router.get('/events', eventsController.list);
router.get('/events/:id', eventsController.detail);
router.get('/event/last', eventsController.last_event_create);

module.exports = router;