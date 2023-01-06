const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const logRutas = require('../middlewares/logRutas');
const upload = require('../middlewares/uploadFile');


router.get('/productos',logRutas, controller.products);
router.get('/productos/detail/:id',logRutas, controller.detail);
router.get('/productos/create',logRutas, controller.create);
router.get('/productos/edit/:id',logRutas, controller.edit);
router.get('/productos/delete/:id',logRutas, controller.del);
router.post('/productos/create',logRutas,upload.single('Image'), controller.store);
router.post('/productos/edit/:id',logRutas,upload.single('Image'), controller.update);
router.post('/productos/delete/:id',logRutas,controller.delete);


module.exports = router;

