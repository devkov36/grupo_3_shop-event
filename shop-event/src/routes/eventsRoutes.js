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

const upload = multer({ storage });

const router = express.Router();

router.get('/cart', eventsController.cart);

router.get('/detail', eventsController.detail);

// CREAR UN PRODUCTO
router.get('/create', eventsController.create); 
router.put('/save/', upload.single('main_img'), eventsController.save);

// EDITAR UN EVENTO
router.get('/edit/:id', eventsController.edit);
router.put('/edit/:id', upload.single('main_img'), eventsController.update);


module.exports = router;

