import console = require("console");

//declarando as interfaces e tipos
interface Livro {
    titulo: string;
    autor: string;
    emprestado: boolean;
    dataEmprestimo?: Date | null;
    dataDevolucao?: Date | null;
}

const acervoLivros: Livro[] = [];

// Funções para gerenciar o sistema de biblioteca
function cadastrarLivro(livro: Livro): void {
    acervoLivros.push(livro);
    if (livro.titulo === "" || livro.autor === "") {
        console.log('Título e autor são obrigatórios para cadastrar um livro.');
        return;
    }
    if (acervoLivros.some(l => l.titulo === livro.titulo && l.autor === livro.autor)) {
        console.log(`Livro com título "${livro.titulo}" por "${livro.autor}" já está cadastrado.`);
        return;
    }
    console.log(`Livro cadastrado: ${livro.titulo} por ${livro.autor}.`);
}

function emprestarLivro(titulo: string): void {
    const livro = acervoLivros.find(l => l.titulo === titulo);
    if (livro && !livro.emprestado) {
        livro.emprestado = true;
        livro.dataEmprestimo = new Date();
        console.log(`Livro emprestado: ${titulo} por ${livro.autor} em ${livro.dataEmprestimo.toLocaleDateString('pt-BR')}.`);
    } else {
        console.log(`Livro não disponível para empréstimo: ${titulo} por ${livro.autor}`);
    }
}

function devolverLivro(titulo: string): void {
    const livro = acervoLivros.find(l => l.titulo === titulo);
    if (livro && livro.emprestado) {
        livro.emprestado = false;
        livro.dataDevolucao = new Date();
        console.log(`Livro devolvido: ${titulo}`);
    } else {
        console.log(`Livro não encontrado ou não está emprestado: ${titulo}`);
    }
}

listarDisponiveis() → mostra apenas não emprestados

