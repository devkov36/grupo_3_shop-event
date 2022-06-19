const express = require ('express');
const app = express ();
const path = require ('path');
const port = 3000

const mainRoutes = require('./src/routes/mainRoutes');
const productsRoutes = require('./src/routes/productsRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

app.use(express.static(path.join (__dirname, 'public')));

app.listen ( port , () => {
    console.log (`Servidor corriendo en el puerto ${port}`);
});

app.use('/', mainRoutes);

app.use('/product', productsRoutes);



