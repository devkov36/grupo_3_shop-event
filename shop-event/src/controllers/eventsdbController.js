const db = require('../database/models');
const sequelize = db.sequelize;

const eventdbController = {
    pruebaDB: (req, res) => {
        db.Event.findAll()
            .then(movies => {
                console.log(movies);
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

        db.Event.update(
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
    }
    // DELETE de eventos 
    
        //delete: function (req,res){
        //       db.events.destroy({
        //       where:{
        //        id: req.params.id
        //       }
        //       })
        //       res.redirect ("/events")
        //

}

module.exports = eventdbController;