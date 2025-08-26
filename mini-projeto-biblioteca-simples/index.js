const prompt = require('prompt-sync')();
const biblioteca = [];

// Função para exibir o menu
function exibirMenu() {
    console.log("=== Biblioteca Simples ===");
    console.log("1. Adicionar Livro");
    console.log("2. Listar Livros");
    console.log("3. Buscar Livro por Título");
    console.log("4. Sair");
    const opcao = prompt("Escolha uma opção: ");
    return opcao;
}

// Função para adicionar livro
function adicionarLivro() {
    const titulo = prompt("Digite o título do livro: ");
    if (!titulo) {
        console.log("Título inválido. Tente novamente.");
        return;
    }
    const autor = prompt("Digite o autor do livro: ");
    if (!autor) {
        console.log("Autor inválido. Tente novamente.");
        return;
    }
    biblioteca.push({ titulo, autor });
    console.log("Livro adicionado com sucesso!");
}

// Função para listar todos os livros
function listarLivros() {
    console.log("=== Lista de Livros ===");
    if (biblioteca.length === 0) {
        console.log("Nenhum livro cadastrado.");
    } else {
        biblioteca.forEach((livro, index) => {
            console.log(`${index + 1}. ${livro.titulo} - Autor: ${livro.autor}`);
        });
    }
}

// Função para buscar livro por título
function buscarLivroPorTitulo() {
    const busca = prompt("Digite o título para buscar: ").toLowerCase();
    const encontrados = biblioteca.filter(livro =>
        livro.titulo.toLowerCase().includes(busca)
    );
    if (encontrados.length === 0) {
        console.log("Nenhum livro encontrado.");
    } else {
        console.log("=== Livros Encontrados ===");
        encontrados.forEach((livro, index) => {
            console.log(`${index + 1}. ${livro.titulo} - Autor: ${livro.autor}`);
        });
    }
}

// Loop principal
while (true) {
    const opcao = exibirMenu();
    switch (opcao) {
        case '1':
            adicionarLivro();
            break;
        case '2':
            listarLivros();
            break;
        case '3':
            buscarLivroPorTitulo();
            break;
        case '4':
            console.log("Saindo da biblioteca...");
            process.exit(0);
        default:
            console.log("Opção inválida. Tente novamente.");
    }
};