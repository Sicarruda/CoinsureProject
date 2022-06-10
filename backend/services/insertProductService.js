const { Produtos } = require('../model/index');

const insertProduct = async (productData) => {
  const { productName, productValue, productDescription, image } =
    productData;
  const product = {
    nome_produto: productName,
    descricao: productDescription,
    valor: productValue,
    img: image,
  };
  const newProduct = await Produtos.query().insert(product);
  return newProduct;
};

module.exports = { insertProduct };
