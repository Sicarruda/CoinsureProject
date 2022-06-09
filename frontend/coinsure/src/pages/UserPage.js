import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postProductUser from '../services/productUser';
// import 'bootstrap/dist/css/bootstrap.min.css';

function UserPage() {
  const [productName, setProductName] = useState('');
  const [productValue, setProductValue] = useState('');
  const [productImg, setProductImg] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const navigate = useNavigate();

  const productData = {
    productName,
    productValue,
    productDescription,
    productImg,
  };

  async function sendProductData() {
    const newProduct = await postProductUser(productData);
    if (newProduct) {
      navigate('/home', { replace: true });
    } else {
      navigate('/userProduct', { replace: true });
    }
  }

  const hasProductData = (productData) => {
    const { productName, productValue, productDescription, productImg } =
      productData;
    console.log("hasProductData",'',!!(productName && productValue && productImg && productDescription))
    return productName && productValue && productImg && productDescription
      
  };

  const verifyProductName = (productName) => {
    if (productName.length > 3) {
      return true;
    }
    return false;
  };

  const verifyProductValue = (productValue) => {
    if (productValue >= 1) {
      return true;
    }
    return false;
  };

  const verifyProductImg = (productImg) => {
    const stringExtension = productImg.split('.')[1];
    
    if (
      stringExtension === 'png' ||
      stringExtension === 'gif' ||
      stringExtension === 'jpeg' ||
      stringExtension === 'jpg'
    ) {
      return true;
    }

    return false;
  };

  const verifyProductDescription = (productDescription) => {
    if (productDescription.length <= 250) {
      return true;
    }
    return false;
  };

  const verifyProductData = (
    verifyProductName,
    verifyProductValue,
    verifyProductImg,
    verifyProductDescription
  ) => {
    if (
      verifyProductName &&
      verifyProductValue &&
      verifyProductImg &&
      verifyProductDescription
    ) {
      return true;
    }
    return false;
  };

  const isButtonDisabled = () => {
    console.log(productData);
    if (hasProductData(productData)) {
      return !verifyProductData(
        verifyProductName(productName),
        verifyProductValue(productValue),
        verifyProductImg(productImg),
        verifyProductDescription(productDescription)
      );
    }
    return true;
  };

  return (
    <div>
      <form>
        <label htmlFor="product-name-input">
          Nome do produto
          <input
            type="text"
            onChange={({ target }) => setProductName(target.value)}
          ></input>
        </label>
        <label htmlFor="value-input">
          Valor
          <input
            type="text"
            onChange={({ target }) => setProductValue(target.value)}
          ></input>
        </label>
        <label htmlFor="img-input">
          Imagem do produto
          <input
            type="file"
            onChange={({ target }) => setProductImg(target.value)}
          ></input>
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            row="5"
            onChange={({ target }) => setProductDescription(target.value)}
          ></textarea>
        </label>
        <button
          type="button"
          disabled={isButtonDisabled()}
          onClick={sendProductData}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default UserPage;
