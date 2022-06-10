import axios from 'axios';

export default function postLogin({ email, password }) {
  return axios.post('http://localhost:3001/login', {
    email,
    password,
  })
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
}
