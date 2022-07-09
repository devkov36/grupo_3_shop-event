const { validationResult } = require('express-validator');

const usersController = {
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        console.log(req.body);

        if(resultValidation.errors.length > 0){
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
        res.send("Si pase")
    }
}


module.exports = usersController;