const { Produtos } = require('../model/index');

const getProducts = async () => {
  const product = await Produtos.query().select('nome_produto', 'descricao', 'valor', 'img');
  return product;
};

module.exports = { getProducts };
