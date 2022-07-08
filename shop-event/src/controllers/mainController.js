const path = require('path');
const fs= require ('fs');
const eventsFilePath = path.join(__dirname, '../data/event.json');
const events = JSON.parse(fs.readFileSync(eventsFilePath, 'utf-8'));

const mainController = {
    home: (req, res) => {
        res.render('index',{events :events } );     
    },
    contact: (req, res) => {
        res.render('contacto');
    },
    about_us: (req, res) => {
        res.render('acercaDeNosotros');
    }
    
}


module.exports = mainController;
