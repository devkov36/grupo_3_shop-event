const db = require('../database/models');

function userLoggedMiddleware(req, res, next){
    let emailInCookie = req.cookies.userEmail;

    if(emailInCookie != undefined 
        && req.session.usuarioLogueado == undefined){
            db.User.findOne({
                where: {
                    email: emailInCookie
                }
            })
            .then(user => {
                console.log(user);
                req.session.usuarioLogueado = userFound;
            })
            .catch(error => {
                console.log(error);
            });
    }
    next();

}

module.exports = userLoggedMiddleware;