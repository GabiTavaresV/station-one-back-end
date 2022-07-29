
<p align="center">
  <h2 align="center">Crud de filmes  </h2>

  <p align="center">
    Aplicação de um crud de filmes, com criação, listagem de todos os filmes e listagem por Id .
    <br />
  </p>
</p>

<!-- ABOUT THE PROJECT -->

### Tecnologias Utilizadas

As questões foram resolvidas usando as seguintes tecnologias:

- [TypeScrip]
- [Nodejs]
- [Nestjs]
- [Prisma]



## :notebook_with_decorative_cover: Rodar aplicação:

1. Clonar o repositório

```sh
   https://github.com/GabiTavaresV/station-one-back-end
```

2. Rodar aplicação no terminal

```sh
    npm install
```

3. Rodar a aplicação

```sh
   npm run start
```
4. Testar a aplicação no insomnia/Postman

```sh
    Endpoints:
    Criar um filme: médodo POST: http://localhost:3000/filmes
    Listar todos os filmes: método GET: http://localhost:3000/filmes
    Listar filme por Id: método GET: http://localhost:3000/filmes/id
```
## :notebook_with_decorative_cover: Se erro no Prisma:

1. Desinstalar o Prisma Client

```sh
   npm uninstall @prisma/cli @prisma/client
```
2. Instalar novamente o Prisma

```sh
   npx prisma generate
```
3. Rodar a aplicação

```sh
   npm run start
```




- [Gabriela Tavares ](https://github.com/GabiTavaresV)