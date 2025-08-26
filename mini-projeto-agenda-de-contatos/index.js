const prompt = require('prompt-sync')();
const agendaDeContatos = [];

// Função para exibir o menu
function exibirMenu() {
    console.log("=== Agenda de Contatos ===");
    console.log("1. Adicionar Contato");
    console.log("2. Listar Contatos");
    console.log("3. Buscar Contato por Nome");
    console.log("4. Sair");
    const opcao = prompt("Escolha uma opção: ");
    return opcao;
}

// Função para adicionar contato
function adicionarContato() {
    const nome = prompt("Digite o nome do contato: ");
    if (!nome) {
        console.log("Nome inválido. Tente novamente.");
        return;
    }
    const telefone = prompt("Digite o telefone do contato: ");
    if (!telefone) {
        console.log("Telefone inválido. Tente novamente.");
        return;
    }
    agendaDeContatos.push({ nome, telefone });
    console.log("Contato adicionado com sucesso!");
}

// Função para listar todos os contatos
function listarContatos() {
    console.log("=== Lista de Contatos ===");
    agendaDeContatos.forEach((contato, index) => {
        console.log(`${index + 1}. ${contato.nome} - Telefone: ${contato.telefone}`);
    });
}

// Função para buscar contato por nome
function buscarContatoPorNome() {
    const busca = prompt("Digite o nome para buscar: ").toLowerCase();
    const encontrados = agendaDeContatos.filter(contato =>
        contato.nome.toLowerCase().includes(busca)
    );
    if (encontrados.length === 0) {
        console.log("Nenhum contato encontrado.");
    } else {
        console.log("=== Contatos Encontrados ===");
        encontrados.forEach((contato, index) => {
            console.log(`${index + 1}. ${contato.nome} - Telefone: ${contato.telefone}`);
        });
    }
}

// Loop principal
while (true) {
    const opcao = exibirMenu();
    switch (opcao) {
        case '1':
            adicionarContato();
            break;
        case '2':
            listarContatos();
            break;
        case '3':
            buscarContatoPorNome();
            break;
        case '4':
            console.log("Saindo da agenda...");
            process.exit(0);
        default:
            console.log("Opção inválida. Tente novamente.");
    }
};