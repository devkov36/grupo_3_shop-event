const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/user.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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
        const users = JSON.parse(fs.readFileSync(usersFilePath));

        if(resultValidation.errors.length > 0){
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let userFound = users.find(oneUser => oneUser['email'] === req.body.email) 
        
        if(userFound){
            return res.render('register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
        }

        users.push(userToCreate);
        fs.writeFileSync(usersFilePath, JSON.stringify(users), {encoding: 'utf-8'});

        res.redirect('/user/login');
    }
}


module.exports = usersController;