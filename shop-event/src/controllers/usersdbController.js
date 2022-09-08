const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersdbController = {

    login: (req, res) => {
        res.render('users/login');
    },

    processLogin: (req, res) => {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            console.log(user);
            if(resultValidation.errors.length > 0){
                return res.render('users/login', {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                });
            } else {
                if(user){
                    console.log(`USER ${user.password}`);
                    let isOkThePassword = bcryptjs.compareSync(req.body.password, user.password);
                    console.log(isOkThePassword);

                    if(isOkThePassword){
                        req.session.usuarioLogueado = user;
    
                        console.log(`ESTAMOS AQUI ${req.body.remember_user}`);
    
                        if(req.body.remember_user){
                            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) *60 });
                        }
    
                        res.redirect("/");
                    }
                    else{
                        return res.render('users/login', {
                            errors: {
                                validation: {
                                    msg: "Credenciales inválidas"
                                }
                            },
                            oldData: req.body
                        })
                    }
                }
                else{
                    return res.render('users/login',{
                        errors: {
                            email: {
                                msg: "Este email no esta registrado"
                            }
                        },
                        oldData: req.body,
                    });
                }
            }
        }).catch(error => {
            console.log(error);
        });

        const resultValidation = validationResult(req);        
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
            avatar: req.file.filename,
            category: "user"
        })
        .then(result => {
            console.log(result);
            res.redirect('/');
        }).catch(error=>{
            console.log(error);
        });

        res.redirect('/user/login');
    },

    profile: (req, res) => {
        res.render("users/profile", {
            user: req.session.usuarioLogueado
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}


module.exports = usersdbController;