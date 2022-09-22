const db = require('../database/models');
const { validationResult } = require('express-validator');

const eventdbController = {

    cart: (req, res) => {
        res.render('productCart');
    },

    detail: (req, res) => {
        const id = +req.params.id;

        db.Event.findByPk(id)
        .then(event => {
            res.render('productDetail', {event});
        })
        .catch(error =>{
            console.log(error);
        });
    },

    autocomplete: (req, res) => {
        const search_text = +req.body.term;

        db.Event.findByPk(search_text)
        .then(event => {
            res.render('productDetail', {event});
        })
        .catch(error =>{
            console.log(error);
        });
    },

    create: (req, res) => {
        res.render('event-create-form',{mensaje:''});
    },

    save: (req, res) => {

        const resultValidation = validationResult(req);   

        if(resultValidation.errors.length > 0){
            console.log(resultValidation.errors);
            return res.render('event-create-form', {
                errors: resultValidation.mapped(),
                oldData: req.body,
            }
        )}

        db.Event.create({
            title: req.body.title,
            event_date: req.body.date,
            cost: req.body.cost,
            ubication: req.body.ubication,
            category: req.body.category,
            description: req.body.description,
            banner_img: req.file.filename,
            event_end_date: req.body.date,
            id_usuario: 1,
            tickets: 20,
        })
        .then(result => {
            console.log(result);
        }).catch(error=>{
            console.log(error);
        });

        res.redirect('/');
    },

    // GET para Actualizar Eventos
    edit: (req, res) => {
        const id = +req.params.id;

        db.Event.findByPk(id)
        .then((event)=>{
            res.render('event-edit-form', {title: event.title, eventToEdit: event});
        })
        .catch((error)=>{
            console.log(error);
        });
    },

    // UPDATE para actualizar Eventos

    update: (req, res) => {
        let eventId = +req.params.id;

        console.log(req.body);

        db.Event.update(
            {
                title: req.body.title,
                cost: req.body.cost,
                event_date: req.body.event_start_date,
                event_end_date: req.body.event_end_date,
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
        });   
    },
    // DELETE de eventos 
    
    delete: (req,res)=>{
        let eventId = +req.params.id;

        db.Event.destroy ({
            where:{
                id: eventId
            }     
        })
        .then(movie => {
            console.log(movie);
        })
        .catch((error)=>{
            console.log(error);
        });

        res.redirect("/");
    },

    orderDetail: (req, res) => {
        let eventId = +req.params.id;

        db.Event.findByPk(eventId)
            .then(event => {
                res.render('orderDetail', {
                    event
                });
            })
            .catch(error => {
                console.log(error);
            });
    },

    processOrderDetail: (req, res) => {

        let eventId = +req.params.id;

        db.Event.findByPk(eventId)
            .then(event => {
                res.render('orderDetail', {
                    event
                });
            })
            .catch(error => {
                console.log(error);
            });
    },

    pay: (req, res) =>{

        let eventId = +req.params.id;

        db.Event.findByPk(eventId)
            .then(event => {
                res.render('payPage', {
                    event
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
 }
module.exports = eventdbController;