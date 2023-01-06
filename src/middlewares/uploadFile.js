const multer = require('multer');
const path = require ('path');

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/images')
    },
    filename: function (req, file, cb) {
        const fileExtension = path.extname(file.originalname);
        const randomName = Date.now () + fileExtension;
        cb(null, randomName);
    },
    fileFilter: function (req, file, cb){
        const fileExtension = path.extname(file.originalname);
        if (!['.jpj','.png', '.gif'].includes(fileExtension)){
            return cb(null, false);
        }
        cb (null, true);
    }
});
const upload = multer ({storage: multerStorage})
module.exports = upload;