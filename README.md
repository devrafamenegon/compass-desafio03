<p align="center">
  <img alt="compass logo" src="https://user-images.githubusercontent.com/65569815/176964539-fe858838-0d07-418e-9220-b6d94461ecee.png" />
</p>

# 📝Desafio 03

Desafio proposto ao fim da terceira Sprint do **Programa de Bolsas de NodeJS da [Compass.uol](https://compass.uol/)**.

## 🧾 Sumário
* ### [Como inicializar](#-como-inicializar)
* ### [Endpoints](#-endpoints)
* ### [Entities](#-entities)

## 📖 Descrição
Maria abriu uma nova empresa e precisa da sua ajuda para fazer uma API. A ideia inicial dela é iniciar
apenas com duas entidades que são: [Funcionários](#employee-table) e [Produtos](#product-table).


## 💻 Cursos concluídos

 - [JavaScript: explorando a linguagem](https://cursos.alura.com.br/course/javascript-introducao)
 - [TypeScript parte 1: evoluindo seu JavaScript](https://cursos.alura.com.br/course/typescript-evoluindo-javascript)
 - [TypeScript parte 2: avançando na linguagem](https://cursos.alura.com.br/course/typescript-avancando-linguagem)
 - [Typescript parte 3: mais técnicas e boas práticas](https://cursos.alura.com.br/course/typescript-tecnicas-boas-praticas)
 - [Node.js: API Rest com Express e MongoDB](https://www.alura.com.br/curso-online-nodejs-api-rest-express-mongodb)
 - [NestJS: criando uma API Rest com TypeScript](https://www.alura.com.br/curso-online-nestjs-api-rest-typescript)
 - [APIs REST com NestJS: buscas, validação, serialização e detalhes arquiteturais](https://www.alura.com.br/curso-online-api-rest-nestjs-busca-validacao-serializacao-arquitetura)
 - [Node.js e JWT: autenticação com tokens](https://www.alura.com.br/curso-online-node-jwt-autenticacao-tokens)
 
 ## 📰 Artigos lidos

 - [JavaScript replace: manipulando Strings e regex](https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex)
 - [Trabalhando com datas em JavaScript](https://www.alura.com.br/artigos/trabalhando-com-datas-em-javascript)
 - [Utilizando export.modules no Node.js](https://www.alura.com.br/artigos/utilizando-export-modules-no-node-js)

## 🧰 Tecnologias

<p>
  <img src="https://user-images.githubusercontent.com/65569815/182266557-f2d0c589-fe31-4d65-b867-cb40385066a0.svg" width="100">
  <img src="https://docs.nestjs.com/assets/logo-small.svg" width="100">
  <img src="https://avatars2.githubusercontent.com/u/20165699?s=400&v=4" width="100">
  <img src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-and-moodle-elearningworld-5.png" width="100">
  <img src="https://user-images.githubusercontent.com/65569815/182253645-6966537e-18ed-4c47-974b-22510cc3d834.png" width="100">
</p>

Para o desenvolvimento deste projeto, utilizei a linguagem Typescript, NodeJS com o framework NestjS, junto ao TypeORM com conexão ao banco de dados MySQL.
<br/>

## 🔑 Requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: Node.js, MySQL, crie o banco de dados e não se esqueça de criar a pasta `.env` seguindo o arquivo `.env.example`.

## 🏁 Como inicializar

Como descrito nos requisitos acima, primeiramente você precisa instalar o [NodeJS](https://nodejs.org/en/) e o [MySQL](https://www.mysql.com/downloads/) em sua máquina.
<br/>
Depois você irá executar os seguintes comandos:

```bash
# Clona este repositório
$ git clone https://github.com/devrafamenegon/compass-desafio03.git

# Acessa a pasta do projeto
$ cd compass-desafio03

# Instala as dependências
$ npm install
```

Agora que você já possui as dependências instalas, basta iniciar o projeto (Don't forget to set the environment variables in a .env file)

```bash
# Inicia a aplicação em localhost:3000
$ npm run start:dev

# Acesse a documentação do Swagger em localhost:3000/api/v1
```

## ✍🏻 Documentação da API
• Para acessar a documentação da api, basta iniciar o projeto corretamente seguindo os passos descritos na sessão [acima](#como-inicializar-1).

• Após isso, vá até [http://localhost:3000/api/v1](http://localhost:3000/api/v1)

## 🚪 Endpoints

### Employee Endpoints
|       Route           |    Method    |                   Description                    |                                                                         
|   ---------------     | :----------: |  ----------------------------------------------  |                                                                           
|  `/employee`          |    POST      |  Creates a employee                              | 
|  `/employee/`         |    GET       |  Gets all of employees                           |   
|  `/employee/:id`      |    GET       |  Gets the employee by its ID                     |   
|  `/employee/:id`      |    PUT       |  Updates the employee by its ID                  |                                                        
|  `/employee/:id`      |    DELETE    |  Deletes the employee by its ID                  |                 

### Product Endpoints
|       Route           |    Method    |                   Description                    |                                                                         
|   ---------------     | :----------: |  ----------------------------------------------  |                                                                           
|  `/product`           |    POST      |  Creates a product                                | 
|  `/product/`          |    GET       |  Gets all of products                             |   
|  `/product/:id`       |    GET       |  Gets the product by its ID                       |   
|  `/product/:id`       |    PUT       |  Updates the product by its ID                    |                                                        
|  `/product/:id`       |    DELETE    |  Deletes the product by its ID                    |        

## 🧱 Entities

### Employee Table
|    FieldName   |    Type   | Required | Unique |
|----------------|:---------:|:--------:|:------:|
| `employee_id`  | String    | true     | true   |
| `cpf`          | Varchar   | true     | true   |
| `name`         | Varchar   | true     | false  |
| `office`       | Enum      | true     | false  |
| `birthday`     | String    | true     | false  |
| `situation`    | String    | true     | false  |

### Product Table
|     FieldName    |    Type   | Required | Unique | Primary Key | Foreign Key |
|------------------|:---------:|:--------:|:------:|:-----------:|:-----------:|
| `product_id`     | String    | true     | true   | true        | false       |
| `category`       | Varchar   | true     | false  | false       | false       |
| `price`          | Varchar   | true     | false  | false       | false       |
| `employee_id`    | Varchar   | true     | false  | false       | true        |

 ## ✋🏻 Autor

| <img src="https://avatars.githubusercontent.com/devrafamenegon" width=115>
|---
| <a href="https://github.com/devrafamenegon">Rafael Menegon</a>
