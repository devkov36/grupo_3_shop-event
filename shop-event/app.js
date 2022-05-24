const express = require ('express');
const app = express ();
const path = require ('path');
const port = 3000

app.use(express.static(path.join (__dirname, 'public')));

app.listen ( port , () => {
    console.log (`Servidor corriendo en el puerto ${port}`);
});

app.get ( '/login', ( req , res) => { 
    res.sendFile ( path.resolve ('./views/login.html'));
});

app.get ( '/productCart', ( req , res) => { 
    res.sendFile ( path.resolve ('./views/productCart.html'));
});

app.get ( '/register', ( req , res) => { 
    res.sendFile ( path.resolve ('./views/register.html'));
});

app.get ( '/productDetail', ( req , res) => { 
    res.sendFile ( path.resolve ('./views/productDetail.html'));
});

app.get ( '/', ( req , res) => { 
    res.sendFile ( path.resolve ('./views/index.html'));
});
