const express = require('express');
const eventsController = require('../controllers/eventsController');
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

const upload = multer({ storage });

const router = express.Router();

router.get('/cart', authtMiddlewares, eventsController.cart);


// CREAR UN EVENTO
router.get('/create', eventsController.create); 
router.post('/create/', upload.single('main_img'), eventsController.save);

// EDITAR UN EVENTO
router.get('/edit/:id', eventsController.edit);
router.put('/edit/:id', upload.single('main_img'), eventsController.update);

//OBTIENE UN EVENTO

router.get('/detail/:id', eventsController.detail);

// ELIMINAR UN EVENTO
router.post('/delete/:id', eventsController.delete);


module.exports = router;

