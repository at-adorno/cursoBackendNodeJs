# Sistema de Cadastro de Produtos

Este é um aplicativo de console simples para gerenciar o cadastro de produtos. Permite ao usuário cadastrar produtos, listar todos os produtos cadastrados, buscar produtos pelo nome e calcular o valor total dos produtos em estoque.

## Funcionalidades

- Cadastrar novos produtos com nome, preço e quantidade.
- Listar todos os produtos cadastrados em uma tabela formatada.
- Buscar produtos pelo nome (sem diferenciar maiúsculas de minúsculas).
- Calcular o valor total de todos os produtos em estoque.
- Testes automatizados com Jest para garantir a qualidade do código.

## Primeiros Passos

### Pré-requisitos

- Node.js instalado em sua máquina.

### Instalação

1. Clone o repositório:
   ```
   git clone <url-do-repositorio>
   ```
2. Acesse o diretório do projeto:
   ```
   cd desafio-integrador-sistema-produto
   ```
3. Instale as dependências:
   ```
   npm install
   ```

### Executando a Aplicação

Para iniciar a aplicação, execute o seguinte comando:
```
npm start
```
Ou diretamente:
```
node src/app.js
```

### Executando os Testes

Para rodar os testes automatizados e verificar a cobertura:
```
npm test
```
Para visualizar o relatório de cobertura:
```
npm test -- --coverage
```

### Exemplo de Execução

Ao rodar a aplicação, você verá um menu com opções para cadastrar um produto, listar produtos, buscar por produto ou calcular o valor total em estoque. Siga as instruções exibidas para interagir com o sistema.

## Estrutura do Projeto

```
src/
  app.js
  data/
    produtos.js
  functions/
    index.js
    index.test.js
  utils/
    decision.js
    decision.test.js
```

## Contribuindo

Sinta-se à vontade para enviar issues ou pull requests com melhorias ou correções de bugs.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para