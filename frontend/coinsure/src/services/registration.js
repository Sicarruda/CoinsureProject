import axios from 'axios';

export default function postLogin({ email, password }) {
  return axios.post('http://localhost:3001/registration', {
    email,
    password,
  })
    .then(({ data }) => data.user)
    .catch((err) => err.toJSON());
}