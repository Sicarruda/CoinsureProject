const router = require('express').Router();
const controller = require('../controller/insertProductController');
const multer = require('multer');

const upload = multer({ dest: './public/uploads' });

router.post('/', upload.single('image'), controller.insertProduct);

module.exports = router;
