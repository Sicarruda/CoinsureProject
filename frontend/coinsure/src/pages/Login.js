// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return(
    <div>
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

export default Login;