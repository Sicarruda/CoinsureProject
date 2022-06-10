const { Produtos } = require('../model/index');

const insertProduct = async (productData) => {
  const { productName, productValue, productDescription, productImg } =
    productData;
  const product = {
    nome_produto: productName,
    descricao: productDescription,
    valor: productValue,
    img: productImg,
  };
  const newProduct = await Produtos.query().insert(product);
  return newProduct;
};

module.exports = { insertProduct };
