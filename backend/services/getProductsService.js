const { Produtos } = require('../model/index');

const preparaUrlFoto = (produto) => ({...produto, img:`http://localhost:3001/fotos/${produto.img}`});

const getProducts = async () => {
  const products = await Produtos.query().select(
    'nome_produto',
    'descricao',
    'valor',
    'img'
  );

  return products.map(preparaUrlFoto);
};

module.exports = { getProducts };
