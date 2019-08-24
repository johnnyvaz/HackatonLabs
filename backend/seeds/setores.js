
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('setores').del()
    .then(function () {
      // Inserts seed entries
      return knex('setores').insert([
        {id: 1, cor: 'Azul', nome:'Eletrodomésticos', cod:'01'},
        {id: 2, cor: 'Verde', nome:'Móveis', cod:'02'},
        {id: 3, cor: 'Vermelho', nome:'Celular e Smartphone', cod:'03'},
        {id: 4, cor: 'Amarelo', nome:'Móveis', cod:'04'},

      ]);
    });
};
