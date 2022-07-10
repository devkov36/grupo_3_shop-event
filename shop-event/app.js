const express = require ('express');
const app = express ();
const path = require ('path');
const methodOverride = require('method-override');
const port = 3000
const session = require ('express-session');
const validator = require ('express-validator')


const mainRoutes = require('./src/routes/mainRoutes');
const eventsRoutes = require('./src/routes/eventsRoutes');
const usersRoutes = require ('./src/routes/userRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use (session({secret: "Secreto!"}));
app.use(express.static(path.join (__dirname, 'public')));

app.listen ( port , () => {
    console.log (`Servidor corriendo en el puerto ${port}`);
});

app.use('/', mainRoutes);
app.use('/event', eventsRoutes);
app.use('/user', usersRoutes);

app.use((req, res, next) => {
    res.status(404).render('404');
});



