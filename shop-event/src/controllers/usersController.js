const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/user.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { validationResult } = require('express-validator');
const { use } = require('../routes/userRoutes');

const usersController = {
    login: (req, res) => {
        res.render('users/login');
    },
    processLogin: (req, res) => {
        let errors = validationResult (req);

        if (errors.isEmpty()){
            let userJSON = fs.readlinkSync ('user.Json', {})
                let users;
                if (userJSON == ""){
                    users = []
                } else { users= JSON.parse(userJSON) }

                for (let i=0; i<users.length; i++){
                    if (users[i].email == req.body.email){
                        if (bcryptjs.compareSync (res.body.password, users[i].password))
                        {
                        let usuarioALoguearse = users [i];
                        break;
                        }
                }
                
                if (usuarioALoguearse == undefined){
                    return res.render ('login', {errors: [{msg:'Credecinciales invalidas'}]})
                }
                res.session.usuarioLogueado = usuarioALoguearse,
                res.render ('ususario loguedo!')
                } 
            }
        else {                  
            return res.render('login', {errors: errors.errors });  
        }
    },


    register: (req, res) => {
        res.render('users/register');
    },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        console.log(resultValidation);
        const users = JSON.parse(fs.readFileSync(usersFilePath));

        if(resultValidation.errors.length > 0){
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let userFound = users.find(oneUser => oneUser['email'] === req.body.email) 
        
        if(userFound){
            return res.render('users/register', {
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