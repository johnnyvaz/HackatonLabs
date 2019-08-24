
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id',10).primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.boolean('admin').notNull().defaultTo(false)
        table.timestamp('deletedAt')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
