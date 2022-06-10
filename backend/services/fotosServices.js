const { Produtos } = require('../model/index');

const fotosServices = async (productData) => {
  const { productName, productValue, productDescription} = productData;

  const isProductExist = await Produtos.query()
    .select('img')
    .where('nome_produto', productName)
    .andWhere('valor', productValue)
    .andWhere('descricao', productDescription);

  if (isProductExist.length > 0) {
    return isProductExist;
  }
  return ;
};

module.exports = { fotosServices };
