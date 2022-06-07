// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Registration() {
  return(
    <div>
      <h1>Cadastro de usuario</h1>
      <label htmlFor='email-input'>
        Email
        <input type='email'></input>
      </label>
      <label htmlFor='password-input'>
        Senha
        <input type='password'></input>
      </label>

      <button type="button"> Enviar </button>
    </div>
  )
}

export default Registration;

