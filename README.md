- Descrição e Objetivos.

API REST é como um guia de boas práticas, uma vez que é um modelo de arquitetura de software que define uma série de requisitos para que as APIs sejam desenvolvidas.
Sendo assim, em outras palavras, é uma base para a construção de APIs que conecta os usuários com as aplicações em nuvem, por exemplos alguns padrões utilizados pela REST, como: JSON, XML e GraphQL e o principal pilar que é o HTTP. 

- Como replicar o projeto.

* Criar o arquivo package
--> npm init

* Gerencia as requisições, rotas e URLs, entre outra funcionalidades
--> npm install express

* Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte
--> npm install -D nodemon

* Rodar o projeto usando o nodemon 
--> nodemon app.js
 
* Baixe o software do MongoDB marcando a opção "mongocompass", será feitos teste no banco de dados.

* Instalação do MongoDB no projeto
--> npm install --save mongodb

* Instalação do Mongoose (Traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação).
--> npm install --save mongoose

- Passos para executar o projeto

* Instalar todas as dependencias indicada pelo package.json
--> npm install

* Rodar o projeto usando o nodemon 
--> nodemon servidor.js

* Use o insomnia para testar as requisições e interagir com o banco.
