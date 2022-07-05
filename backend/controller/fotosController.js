const services = require('../services/fotosServices');

const fotosController = async (req, res) => {

  const nomeDaFoto = req.url;
  console.log("URL", nomeDaFoto);
  res.sendFile(`./${nomeDaFoto}`,{root:"./public/uploads"});
};

module.exports = {
  fotosController,
};
