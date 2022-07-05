import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import getProductList from '../services/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [objData, setObjData] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      const productData = await getProductList();
      setObjData(productData);
    };
    getProductData();
  }, []);

  return (
    <div className="container bg-light">
      <h1 className='text-dark m-4'>Olá aqui é Ipssis Literis</h1>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link " to="/userPage">
            Adicionar Produto
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Registration">
            Cadastro
          </Link>
        </li>
      </ul>
      <div>
        <p className='text-secondary m-3 p-2'>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
            venenatis molestie. Nulla aliquet hendrerit odio eget cursus.
            Vestibulum pretium tincidunt tristique. Nam dictum massa odio,
            tincidunt gravida nunc egestas a. Aliquam a nulla aliquam, finibus
            massa at, condimentum velit. Vestibulum viverra hendrerit volutpat.
            Morbi nec justo mi. Aenean molestie vestibulum neque. Morbi interdum
            at mi vitae fringilla.
          </strong>
        </p>
      </div>
      <h3 className='m-3'>Esses são os nossos produtos!</h3>
      <div className='row p-0 ml-3'>
        {objData.map((obj, index) => (
          <Cards key={index} objData={obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
