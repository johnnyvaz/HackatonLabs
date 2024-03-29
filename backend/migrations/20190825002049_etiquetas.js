
exports.up = function(knex, Promise) {
    return knex.schema.createTable('etiquetas', table => {
        table.increments('id').primary()
        table.string('produtonome',100)
        table.string('descricao',1000)
        table.string('img',150)
        table.double('preco')
        table.string('etiquetar',1)
        table.date('dataEtiqueta')
        table.string('barcode',20)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('etiquetas')
};
