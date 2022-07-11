 function authtMiddlewares (res,req,next) {
if (req.session.usuarioLogueado != undefined) {
      next ()
 } 
 else {
       res.send ("Solo usuarios")
     }
}

module.exports = authtMiddlewares;
    