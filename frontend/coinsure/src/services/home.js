import axios from 'axios';

export default function getProductList() {
  return axios.get('http://localhost:3001/home')
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
}
