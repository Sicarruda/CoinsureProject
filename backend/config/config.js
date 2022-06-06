require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.BD_PWD,
    database: process.env.BD_NAME,
    host: process.env.BD_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
  },
};
