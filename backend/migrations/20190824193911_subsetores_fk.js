
exports.up = function (knex, Promise) {
    return knex.schema.alterTable('subsetores', table => {
        table.integer('setor_id').unsigned().references('setorid')
        .inTable('setores')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.alterTable('subsetores', table => {
        table.dropColumn('setor_id')
    })
};
