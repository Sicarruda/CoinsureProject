import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postProductUser from '../services/productUser';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

function UserPage() {
  const [productName, setProductName] = useState('');
  const [productValue, setProductValue] = useState('');
  const [image, setImage] = useState(null);
  const [productDescription, setProductDescription] = useState('');

  const navigate = useNavigate();

  const productData = {
    productName,
    productValue,
    productDescription,
    image,
  };

  const sendProductData = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/api/userPage",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }

    // const newProduct = await postProductUser(productData);

    // if (newProduct) {
    //   navigate('/', { replace: true });
    // } else {
    //   navigate('/userPage', { replace: true });
    // }
  };

  const hasProductData = (productData) => {
    const { productName, productValue, productDescription, image } =
      productData;
    return productName && productValue && image && productDescription;
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

  const verifyProductImg = (image) => {
    const stringExtension = image.name.split('.')[1];

    if (
      stringExtension === 'png' ||
      stringExtension === 'gif' ||
      stringExtension === 'jpeg' ||
      stringExtension === 'jpg'
    ) {
      return true;
    }

    return true;
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
    if (hasProductData(productData)) {
      return !verifyProductData(
        verifyProductName(productName),
        verifyProductValue(productValue),
        verifyProductImg(image),
        verifyProductDescription(productDescription)
      );
    }
    return true;
  };

  return (
    <div>
      <form method="post" encType="multipart/form-data">
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
            name='image'
            onChange={({ target }) => setImage(target.files[0])}
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
