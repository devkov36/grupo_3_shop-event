const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/user.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function userLoggedMiddleware(req, res, next){
    let emailInCookie = req.cookies.userEmail;

    console.log(emailInCookie);

    if(emailInCookie != undefined 
        && req.session.usuarioLogueado == undefined){
            let userFound = users.find(oneUser => oneUser['email'] === emailInCookie); 

            req.session.usuarioLogueado = userFound;
    }
    next();

}

module.exports = userLoggedMiddleware;