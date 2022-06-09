const router = require('express').Router();
const controller = require('../controller/registrationController');

router.post('/', controller.registration);

module.exports = router;
