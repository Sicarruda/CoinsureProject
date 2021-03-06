const services = require('../services/insertProductService');

const insertProduct = async (req, res) => {

  const { productName, productValue, productDescription } = req.body;
  const { path } = req.file;
  const productData = {
    productName,
    productValue,
    productDescription,
    image:path,
  };

  const product = await services.insertProduct(productData);
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
  insertProduct,
};
