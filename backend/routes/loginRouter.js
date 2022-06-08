const router = require('express').Router();
const controller = require('../controller/loginController');

router.post('/', controller.login);

module.exports = router;
