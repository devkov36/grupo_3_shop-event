const db = require('../database/models');

const mainController = {
    home: (req, res) => {
        db.Event.findAll()
        .then(events => {
            res.render('index', {events} );
        })
        .catch(error => {
            console.log(error);
        });
    },
    contact: (req, res) => {
        res.render('contacto');
    },
    about_us: (req, res) => {
        res.render('acercaDeNosotros');
    },
    orderDetail: (req, res) => {
        res.render('orderDetail');
    },
    pay: (req, res) =>{
        res.render('payPage');
    }
    
    
}

module.exports = mainController;
