const { validationResult } = require('express-validator');

const usersController = {
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
    processRegister: (req, res) => {
        console.log(req.body);
    }
}


module.exports = usersController;