
exports.up = function(knex, Promise) {
    return knex.schema.createTable('setores', table => {
        table.increments('setorid').primary()
        table.integer('cod')
        table.string('setornome',80)
        table.string('cor',10)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('setores')
};
