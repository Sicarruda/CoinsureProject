import axios from 'axios';

export default function getfotosList() {
  return axios.get('http://localhost:3001/fotos')
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
}