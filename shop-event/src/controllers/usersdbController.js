const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersdbController = {

    login: (req, res) => {
        res.render('users/login');
    },

    register: (req, res) => {
        res.render('users/register');
    },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            console.log(`USSSEEEER ${user}`);
            if(user){
                return res.render('users/register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        },
                    },
                    oldData: req.body
                });
            }
        }).catch(error => {
            console.log(error);
        });

        db.User.create({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            username : req.body.email,
            email: req.body.email,
            password : bcryptjs.hashSync(req.body.password, 10),
            avatar: "avatar.com",
            category: "user"
        })
        .then(result => {
            console.log(result);
            res.redirect('/');
        }).catch(error=>{
            console.log(error);
        });
    },

    // UPDATE para actualizar Usuarios

    update: (req, res) => {
        let eventId = +req.params.id;

        db.User.update(
            {
                title: req.body.title,
                cost: req.body.cost,
                category: req.body.category,
                description: req.body.description
            },
            {
                where: {id: eventId}
            })
        .then(()=>{
            return res.redirect('/')
        })
        .catch((error)=>{
            console.log(error);
        })   
    },
    // DELETE de eventos 
    
        delete: function (req,res){
        db.events.destroy({
         where:{
         id: req.params.id
         }
         }).then ( function (){ 
         res.redirect ("/events")
        })
        

    },
}


module.exports = usersdbController;