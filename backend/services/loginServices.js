const { decrypt, encrypt } = require('../middleware/crypto');
const { Usuarios } = require('../model/index');

const loginServices = async ({ email, password }) => {
  const userPassword = await Usuarios.query()
    .select(['password_iv', 'password'])
    .where({ email });
  
  if (userPassword.length > 0) {
    const decryptedPassword = decrypt(userPassword.password_iv);
    if (password === decryptedPassword) {
      const token = createToken(email, userPassword.password);
      return token;
    }
  }
  return null;
};

module.exports = { loginServices };
