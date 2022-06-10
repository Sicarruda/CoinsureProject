const { Produtos } = require('../model/index');

const insertProduct = async (productData) => {
  const { productName, productValue, productDescription, image } = productData;
  const isProductExist = await Produtos.query()
    .select('img')
    .where('nome_produto', productName)
    .andWhere('valor', productValue)
    .andWhere('descricao', productDescription);

  if (isProductExist.length > 0) {
    return;
  }

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
