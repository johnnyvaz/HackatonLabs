# API Achei!
> **Magalu Achei** É Uma nova experiencia de compra, de forma fácil e rápida, a informação chega até o cliente, facilitando e modernizando a entrega de informação detalhada dos produtos e além disso ainda é um simplificador da etiquetagem. alertando e indicando os produtos que precisam ser reetiquetados.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

# Features
* Catálogo virtual para uso do vendedor e do cliente;
* Organização da armazenagem da localização dos produtos nas gondolas;
* Facilitação da busca de informações detalhadas dos produtos;
* Comparação entre produtos na própria gondola;
* Automação de Geração da Impressão de Etiquetas dos produtos;
* Notificação de preços alterados para manutenção da etiquetagem;
* Localização de grupo de produtos por meio de cores;  
* Geração e Leitura de QRCode;

![Tela Inicial](/docs/pagina-inicio-app.jpeg)

## Instalação

Backend:

```sh
cd backend
mysql -u root -p 
(senha)
create database achei;
quit;
2 - Configure o arquivo .env (dados do banco de dados mysql criado)
npm install
npm install -g knex
knex migrate:latest
knex seed:run
npm start
```

Instalação do FrontEnd:

```sh
cd frontend
npm install
npm start
```

## Recursos a serem implementados na versão 2.0

* Acesso fácil para deficientes visuais;
* Botão para solicitar ajuda de um vendedor;

_Para mais exemplos, consulte a [Wiki][wiki]._ 


## Contributing

1. Faça o _fork_ do projeto (<https://github.com/yourname/yourproject/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki
