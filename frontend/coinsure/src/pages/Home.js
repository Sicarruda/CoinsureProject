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
      <h1>Olá aqui é Ipssis Literis</h1>

      <Link to="/userPage"> Adicionar Produto </Link>
      <Link to="/login"> Login </Link>
      <Link to="/Registration"> Cadastro </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
        venenatis molestie. Nulla aliquet hendrerit odio eget cursus. Vestibulum
        pretium tincidunt tristique. Nam dictum massa odio, tincidunt gravida
        nunc egestas a. Aliquam a nulla aliquam, finibus massa at, condimentum
        velit. Vestibulum viverra hendrerit volutpat. Morbi nec justo mi. Aenean
        molestie vestibulum neque. Morbi interdum at mi vitae fringilla. Fusce
        fringilla eleifend vehicula. Ut sit amet congue diam. Duis nec malesuada
        sem. Nullam fringilla porta quam, posuere faucibus neque. Etiam magna
        sem, feugiat vel lectus quis, malesuada malesuada magna. Proin iaculis
        risus posuere, faucibus nibh eget, sagittis arcu. Pellentesque pulvinar
        arcu leo, egestas auctor lacus commodo a. Ut dapibus posuere libero nec
        accumsan. Vestibulum varius mi ac varius convallis. Donec convallis,
        elit quis pretium lacinia, elit risus ornare velit, sed elementum diam
        arcu id tellus. Donec feugiat ante nec augue viverra, a porttitor justo
        dictum. Aliquam pulvinar risus ultrices semper dignissim. Aenean tempor,
        dui eu porttitor fringilla, tortor libero vulputate dolor, nec
        sollicitudin mi ex vel nisl.
      </p>
      <h3>Esses são os nossos produtos!</h3>
      <div>
        {objData.map((obj, index) => (
          <Cards key={index} objData={obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
