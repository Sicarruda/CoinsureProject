// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function UserPage() {
  return(
    <div>
      <label htmlFor='product-name-input'>
        Nome do produto
        <input type='text'></input>
      </label>
      <label htmlFor='value-input'>
        Valor
        <input type='text'></input>
      </label>
      <label htmlFor='img-input'>
        Imagem do produto 
        <input type='file'></input>
      </label>
      <label htmlFor='description-input'>
        Descrição
        <input type='text'></input>
      </label>
      <button type="button"> Enviar </button>
    </div>
  )
}

export default UserPage;