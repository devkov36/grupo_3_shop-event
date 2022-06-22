const path = require('path');
const fs= require ('fs');
const eventsFilePath = path.join(__dirname, '../data/event.json');
const events = JSON.parse(fs.readFileSync(eventsFilePath, 'utf-8'));

const mainController = {
    home: (req, res) => {
        res.render('index',{events :events } );     
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
    
}


module.exports = mainController;
