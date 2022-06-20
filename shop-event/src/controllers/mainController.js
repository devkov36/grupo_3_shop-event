const path = require('path');

const mainController = {
    home: (req, res) => {
        res.render('index');        
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
    index1: (req, res) => {
        res.render('index1');
    },
}

module.exports = mainController;
