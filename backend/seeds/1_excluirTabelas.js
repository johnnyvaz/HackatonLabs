
exports.seed = function(knex) {
    return knex('produtos').del()
    .then(function () {
        return knex('subsetores').del()
        .then(function() {
            return knex('setores').del()
        })
    })
};
