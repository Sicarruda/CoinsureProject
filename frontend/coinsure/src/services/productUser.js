import axios from 'axios';

export default function postProductUser({ email, password }) {
  return axios.post('http://localhost:3001/userPage', {
    email,
    password,
  })
    .then(({ data }) => data.user)
    .catch((err) => err.toJSON());
}
