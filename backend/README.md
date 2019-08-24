
# AndesAPI
Sistema de API para interligar o sistema andes com várias APIs

Criação de servidor de API

# Instalação

npm install

npm start


# Developer

# migrations:
knex migrate:make create_table_users


# cadastrar usuario

url: localhost:4000/signin
post: 
{
	"email": "johnny_vaz@andeserp.com.br",
	"password": "123456"
}

retorno:
{
    "id": 1,
    "name": "Johnny",
    "email": "johnny_vaz@andeserp.com.br",
    "admin": true,
    "iat": 1559239209,
    "exp": 1559498409,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkpvaG5ueSIsImVtYWlsIjoiam9obm55X3ZhekBhbmRlc2VycC5jb20uYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTU5MjM5MjA5LCJleHAiOjE1NTk0OTg0MDl9.YU6rygTn8zA-LHnRG46RuOdpFfHQbeEKYl50fAUdnVU"
}

# pegar o token



# validar token