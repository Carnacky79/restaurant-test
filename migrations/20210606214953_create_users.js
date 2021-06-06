exports.up = function(knex) {
    return knex.schema.createTable('users', function(t) {
        t.increments('id').primary();
        t.string('username').notNull();
        t.string('email').notNull();
        t.string('password').notNull();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};