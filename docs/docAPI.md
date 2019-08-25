Seja Bem Vindo á MAGACHEI

# Instruções para uso da API Achei

## login e token

Rota  | Função | verbo HTTP | json
--------- | ------ | ------| -----
/signup | Cadastro de Usuário | POST |
	"name" : "teste",
	"email" : "teste@teste.com.br",
	"password" : "teste",
	"confirmPassword" : "teste",
	"admin" : true
/signin | Acesso com senha para obter o token | POST | 

	"email": "teste@teste.com.br",
	"password": "teste"

 /validateToken | Validar o token | POST | 
    
 	"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6InRlc3RlIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20uYnIiLCJhZG1pbiI6MSwiaWF0IjoxNTY1NzQxODA3LCJleHAiOjE1NjYwMDEwMDd9.--sPP2AQQFvrxYi_0y-vWnTryKN6c0xezKlTitXyjwA",
	"email" : "teste@teste.com.br",
	"password" : "teste"


# Rotas produto
Rota  | Função | verbo HTTP | json
--------- | ------ | ------| -----
/produto | Buscar todos produtos | GET |

    "data": {
        "setores": [
            {
                "produtonome": "Smartphone Motorola G7 Play ...",
                "descricao": "O smartphone G7 Play da Motorola amplia a sua diversão com a ultra tela HD+ de 5,7\" que é ideal para assistir seus filmes e jogos...",
                "img": "/srv/img/nome/foto.png",
                "preco": 999.6,
                "etiquetar": "S",
                "dataEtiqueta": "2019-08-01T03:00:00.000Z",
                "barcode": "7896548987",
                "setornome": "Eletrodomésticos"
			}

Rota  | Função | verbo HTTP | json
--------- | ------ | ------| -----
/produto | Alterar produto | PUT |
                "produtonome": "Smartphone Motorola G7 Play ...",
                "descricao": "O smartphone G7 Play da Motorola 
				amplia a sua diversão com a ultra tela HD+ de 5,
				7\" que é ideal para assistir seus filmes e 
				jogos...",
                "img": "/srv/img/nome/foto.png",
                "preco": 999.6,
                "etiquetar": "S",
                "dataEtiqueta": "2019-08-01T03:00:00.000Z",
                "barcode": "7896548987",
                "setornome": "Eletrodomésticos"

