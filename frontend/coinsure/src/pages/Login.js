import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postLogin from '../services/login';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    if (userLogin.message === 'Request failed with status code 404') {
      navigate('/registration', { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }

  return (
    <div class="container bg-light m-5">
      <div className="mx-auto p-2">
        <h1>Login</h1>
      </div>
      <form className="form-inline m-2 border border-light rounded">
        <div className="form-group">
          <div className="mx-auto m-1 p-1">
            <div className='m-1 p-1'>
            <label htmlFor="email-input">
              Email
              <input
                className="form-control m-1 p-1 form-control-lg"
                type="email"
                id="email-input"
                placeholder="Seu email"
                onChange={({ target }) => setEmail(target.value)}
              ></input>
              <small id="emailHelp" className="form-text text-muted">
                Use um email valido
              </small>
            </label>
            </div>
            <div className='m-1 p-1'>
            <label htmlFor="password-input">
              Senha
              <input
                className="form-control m-1 p-1 form-control-lg"
                type="password"
                id="password-imput"
                placeholder="Sua senha"
                onChange={({ target }) => setPassword(target.value)}
              ></input>
              <small id="emailHelp" className="form-text text-muted">
                A senha deve ter pelo menos 6 digitos
              </small>
            </label>
            </div>
            <button
              type="button"
              className="btn btn-primary m-3"
              disabled={
                email && password
                  ? !chackEmailAndPassword(email, password)
                  : true
              }
              onClick={sendLogin}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
