const db = require('../database/models');
const sequelize = db.sequelize;

const usersdbController = {
    pruebaDB: (req, res) => {
        db.Event.findAll()
            .then(movies => {
                console.log(movies);
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
 // LISTAR elementos
    listar: (req, res) => {
    let eventId = +req.params.id

     db.Event.listar(
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



// CREATE user
 //   let userController= {
 //   create: function (req,res) {;
 //   db.user.findAll ();
 //   .then (function (user);
  //  return res.render ("listadoUser",{ user:user });
  //  )
  //  }}

}


module.exports = eventdbController;