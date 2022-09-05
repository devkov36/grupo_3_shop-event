const db = require('../database/models');
const sequelize = db.sequelize;

const eventdbController = {

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
        })   
    },
    // DELETE de eventos 
    
    delete: (req,res)=>{
        let eventId = +req.params.id;
        console.log("estos emilindando")
        

         db.Event.destroy ({
        where:{
            id: req.params.id
     }     })
     .then(movies => {
        res.redirect ("/")
    })
    .catch((error)=>{
     console.log(error);
  })
    },
}
module.exports = eventdbController;