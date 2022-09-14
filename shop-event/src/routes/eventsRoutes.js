const express = require('express');
const eventsdbController = require('../controllers/eventsdbController');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/eventos'));
    },
    filename: (req, file, cb) => {
        const newFilename = 'event-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    } 
});

const authtMiddlewares = require ('../middlewares/authMiddlewares');
const eventCreateMiddleware = require('../middlewares/eventCreateMiddleware');

const upload = multer({ storage });

const router = express.Router();

router.get('/cart', authtMiddlewares, eventsdbController.cart);


// CREAR UN EVENTO
router.get('/create', eventsdbController.create); 
router.post('/create/', upload.single('main_img'), eventCreateMiddleware, eventsdbController.save);

// EDITAR UN EVENTO
router.get('/edit/:id', eventsdbController.edit);
router.put('/edit/:id',
    // upload.single('main_img'), 
eventsdbController.update);

//OBTIENE UN EVENTO

router.get('/detail/:id', eventsdbController.detail);

// ELIMINAR UN EVENTO
router.post('/delete/:id', eventsdbController.delete);

module.exports = router;

