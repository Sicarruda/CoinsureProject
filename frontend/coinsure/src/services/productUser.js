import axios from 'axios';

export default function postProductUser(productData) {
  const bodyFromData = new FormData();
  bodyFromData.append('image', productData.image);
  return axios
    .post('http://localhost:3000/api/userPage/', productData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
}
