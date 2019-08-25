
exports.seed = function(knex, Promise) {
      return knex('subsetores').insert([
        {id: 1, subsetornome:'Bebedouro', cod:'01', setor_id:'1'},
        {id: 2, subsetornome:'Fogão', cod:'02', setor_id:'1'},
        {id: 3, subsetornome:'Freezer', cod:'03', setor_id:'1'},
        
        {id: 4, subsetornome:'Cozinha', cod:'04', setor_id:'2'},
        {id: 5, subsetornome:'Quarto', cod:'05', setor_id:'2'},
        {id: 6, subsetornome:'Lavanderia', cod:'06', setor_id:'2'},
        
        {id: 7, subsetornome:'iPhone', cod:'07', setor_id:'3'},
        {id: 8, subsetornome:'Motorola', cod:'08', setor_id:'3'},
        {id: 9, subsetornome:'LG', cod:'09', setor_id:'3'},
        

      ]);
};
