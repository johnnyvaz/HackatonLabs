
exports.seed = function(knex, Promise) {
      return knex('subsetores').insert([
        {subsetorid: 1, subsetornome:'Bebedouro', cod:'01', setor_id:'1'},
        {subsetorid: 2, subsetornome:'Fogão', cod:'02', setor_id:'1'},
        {subsetorid: 3, subsetornome:'Freezer', cod:'03', setor_id:'1'},
        
        {subsetorid: 4, subsetornome:'Cozinha', cod:'04', setor_id:'2'},
        {subsetorid: 5, subsetornome:'Quarto', cod:'05', setor_id:'2'},
        {subsetorid: 6, subsetornome:'Lavanderia', cod:'06', setor_id:'2'},
        
        {subsetorid: 7, subsetornome:'iPhone', cod:'07', setor_id:'3'},
        {subsetorid: 8, subsetornome:'Motorola', cod:'08', setor_id:'3'},
        {subsetorid: 9, subsetornome:'LG', cod:'09', setor_id:'3'},
        

      ]);
};
