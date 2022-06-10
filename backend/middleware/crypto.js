const crypto = require('crypto');
const config = require('../config/config');

const { cryptoPassword } = config.development;

const encrypt = (password) => {
  const iv = Buffer.from(crypto.randomBytes(16));
  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    Buffer.from(cryptoPassword),
    iv
  );

  const encryptedPassword = Buffer.concat([
    cipher.update(password),
    cipher.final(),
  ]);
  return {
    iv: iv.toString('hex'),
    password: encryptedPassword.toString('hex'),
  };
};

const decrypt = (encryption) => {
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(cryptoPassword),
    Buffer.from(encryption.pass_iv, 'hex')
  );

  const passwordDecrypted = Buffer.concat([
    decipher.update(Buffer.from(encryption.pass, 'hex')),
    decipher.final(),
  ]);
  return passwordDecrypted.toString();
};

module.exports = {
  encrypt,
  decrypt,
};
