const router = require('express').Router();
const controller = require('../controller/fotosController');

router.get('/', controller.fotosController);

module.exports = router;
