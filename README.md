# Database Queries

## Plataforma de aprendizado
* Rockeseat

## Curso
* Ignite Trilha Nodejs

## Desafio05
* Criar os três tipos de queries usando o TypeORM. Cria modelagem de banco de dados.
  
## Descrição
* Desenvolver uma API utilizandos Nodejs, Typescript e o banco de dados PostgreSQL. Criar queries utilizando o TypeORM para fazer query builder, ORM e raw query. E fazer a modelagem dos dados passando a cardionalidades. 

## Recurso
* Docker - comandos docker run, start, ps, ps -a, rm, exect it, logs. Criar imagem de API no container. Criar micro-serviços com docker-compose. Criar imagem dentro container.

* Conceito basico de utilização de banco de dados na API - driver nativo, quebryBuilder, typeORM e Sequelize

* TypeORM - configuração do typeorm, configuração ormconfig, tabelas migrations, comandos, mapeamento de entidades, criação de repositorio e serviços ao banco de dados.

* TSyringe - injeção de repositorio, injeção de classe e criação de container de instancias.

* Swagger - importação de arquivo e referencias de definição.

* Autenticação Token JWT - criação de middleware para autenticação de usuários com token JWT.

* Bcrypt - utilização de como criptografar senha utilizando hash e compare.

* UseCase Usuário - conceito semântico de como criar e autenticar usuário na API.

* Tratamento de Exceções - criação de arquivo para tratamento de exceções com respostas e status de cada error.

* Crianção de upload Avatar - utilizando multer, crypto e path. Para alterar o nome e adicionar hash evitando duplicidade.

* Função deleteFile - criamos classe utils deleteFile, para que o usuário possa ter apenas uma imagem de avatar.

* Adicionar Objeto no Express - aprendizado e pratica de como repassar um objeto para dentro do Request no express.

* Modelagem de banco dados no PostgresSQL - Aprendizado e pratica de modelagem utilizando Orm, queryBuilder e queryRaw. Utilizando SELECT, WHERE, AND, LOWER, COUNT, RELATIONS, ORDERBY e ILIKE.

* Relacionamento de entidades - Aprendizado e pratica de relacionamento entre tabelas utilizando, ManyToMany e OneToMany.

### Pré-requisitos

* Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/). 
E o banco de dados Postgres:
[Postgres](https://www.postgresql.org/).
E o docker para utilizar docker-compose para subir o container do Postgres
[Docker](https://https://www.docker.com/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/kaiomoreira-dev/database-queries.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd database-queries

# Vá para a pasta src
$ cd src

# Instale as dependências
$ yarn ou npm install

# Execute a aplicação em modo de desenvolvimento
$ docker-compose up

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>

# O banco de dados do postgres fica no docker que sai na porta 5432:5432
```





