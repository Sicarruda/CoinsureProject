// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Cards({ objData }) {
  const { nome_produto, valor, img, descricao } = objData;

  return (
    <div>
      <div>
        <img src={img} alt="imagem de lampada"></img>
      </div>
      <div>
        <p>{nome_produto}</p>
        <p>{valor}</p>
      </div>
      <div>
        <p>Descrição</p>
        <p>{descricao}</p>
      </div>
    </div>
  );
}

export default Cards;
