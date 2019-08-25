
exports.seed = function(knex, Promise) {
      return knex('setores').insert([
        {id: 1, cor: 'Azul', setornome:'Eletrodomésticos', cod:'01'},
        {id: 2, cor: 'Verde', setornome:'Móveis', cod:'02'},
        {id: 3, cor: 'Vermelho', setornome:'Celular e Smartphone', cod:'03'},
        {id: 4, cor: 'Amarelo', setornome:'Móveis', cod:'04'},

      ]);
};
