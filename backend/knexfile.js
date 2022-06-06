const dbConfig = require('./config/config');

const { username, password, database, host, port } = dbConfig.development;

module.exports = {
  client: 'mysql',
  connection: {
    host: host,
    port: port,
    database: database,
    user: username,
    password: password,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migration: {
    tableName: 'Migration',
  },
};
