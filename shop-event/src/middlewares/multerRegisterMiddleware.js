const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/users'));
    },
    filename: (req, file, cb) => {
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});

const uploadFile = multer({ 
    storage,
    limits: {fileSize : 3000000},
    fileFilter: function(req, file, cb){
        checkTipeFyle(file, cb);
    }
});

function checkTipeFyle(file, cb){
    const filetypes = /jpeg|jpg|png|gif/;

    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null, true);
    } else {
        cb('Error: Sube un archivo valido, jpeg, jpg, png, gif');
    }
}

module.exports = uploadFile;
