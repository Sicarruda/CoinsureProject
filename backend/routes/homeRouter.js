const router = require('express').Router();
const controller = require('../controller/getProductsController');

router.get('/', controller.getProducts);


module.exports = router;