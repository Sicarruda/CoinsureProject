const services = require('../services/fotosServices');

const fotosController = async (req, res) => {

  const img = await services.fotosServices(req.body);
  if (img) {
    res.status(200).json({ img });
  } else {
    res.status(404).json({
      status: 404,
      error: 'User not fund',
    });
  }
};

module.exports = {
  fotosController,
};
