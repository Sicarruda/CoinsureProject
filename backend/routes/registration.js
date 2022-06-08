const router = require('express').Router();
const controller = require('../controller/registrationControlller');

router.post('/', controller.registration);

module.exports = router;
