import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const chackEmailAndPassword = (email, password) => {
    const validEmail = /^[a-zA-Z]+@[a-zA-Z]+\.[com]{3,}$/i;
    const passwordLength = 5;
    return validEmail.test(email) && password.length > passwordLength;
  };

  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="email-input">
        Email
        <input
          type="email"
          id="email-input"
          onChange={({ target }) => setEmail(target.value)}
        ></input>
      </label>
      <label htmlFor="password-input">
        Senha
        <input
          type="password"
          id="password-imput"
          onChange={({ target }) => setPassword(target.value)}
        ></input>
      </label>
      <Link to="/">
        <button
          type="button"
          disabled={
            email && password ? !chackEmailAndPassword(email, password) : true
          }
        >
          Enviar
        </button>
      </Link>
    </div>
  );
}

export default Login;
