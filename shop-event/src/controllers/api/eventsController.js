const db = require('../../database/models');

const eventsController = {
    'list': (req, res) => {
        db.Event.findAll()
            .then(events => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: events.length,
                        url: "api/events",
                    },
                    data: events
                });
            })
            .catch(error => {
                res.status(404).json({
                    meta: {
                        status: 404,
                        url: "api/events"
                    },
                    data: "Not found"
                });
            });
    },
    'detail': (req, res) => {
        db.Event.findByPk(req.params.id)
            .then(event => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        url: "api/events/{id}"
                    },
                    data: event
                });
            })
            .catch(error => {
                res.status(404).json({
                    meta: {
                        status: 404,
                        url: "api/events"
                    },
                    data: "Not found"
                });
            });
    }
}

module.exports = eventsController;