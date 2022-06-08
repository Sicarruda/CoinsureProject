const { Model } = require('objection');
const connection = require('../config/db');

Model.knex(connection);

class Usuarios extends Model {
  static tableName = 'usuarios';
}

class Produtos extends Model {
  static tableName = 'produtos';
}

module.exports = { Usuarios, Produtos };
