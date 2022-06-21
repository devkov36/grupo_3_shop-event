const path = require('path');

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
    edit: (req, res) => {
        res.render('event-edit-form');
    }
}

module.exports = eventController;
