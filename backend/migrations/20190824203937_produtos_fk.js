
exports.up = function (knex, Promise) {
    return knex.schema.alterTable('produtos', table => {
        table.integer('subsetor_id').unsigned().references('subsetorid')
        .inTable('subsetores')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.alterTable('produtos', table => {
        table.dropColumn('subsetor_id')
    })
};
