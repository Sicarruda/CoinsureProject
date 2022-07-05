// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards({ objData }) {
  const { nome_produto, valor, img, descricao } = objData;

  return (
    <div className="col col-sm-5 m-4 p-0">
      <div className="card">
        <div className="card border-light bg-light mb-3">
          <img className="card-img-top" src={img} alt={img}></img>
        </div>
        <div className="card-header">
          <h4 className="card-title">{nome_produto}</h4>
          <p className="card-text">Valor R${valor}</p>
        </div>
        <div className="card-body">
          <h5>Descrição</h5>
          <p className="card-text">{descricao}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
