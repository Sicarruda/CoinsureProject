const multer = require('multer');
console.log('AAAAA')

module.exports = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      console.log('destination')
      cb(null, '../public/upload');
    },
    filename: (req, file, cb) => {
      console.log('filename')
      cb(null, `${Date.now().toString()}_${file.originalname}`);
    },
  }),
  fileFilter: (res, file, cb) => {
    console.log('fileFilter')
    const extentionImg = [
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/gif',
    ].find((aceptExtention) => aceptExtention === file.mimetype);
    if(extentionImg){
      console.log('BBBBBBBB')
      return cb(null, true)
      
    }
    console.log('CCCCCCCCCC')
    return cb(null, false)
  },
});
