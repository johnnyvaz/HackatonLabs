
exports.up = function(knex, Promise) {
    return knex.schema.createTable('subsetores', table => {
        table.increments('id').primary()
        table.integer('cod')
        table.string('nome',80)
        table.string('cor',10)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('subsetores')
};
