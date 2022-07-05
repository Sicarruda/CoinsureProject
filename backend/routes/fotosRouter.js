const router = require('express').Router();
const controller = require('../controller/fotosController');

router.get('/:nomeFoto*', controller.fotosController);

module.exports = router;
