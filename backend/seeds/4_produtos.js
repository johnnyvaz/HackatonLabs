
exports.seed = function(knex) {
      return knex('produtos').insert([
        {id: 1,
        produtonome: 'Smartphone Motorola G7 Play 32GB Ouro 4G - 2GB RAM Tela 5,7\” Câm. 13MP + Câm. Selfie 8MP',
        descricao: 'O smartphone G7 Play da Motorola amplia a sua diversão com a ultra tela HD+ de 5,7" que é ideal para assistir seus filmes e jogos. Registre todos os momentos com a câmera traseira de 13MP e faça selfies com a câmera frontal de 8MP, com recursos bem legais, como cor em destaque, câmera lenta e modo retrato. Se gosta de games e vídeos, o desempenho do processador Octa-core 1.8 Ghz e 2GB de RAM vai manter a performance, sem aquelas travadinhas. Quer salvar fotos e vídeos sem se preocupar?! O Motorola G7 Play tem 32GB de memória interna para salvar tudo que precisa. Fique conectado em qualquer lugar, pois esse aparelho na cor ouro conta com a tecnologia 4G e é dual chip, que dá pra aproveitar as promoções de duas operadoras. E para se sentir mais seguro, este modelo conta com sensor de impressão digital. E não se preocupe, com a bateria de 3.000 mAh você pode passar o dia no trabalho, sair à noite e ainda assistir suas séries favoritas.',
        img: '/srv/img/nome/foto.png',
        preco: '999.60',
        etiquetar: 'S',
        dataEtiqueta: '2019.08.01',
        barcode: '7896548987',
        subsetor_id: '3',
        
        }
      ]);
};
