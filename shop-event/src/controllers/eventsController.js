const fs = require('fs');
const path = require('path');

const eventsFilePath = path.join(__dirname, '../data/event.json');
const events = JSON.parse(fs.readFileSync(eventsFilePath, 'utf-8'));

const eventController = {
    cart: (req, res) => {
        res.render('productCart');
    },
    detail: (req, res) => {
        res.render('productDetail');
    },
    create: (req, res) => {
		res.render('event-create-form');
	},

    // GET para Actualizar Eventos
    edit: (req, res) => {

        const id = +req.params.id;

        let eventDetail = events.find( (event) => {
            return event.id === id;
        });

        res.render('event-edit-form', {title: eventDetail.title, eventToEdit: eventDetail});
    },

    // UPDATE para actualizar Eventos
    update: (req, res) => {

        // const events = JSON.parse(fs.readFileSync(eventsFilePath, 'utf-8'));

        const id = +req.params.id;
        console.log(req.body);

        res.redirect('/');
    }
}

module.exports = eventController;
