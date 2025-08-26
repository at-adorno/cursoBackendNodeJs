const readline = require('readline-sync');
let listaCompras = [];
let acao = 0

while (acao !== 4) {
  acao = readline.question("Digite 1 para adicionar um item, 2 para remover um item, 3 para listar os itens, ou 4 para encerrar: ").toLowerCase();

  switch (acao) {
    case '1':
    case 'adicionar':
      let itemAdicionar = readline.question("Digite um item para ser adicionado a lista de compras:");
      adicionarItem(itemAdicionar);
      break;
    case '2':
    case 'remover':
      let itemRemover = readline.question("Digite um item para ser removido da lista de compras:");
      removerItem(itemRemover);
      break;
    case '3':
    case 'listar':
      listarItens();
      break;
    case '4':
    case 'sair':
      console.log("Saindo...");
      acao = 4; // Define a ação para encerrar o loop
      break;
    default:
      console.log("Ação inválida. Tente novamente.");
  }
}

// Função para adicionar item à lista
function adicionarItem(item) {
  listaCompras.push(item);
  console.log(`Item adicionado: ${item}`);
}

// Função para remover item da lista
function removerItem(item) {
  const index = listaCompras.indexOf(item);
  if (index !== -1) {
    listaCompras.splice(index, 1);
    console.log(`Item removido: ${item}`);
  } else {
    console.log(`Item não encontrado: ${item}`);
  }
}

// Função para listar todos os itens
function listarItens() {
  console.log("Lista de Compras:");
  listaCompras.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}
