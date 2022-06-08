const jwt = require('jsonwebtoken');
const config = require('../config/config');

const { cryptoPassword } = config.development;

const createToken = (user) => {
  const token = jwt.sign(
    {
      email: user.email,
      password: user.password,
    },
    cryptoPassword,
    {
      expiresIn: '4h',
    }
  );

  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, cryptoPassword);
  return decoded;
};

module.exports = {
  createToken,
  verifyToken,
};
