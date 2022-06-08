import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postLogin from '../services/login';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const chackEmailAndPassword = (email, password) => {
    const validEmail = /^[a-zA-Z]+@[a-zA-Z]+\.[com]{3,}$/i;
    const passwordLength = 5;
    return validEmail.test(email) && password.length > passwordLength;
  };

  async function sendLogin() {
    const loginData = { email: email, password: password };
    const userLogin = await postLogin(loginData);
    console.log(userLogin);
    if (userLogin.message === 'Request failed with status code 404') {
      navigate('/registration', { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="email-input">
        Email
        <input
          type="email"
          id="email-input"
          placeholder="Email valido"
          onChange={({ target }) => setEmail(target.value)}
        ></input>
      </label>
      <label htmlFor="password-input">
        Senha
        <input
          type="password"
          id="password-imput"
          placeholder="Ao menos 6 digitos"
          onChange={({ target }) => setPassword(target.value)}
        ></input>
      </label>

      <button
        type="button"
        disabled={
          email && password ? !chackEmailAndPassword(email, password) : true
        }
        onClick={sendLogin}
      >
        Enviar
      </button>
    </div>
  );
}

export default Login;
