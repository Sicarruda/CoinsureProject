import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import getProductList from '../services/home';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div>
      <h1>Olá aqui é a Home</h1>

      <Link to="/userPage"> Pagina do usuario </Link>
      <Link to="/login"> Login </Link>
      <Link to="/Registration"> Cadastro </Link>
      <div>
        {objData.map((obj, index) => (
          <Cards key={index} objData={obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
