const services = require('../services/getProductsService');

const getProducts = async (req, res) => {
  const product = await services.getProducts();
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({
      status: 404,
      error: 'Product not fund',
    });
  }
};

module.exports = {
  getProducts,
};
