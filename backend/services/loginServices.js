const { decrypt } = require('../middleware/crypto');
const { Usuarios } = require('../model/index');

const loginServices = async ({ email, password }) => {
  const userPassword = await Usuarios.query()
    .select(['password_iv', 'password'])
    .where({ email });
  
  const userObj = {} 
  userPassword.map((user)=>{
    userObj['pass'] = user.password;
    userObj['pass_iv']= user.password_iv
  })

  if (userPassword.length > 0) {
    const decryptedPassword = decrypt(userObj);
    if (password === decryptedPassword) {
     return true
    }
  }
  return null;
};

module.exports = { loginServices };
