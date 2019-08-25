
exports.up = function(knex, Promise) {
    return knex.schema.createTable('subsetores', table => {
        table.increments('subsetorid').primary()
        table.integer('cod')
        table.string('subsetornome',80)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('subsetores')
};
