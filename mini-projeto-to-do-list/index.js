const prompt = require('prompt-sync')();
const listaDeTarefas = [];

// Função para exibir o menu
function exibirMenu() {
    console.log("=== Controle de Tarefas ===");
    console.log("1. Adicionar Tarefa");
    console.log("2. Marcar Tarefa como Concluída");
    console.log("3. Listar Tarefas Pendentes");
    console.log("4. Listar Tarefas Concluídas");
    console.log("5. Sair");
    const opcao = prompt("Escolha uma opção: ");
    return opcao;
}

// Função para adicionar tarefa
function adicionarTarefa() {
    const descricao = prompt("Digite a descrição da tarefa: ");
    if (!descricao) {
        console.log("Descrição inválida. Tente novamente.");
        return;
    }
    listaDeTarefas.push({ descricao, concluida: false });
    console.log("Tarefa adicionada com sucesso!");
}

// Função para marcar tarefa como concluída
function marcarComoConcluida() {
    const pendentes = listaDeTarefas.filter(tarefa => !tarefa.concluida);
    if (pendentes.length === 0) {
        console.log("Nenhuma tarefa pendente.");
        return;
    }
    console.log("=== Tarefas Pendentes ===");
    pendentes.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa.descricao}`);
    });
    const escolha = parseInt(prompt("Digite o número da tarefa para marcar como concluída: "));
    if (isNaN(escolha) || escolha < 1 || escolha > pendentes.length) {
        console.log("Opção inválida.");
        return;
    }
    const tarefaSelecionada = pendentes[escolha - 1];
    tarefaSelecionada.concluida = true;
    console.log("Tarefa marcada como concluída!");
}

// Função para listar tarefas pendentes
function listarPendentes() {
    console.log("=== Tarefas Pendentes ===");
    const pendentes = listaDeTarefas.filter(tarefa => !tarefa.concluida);
    if (pendentes.length === 0) {
        console.log("Nenhuma tarefa pendente.");
    } else {
        pendentes.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa.descricao}`);
        });
    }
}

// Função para listar tarefas concluídas
function listarConcluidas() {
    console.log("=== Tarefas Concluídas ===");
    const concluidas = listaDeTarefas.filter(tarefa => tarefa.concluida);
    if (concluidas.length === 0) {
        console.log("Nenhuma tarefa concluída.");
    } else {
        concluidas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa.descricao}`);
        });
    }
}

// Loop principal
while (true) {
    const opcao = exibirMenu();
    switch (opcao) {
        case '1':
            adicionarTarefa();
            break;
        case '2':
            marcarComoConcluida();
            break;
        case '3':
            listarPendentes();
            break;
        case '4':
            listarConcluidas();
            break;
        case '5':
            console.log("Saindo do controle de tarefas...");
            process.exit(0);
        default:
            console.log("Opção inválida. Tente novamente.");
    }
};