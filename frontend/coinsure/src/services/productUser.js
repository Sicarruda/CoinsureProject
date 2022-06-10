import axios from 'axios';

export default async function postProductUser(productData) {
  const formData = new FormData();
  formData.append('image', productData.image);
  formData.append('productName', productData.productName);
  formData.append('productValue', productData.productValue);
  formData.append('productDescription', productData.productDescription);
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/userPage',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  } catch (error) {
    console.log(error);
  }

  const bodyFromData = new FormData();
  bodyFromData.append('image', productData.image);
  return axios
    .post('http://localhost:3000/api/userPage/', productData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
}
