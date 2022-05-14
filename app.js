const express = require ('express');
const app = express ();
const path = require ('path');
const port = 3000

app.use(express.static(path.join (__dirname, 'public')));

app.get ( '/', ( req , res) => { res.sendFile ( path.resolve ('./views/home.html'));});
app.listen ( port , () => {console.log ('Servidor corriendo')});

///app.listen(port, ()=>{console.log(`servidor corriendo en http://localhost:${port}`);});