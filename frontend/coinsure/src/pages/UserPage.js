import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postProductUser from '../services/productUser';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserPage() {
  const [productName, setProductName] = useState('');
  const [productValue, setProductValue] = useState('');
  const [image, setImage] = useState('');
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

    const newProduct = await postProductUser(productData);

    if (newProduct) {
      navigate('/', { replace: true });
    } else {
      navigate('/userPage', { replace: true });
    }
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
    <div classname="container bg-light m-5">
      <h3>Adicione um novo produto</h3>
      <form method="post" encType="multipart/form-data" className='border border-light rounded m-5'>
        <div className="form-row m-2">
          <div className="form-group   col-md-6">
            <label htmlFor="product-name-input">
              Nome do produto
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Digite o nome aqui"
                onChange={({ target }) => setProductName(target.value)}
              ></input>
              <small id="emailHelp" className="form-text text-muted m-2 p-2">
                O nome do produto deve ter mais de 3 letras
              </small>
            </label>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="value-input">
              Valor
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Digite o valor aqui"
                onChange={({ target }) => setProductValue(target.value)}
              ></input>
              <small id="emailHelp" className="form-text text-muted m-2 p-2">
                Somente numeros
              </small>
            </label>
          </div>
          <div className="form-control-file m-2 p-2">
            <label htmlFor="img-input">
              Imagem do produto
              <input
                className="control-file-input"
                type="file"
                name="image"
                onChange={({ target }) => setImage(target.files[0])}
              ></input>
              <small id="emailHelp" className="form-text text-muted m-4 p-4">
                Somente arquivos .jpg .gif .png .jpeg
              </small>
            </label>
          </div>
          <div className="form-group m-2 p-2">
            <label htmlFor="description-input">
              Descrição
              <textarea
                className="form-control"
                row="7"
                placeholder='Breve desceição do produto'
                onChange={({ target }) => setProductDescription(target.value)}
              ></textarea>
              <small id="emailHelp" className="form-text text-muted m-2 p-2">
                somente 250 caracteres
              </small>
            </label>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            disabled={isButtonDisabled()}
            onClick={sendProductData}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
export default UserPage;
