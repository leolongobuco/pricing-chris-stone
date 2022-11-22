# NLW Copa

# Sobre o projeto

![STONE](https://github.com/leolongobuco/pricing-chris-stone/blob/main/github_assets/stone.jpg)

Pricing Chris é um projeto desenvolvido como desafio para vaga de Software Engineer Backend na [Stone Tech](https://www.stone.com.br/ "Site da Stone").

A aplicação consiste na criação de uma API Rest que calcula o preço e "profit and loses" (perdas e ganhos) de três produtos que são vendidos pela Pedregulho Co. são eles: Pedra da Sorte, Pedra Fofa e Pedra Roxa.

Cada um desses produtos possui particularidades em seu preço e negociação. A API consome as informações passadas como parâmetros e devolve os valores através das regras de negócios estabelecidas dentro do código.

Há no projeto quatro entidades principais: Customer, Seller, Product e Profit And Loses. As duas primeiras são totalmente independentes porém o perfil de cada cliente e vendedor interfere diretamente no valor da negociação.

Product e Profit And Loses se relacionam pois só existe um PnL se também existir um produto.

## Modelo conceitual

![Modelo Conceitual](https://github.com/leolongobuco/pricing-chris-stone/blob/main/github_assets/erd-pricing-chris.png)

# Tecnologias utilizadas

## Backend

- NodeJS
- TypeScript
- Express
- Prisma
- Vitest
- Crypto
- Tsyringe
- Docker

## Testando a aplicação

```bash
# clone o repositório
git clone https://github.com/leolongobuco/pricing-chris-stone

# entrar na pasta do projeto backend
cd pricing-chris-stone
cd pricing-chris

#docker
docker-compose up

# instalar dependências
yarn

# executar os testes do projeto
yarn test

#executar a aplicação
yarn dev
```

## Testes

Toda a regra de negócio da API está validada com testes unitários de cada useCase, a ferramenta utilizada para isso foi o Vitest.
É possível validar toda a aplicação somente olhando os testes descritos e seus retornos.

![Testes da Aplicação](https://github.com/leolongobuco/pricing-chris-stone/blob/main/github_assets/testes-app.png)

## Testes com DB (WEB)

Para visualizar a aplicação conectada ao banco realiza a instalação do docker através do passo a passo anterior e baixe essa collection do postman para tornar o processo mais rápido:
[Collection Pricing Chris](https://www.getpostman.com/collections/2dbe3a478c9e1327bccb "Collection da Aplicação")

- 1º Comece criando um Customer:

```JSON
  {
    "customerEmail": "johndoecustomer@email.com",
    "customerLocation": "91920150", // sempre o *CEP* da região
    "customerSegment": "Education", // Restaurants | Education | Health | Tech | Clothing | Real State | Personal Services | Entertainment
    "soldVolume": 3000
  }
```

- 2º Crie um Product:

```JSON
  {
    "productName": "Pedra da Sorte",
    "typeProduct": "Pedra da Sorte" // Pedra Roxa | Pedra Fofa
  }
```

- 3º Crie um Profit and Loses para o Product:

```JSON
  {
    "brazilianTax": 0.1125,
    "costs": 100,
    "revenue": 1000,
    "customerEmail": "johndoecustomer@email.com", // customerEmail precisa ser de um cliente existente
    "productID": "437e56fd-7253-462d-861f-50883a500c7c", // productID precisa ser de um produto existente
    "valuePerUse": 2 // Parâmetro opcional para Pedra da Sorte e Pedra Roxa
}
```

- 4º Busque um Profit and Lose de um produto específico:

```bash
    http://localhost:3000/profitAndLoses/437e56fd-7253-462d-861f-50883a500c7c

```

- 5º Simule uma negociação:

```JSON
  {
    "customerLocation": "91920150",
    "customerSegment": "Tech", // Restaurants | Education | Health | Tech | Clothing | Real State | Personal Services | Entertainment
    "sellerTypeLevel": "JR", // PL | SR
    "soldVolume": 1000,
    "priceAsked": 400
  }
```

- 6 Busque um cliente pelo e-mail:

```JSON
  {
    "customerEmail": "johndoecustomer@email.com"
  }

```

- 7 Busque um produto pelo id:

```bash
    http://localhost:3000/product/c56939aa-6b85-41f8-a0aa-8f072eba7c24

```

- 8 Crie um novo vendedor:

```JSON
    {
    "sellerName": "John Doe",
    "sellerTypeLevel": "SR"
}
```

# Autor

Leonardo Longobuco

<div>
  <a href="https://www.linkedin.com/in/leonardo-longobuco-988237176/" target="_blank"
    ><img
      src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
      target="_blank"
  /></a>
  <a href="mailto:longobucoleonardo@gmail.com"
    ><img
      src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
      target="_blank"
  /></a>
 <a href="https://app.rocketseat.com.br/me/leonardo-martins"
    ><img
      src="https://img.shields.io/badge/-ROCKETSEAT-blueviolet?style=for-the-badge"
      target="_blank"
  /></a>
</div>
