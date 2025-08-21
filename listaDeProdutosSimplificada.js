//declarações
const readline = require('readline-sync');
let produtos = [];

// funcionalidades do sistema
function verificaSeExisteProduto(nome) {
    return produtos.some(produto => produto.nome === nome);
}
function adicionarProduto(nome, preco) {
    const produto = { nome, preco };
    if (verificaSeExisteProduto(nome)) {
        console.log(`Produto "${nome}" já existe na lista.`);
        return;
    }
    produtos.push(produto);
    console.log(`Produto adicionado: ${nome}, Preço: R$${preco.toFixed(2)}`);
}
function removerProduto(nome) {
    produtos = produtos.filter(produto => produto.nome !== nome);
    console.log(`Produto removido: ${nome}`);
}
function listarProdutos() {
    if (produtos.length === 0) {
        console.log("Nenhum produto na lista.");
    } else {
        console.log("Lista de Produtos:");
        produtos.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.nome} - R$${produto.preco.toFixed(2)}`);
        });
    }
}
function calcularTotal() {
    const total = produtos.reduce((acc, produto) => acc + produto.preco, 0);
    if (produtos.length === 0) {
        console.log("Nenhum produto na lista para calcular o total.");
        return;
    }
    listarProdutos();
    console.log("Total da lista de produtos: R$" + total.toFixed(2));
}

function listarProdutos() {
    if (produtos.length === 0) {
        console.log("Nenhum produto na lista.");
    } else {
        console.log("Lista de Produtos:");
        produtos.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.nome} - R$${produto.preco.toFixed(2)}`);
        });
    }
}
function calcularTotal() {
    const total = 0;
    produtos.forEach(produto => {
        total += produto.preco;
    });

    if (produtos.length === 0) {
        console.log("Nenhum produto na lista para calcular o total.");
        return;
    }
    listarProdutos();
    console.log("Total da lista de produtos: R$" + total.toFixed(2));
}

// Loop do menu
let opcao = '';
while (opcao !== '5') {
    console.log('\nMenu:');
    console.log('1 - Adicionar produto');
    console.log('2 - Remover produto');
    console.log('3 - Listar produtos');
    console.log('4 - Calcular total');
    console.log('5 - Sair');
    opcao = readline.question('Escolha uma opção: ');

    switch (opcao) {
        case '1':
            const nome = readline.question('Nome do produto: ');
            const preco = parseFloat(readline.question('Preço do produto: '));
            console.log(`Adicionando produto: ${nome}, Preço: R$${preco.toFixed(2)}`);
            if (isNaN(preco) || preco <= 0) {
                console.log('Preço inválido. Tente novamente.');
                break;
            }
            adicionarProduto(nome, preco);
            break;
        case '2':
            const nomeRemover = readline.question('Nome do produto para remover: ');
            if (!verificaSeExisteProduto(nomeRemover)) {
                console.log(`Produto "${nomeRemover}" não encontrado.`);
                break;
            }
            console.log(`Removendo produto: ${nomeRemover}`);
            removerProduto(nomeRemover);
            break;
        case '3':
            listarProdutos();
            break;
        case '4':
            calcularTotal();
            break;
        case '5':
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida.');
    }
}