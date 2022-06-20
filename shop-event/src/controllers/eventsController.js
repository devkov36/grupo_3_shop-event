const path = require('path');

const eventController = {
    cart: (req, res) => {
        res.render('productCart');
    },
    detail: (req, res) => {
        res.render('productDetail');
    },
    create: (req, res) => {
		res.render('event-create-form')
	},
    index1: (req, res) => {
        res.render('index1');
    },


}

module.exports = eventController;
