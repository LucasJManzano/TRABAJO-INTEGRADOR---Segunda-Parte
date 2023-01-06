const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');
const logRutas = require('../middlewares/logRutas');


router.get('/',logRutas, controller.home);


module.exports = router;