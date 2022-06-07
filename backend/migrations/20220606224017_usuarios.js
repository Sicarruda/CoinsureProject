/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('usuarios', table => {
    table.increments('id').primary();
    table.string('email', [250]).notNull().unique();
    table.string('password',[32]).notNull();
    table.string('password_iv',[32]).notNull();
    
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex,Promise) {
    return knex.schema.dropTableIfExists('usuarios')
  
};
