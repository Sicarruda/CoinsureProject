// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <h1>Olá aqui é a Home</h1>
      <Link to="/userPage"> Pagina do usuario </Link>
      <Link to="/login"> Login </Link>
      <Link to="/Registration"> Cadastro </Link>

    </div>
  );
}

export default Home;
