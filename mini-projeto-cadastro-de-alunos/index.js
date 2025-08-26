// mini-projeto-cadastro-de-alunos/index.js
const prompt = require('prompt-sync')();
const cadastroDeAlunos = [];

//função para exibir o menu
function exibirMenu() {
    console.log("=== Cadastro de Alunos ===");
    console.log("1. Cadastrar Aluno");
    console.log("2. Listar Alunos");
    console.log("3. Resultado Final");
    console.log("4. Sair");
    const opcao = prompt("Escolha uma opção: ");
    return opcao;
}

//função para cadastrar um aluno
function cadastrarAluno() {
    //validação simples de entrada de dados
    const nome = prompt("Digite o nome do aluno: ");
    if (!nome) {
        console.log("Nome inválido. Tente novamente.");
        return;
    }
    const nota1 = parseFloat(prompt("Digite a primeira nota (entre 0 e 10): "));
    if (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
        console.log("Nota inválida. Tente novamente.");
        return;
    }
    const nota2 = parseFloat(prompt("Digite a segunda nota (entre 0 e 10): "));
    if (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
        console.log("Nota inválida. Tente novamente.");
        return;
    }
    const aluno = {
        nome: nome,
        notas: [nota1, nota2],
        media: (nota1 + nota2) / 2
    };
    cadastroDeAlunos.push(aluno);
    console.log("Aluno cadastrado com sucesso!");
}

//função para listar os alunos
function listarAlunos() {
    console.log("=== Lista de Alunos ===");
    cadastroDeAlunos.forEach((aluno, index) => {
        console.log(`${index + 1}. ${aluno.nome} - Primeira nota: ${aluno.notas[0]} - Segunda nota: ${aluno.notas[1]} - Média: ${aluno.media.toFixed(2)}`);
    });
}

//função para listar o resultado final
function resultadoFinal() {
    console.log("=== Resultado Final ===");
    cadastroDeAlunos.forEach((aluno) => {
        const status = aluno.media >= 7 ? "Aprovado" : "Reprovado";
        console.log(`${aluno.nome} - Média: ${aluno.media.toFixed(2)} - Status: ${status}`);
    });
}

//loop principal do programa
while (true) {
    const opcao = exibirMenu();
    switch (opcao) {
        case '1':
            cadastrarAluno();
            break;
        case '2':
            listarAlunos();
            break;
        case '3':
            resultadoFinal();
            break;
        case '4':
            console.log("Saindo do programa...");
            process.exit(0);
        default:
            console.log("Opção inválida. Tente novamente.");
    }
};