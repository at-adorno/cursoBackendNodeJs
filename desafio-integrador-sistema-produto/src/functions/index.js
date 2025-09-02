const { validateProductData, handleError } = require('../utils/decision');

function cadastrarProduto(produtos) {
    const prompt = require('prompt-sync')();
    const nome = prompt('Nome do produto: ').trim();
    const preco = Number(prompt('Preço do produto: ').replace(',', '.'));
    const quantidade = Number(prompt('Quantidade: '));

    const erro = validateProductData({ nome, preco, quantidade });
    if (erro) {
        handleError(erro);
        return;
    }

    // Verifica duplicidade
    const existe = produtos.some(p => p.nome.toLowerCase() === nome.toLowerCase());
    if (existe) {
        handleError('Já existe produto com esse nome.');
        return;
    }

    produtos.push({ nome, preco, quantidade });
    console.log(`Produto ${nome} cadastrado com sucesso!`);
}

function listarProdutos(produtos) {
    if (produtos.length === 0) {
        console.log('Nenhum produto cadastrado.');
        return;
    }
    console.log('Produtos cadastrados:');
    console.table(produtos.map(p => ({
        Nome: p.nome,
        Preço: p.preco.toFixed(2),
        Quantidade: p.quantidade,
        Subtotal: (p.preco * p.quantidade).toFixed(2)
    })));
}

function buscarPorNome(produtos, nomeBusca) {
    const achados = produtos.filter(p =>
        p.nome.toLowerCase().includes(nomeBusca.trim().toLowerCase())
    );
    if (achados.length === 0) {
        console.log('Nenhum produto encontrado com esse nome.');
        return;
    }
    console.log('Resultados da busca:');
    console.table(achados.map(p => ({
        Nome: p.nome,
        Preço: p.preco.toFixed(2),
        Quantidade: p.quantidade,
        Subtotal: (p.preco * p.quantidade).toFixed(2)
    })));
}

function totalEmEstoque(produtos) {
    const total = produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0);
    console.log(`Valor total em estoque: R$ ${total.toFixed(2)}`);
}

module.exports = {
    cadastrarProduto,
    listarProdutos,
    buscarPorNome,
    totalEmEstoque
};