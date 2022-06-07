/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('produtos', (table) => {
    table.increments('id').primary();
    table.string('nome_produto', [50]).notNull();
    table.string('descricao', [250]);
    table.string('valor',[10]).notNull();
    table.string('img', [250])
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
