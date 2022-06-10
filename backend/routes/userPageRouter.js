const router = require('express').Router();
const controller = require('../controller/insertProductController');

router.post('/', controller.insertProduct);

module.exports = router;
