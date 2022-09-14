const express = require ('express');
const path = require ('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');

const app = express ();

const port = 3000


const mainRoutes = require('./src/routes/mainRoutes');
const eventsRoutes = require('./src/routes/eventsRoutes');
const usersRoutes = require ('./src/routes/userRoutes');

// LLamado a las apis
const apiUsersRoutes = require('./src/routes/api/usersRoutes');

const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');

app.use (session({
    secret: "Secreto!",
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());
app.set('views', path.join(__dirname, '/src/views'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join (__dirname, 'public')));
app.use(userLoggedMiddleware);

app.listen ( port , () => {
    console.log (`Servidor corriendo en el puerto ${port}`);
});

// Template Engine
app.set('view engine', 'ejs');

// Routers
app.use('/', mainRoutes);
app.use('/event', eventsRoutes);
app.use('/user', usersRoutes);

// API Routes
app.use('/api', apiUsersRoutes);

app.use((req, res, next) => {
    res.status(404).render('404');
});



