const { decrypt, encrypt } = require('../middleware/crypto');
const { Usuarios } = require('../model/index');

const registrationServices = async ({ email, password }) => {
  const userPassword = encrypt(password)
  const user = {email, password: userPassword.password, password_iv: userPassword.iv }
  const newUser = await Usuarios.query()
    .insert(user)
    return (newUser)
};

module.exports = { registrationServices };
