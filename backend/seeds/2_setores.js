
exports.seed = function(knex, Promise) {
      return knex('setores').insert([
        {setorid: 1, cor: 'Azul', setornome:'Eletrodomésticos', cod:'01'},
        {setorid: 2, cor: 'Verde', setornome:'Móveis', cod:'02'},
        {setorid: 3, cor: 'Vermelho', setornome:'Celular e Smartphone', cod:'03'},
        {setorid: 4, cor: 'Amarelo', setornome:'Móveis', cod:'04'},

      ]);
};
