# Football Score

## Sobre

O objetivo foi desenvolver uma API RESTful para uma aplicação front-end que já estava implementada. A aplicação é um informativo sobre partidas e classificação de futebol.<br>

- Foi construído um ambiente dockerizado utilizando modelagem de dados através do Sequelize.

- A autenticação é feita com JSON Web Token.

## Stacks utilizadas
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)

* Express
* Typescript
* Sequelize - MySql
* Nodejs
* Docker
* Conceitos de POO
* Testes de integração com:
  - mocha
  - chai
  - sinon


## Como testar localmente:

> Para executar a aplicação localmente, é necessario ter um **ambiente node** configurado na sua máquina, além do `docker` e `docker-compose` instalados.


**1. Clone o repositória para um diretório em seu computador:**

   - No seu terminal, dentro de um diretório (pasta) de sua escolha, execute o seguinte comando:
  
  ```
  git clone git@github.com:Diene89/football-score.git
  ```
  
  **2. Entre na pasta do repositório que você acabou de clonar:**
  
   - Execute no seu terminal o seguinte comando:
    
  ```
  cd football-score
  ```
    
   **3. Instale as dependências do projeto:**

   - Execute no seu terminal o seguinte comando:
    
  ```
  npm install
  ```
---

## Repositório clonado. É hora de executar (start) a aplicação.

### Start o app Football Score:

**1. Para executar a aplicação:**

* Execute o seguinte comando no terminal e aguarde a execução de todo processo:

```
npm run compose:up 
```
Se tudo der certo, você de receber uma mensagem no final da sua tela semelhante a essa:

    Creating db ... done
    Creating app_backend_1 ... done
    Creating app_frontend_1 ... done

**2. Após a conclução do comando anterior. Acesse a aplicação no seu navegador.**

* Para acessar a aplicação, abra uma aba no seu navegador, cole a url a seguir e tecle em **enter**:

```
http://localhost:3000/leaderboard
```

> Para adicionar ou editar partidas é necessário efetuar login na aplicação. Para efetuar o login, você pode usar essas credenciais: `email: admin@admin.com` e `password: secret_admin`.

Agora é só navegar por toda a aplicação.

