const prompt = require('prompt-sync')();
const { cadastrarProduto, listarProdutos, buscarPorNome, totalEmEstoque } = require('./functions/index');
const produtos = require('./data/produtos').produtos;

function mostrarMenu() {
    console.log('=== Sistema de Registro de Produtos ===');
    console.log('1. Cadastrar Produto');
    console.log('2. Listar Produtos');
    console.log('3. Buscar Produto por Nome');
    console.log('4. Total em Estoque');
    console.log('5. Sair');
}

function iniciarSistema() {
    let opcao;
    do {
        mostrarMenu();
        opcao = prompt('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                cadastrarProduto(produtos);
                break;
            case '2':
                listarProdutos(produtos);
                break;
            case '3':
                const nome = prompt('Digite o nome do produto: ');
                buscarPorNome(produtos, nome);
                break;
            case '4':
                totalEmEstoque(produtos);
                break;
            case '5':
                console.log('Saindo do sistema...');
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
        }
    } while (opcao !== '5');
}

iniciarSistema();