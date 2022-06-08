// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards'
// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <h1>Olá aqui é a Home</h1>
      <Link to="/userPage"> Pagina do usuario </Link>
      <Link to="/login"> Login </Link>
      <Link to="/Registration"> Cadastro </Link>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default Home;
