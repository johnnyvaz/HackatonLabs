
exports.seed = function(knex) {
      return knex('produtos').insert([
        {produtoid: 1,
        produtonome: 'Smartphone Motorola G7 Play 32GB Ouro 4G - 2GB RAM Tela 5,7\” Câm. 13MP + Câm. Selfie 8MP',
        descricao: 'O smartphone G7 Play da Motorola amplia a sua diversão com a ultra tela HD+ de 5,7" que é ideal para assistir seus filmes e jogos. Registre todos os momentos com a câmera traseira de 13MP e faça selfies com a câmera frontal de 8MP, com recursos bem legais, como cor em destaque, câmera lenta e modo retrato. Se gosta de games e vídeos, o desempenho do processador Octa-core 1.8 Ghz e 2GB de RAM vai manter a performance, sem aquelas travadinhas. Quer salvar fotos e vídeos sem se preocupar?! O Motorola G7 Play tem 32GB de memória interna para salvar tudo que precisa. Fique conectado em qualquer lugar, pois esse aparelho na cor ouro conta com a tecnologia 4G e é dual chip, que dá pra aproveitar as promoções de duas operadoras. E para se sentir mais seguro, este modelo conta com sensor de impressão digital. E não se preocupe, com a bateria de 3.000 mAh você pode passar o dia no trabalho, sair à noite e ainda assistir suas séries favoritas.',
        img: '/srv/img/nome/foto.png',
        preco: '999.60',
        etiquetar: 'S',
        dataEtiqueta: '2019.08.01',
        barcode: '7896548987',
        subsetor_id: '3', 
        },
        {produtoid: 2,
          produtonome: 'Smartphone Samsung Galaxy J4 Core 16GB Preto 4G - Quad Core 1GB RAM Tela 6” Câm. 8MP + Selfie 5MP',
          descricao: 'O Galaxy J4 Core da Samsung será o seu novo smartphone! Com seu estilo ostensivo e resistente, ele oferece design elegante e aderente com tela infinta de 6" e 7,9mm de espessura. Na cor preta, o aparelho tem câmera traseira com 8MP, frontal de 5MP com flash LED. E ainda possui a função “Front Beauty” para personalizar suas fotos com efeitos criativos, você pode compartilhar uma outra versão sua com seus amigos e familiares. O sistema operacional Android Go 8.1 garante mais desempenho para usar seu smartphone com eficiência e sem interrupções. Ele é otimizado para suportar aplicativos Go e de terceiros para que você esteja sempre à frente e no controle.Conta ainda com 16GB de armazenamento interno, 1GB de RAM, processador Quad-Core, tecnologia 3G/4G e é Dual Chip. O smartphone vem com Gerenciador Inteligente, que permite que você gerencie seus arquivos e limpe sua memória facilmente. Além disso, o otimizador de desempenho acelera seu smartphone suspendendo aplicativos inutilizados. E pra terminar, o Galaxy J4 Core possui uma bateria duradoura com capacidade de 3.300mAh que é suficiente para ser usada durante um dia inteiro. E pra te ajudar, o aparelho conta com recursos de economia de bateria que diminuem automaticamente os níveis de brilho enquanto gerencia o desempenho de aplicativos e do processador.',
          img: '/srv/img/nome/foto2.png',
          preco: '584.90',
          etiquetar: 'S',
          dataEtiqueta: '2019.08.01',
          barcode: '7896548987',
          subsetor_id: '3', 
          }
      ]);
};
