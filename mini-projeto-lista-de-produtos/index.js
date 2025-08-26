const prompt = require('prompt-sync')();
const listaDeProdutos = [];

// Função para exibir o menu
function exibirMenu() {
    console.log("=== Lista de Produtos ===");
    console.log("1. Cadastrar Produto");
    console.log("2. Exibir Produtos");
    console.log("3. Calcular Valor Total em Estoque");
    console.log("4. Sair");
    const opcao = prompt("Escolha uma opção: ");
    return opcao;
}

// Função para cadastrar um produto
function cadastrarProduto() {
    const nome = prompt("Digite o nome do produto: ");
    if (!nome) {
        console.log("Nome inválido. Tente novamente.");
        return;
    }
    const preco = parseFloat(prompt("Digite o preço do produto: "));
    if (isNaN(preco) || preco < 0) {
        console.log("Preço inválido. Tente novamente.");
        return;
    }
    const quantidade = parseInt(prompt("Digite a quantidade em estoque: "));
    if (isNaN(quantidade) || quantidade < 0) {
        console.log("Quantidade inválida. Tente novamente.");
        return;
    }
    const produto = { nome, preco, quantidade };
    listaDeProdutos.push(produto);
    console.log("Produto cadastrado com sucesso!");
}

// Função para exibir produtos
function exibirProdutos() {
    console.log("=== Produtos Cadastrados ===");
    listaDeProdutos.forEach((produto, index) => {
        console.log(`${index + 1}. ${produto.nome} - Preço: R$${produto.preco.toFixed(2)} - Quantidade: ${produto.quantidade}`);
    });
}

// Função para calcular valor total em estoque
function calcularValorTotal() {
    let total = 0;
    listaDeProdutos.forEach(produto => {
        total += produto.preco * produto.quantidade;
    });
    console.log(`Valor total em estoque: R$${total.toFixed(2)}`);
}

// Loop principal
while (true) {
    const opcao = exibirMenu();
    switch (opcao) {
        case '1':
            cadastrarProduto();
            break;
        case '2':
            exibirProdutos();
            break;
        case '3':
            calcularValorTotal();
            break;
        case '4':
            console.log("Saindo do programa...");
            process.exit(0);
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}