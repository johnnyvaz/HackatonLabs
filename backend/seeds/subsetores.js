
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subsetores').del()
    .then(function () {
      // Inserts seed entries
      return knex('subsetores').insert([
        {id: 1, nome:'Bebedouro', cod:'01', setor_id:'1'},
        {id: 2, nome:'Fogão', cod:'02', setor_id:'1'},
        {id: 3, nome:'Freezer', cod:'03', setor_id:'1'},
        
        {id: 4, nome:'Cozinha', cod:'04', setor_id:'2'},
        {id: 5, nome:'Quarto', cod:'05', setor_id:'2'},
        {id: 6, nome:'Lavanderia', cod:'06', setor_id:'2'},
        
        {id: 7, nome:'iPhone', cod:'07', setor_id:'3'},
        {id: 8, nome:'Motorola', cod:'08', setor_id:'3'},
        {id: 9, nome:'LG', cod:'09', setor_id:'3'},
        

      ]);
    });
};
