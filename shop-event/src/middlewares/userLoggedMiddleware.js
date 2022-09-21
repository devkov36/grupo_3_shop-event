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
                req.session.usuarioLogueado = user;
            })
            .catch(error => {
                console.log(error);
            });
    }
    next();

}

module.exports = userLoggedMiddleware;