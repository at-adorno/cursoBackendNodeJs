function ehEntradaValida(input) {
    return !!(input && input.trim() !== '');
}

function validarDadosProduto(produto) {
    const { nome, preco, quantidade } = produto;
    if (!ehEntradaValida(nome)) {
        return 'O nome do produto é obrigatório.';
    }
    if (isNaN(preco) || preco <= 0) {
        return 'O preço do produto deve ser um número positivo.';
    }
    if (!Number.isInteger(quantidade) || quantidade < 0) {
        return 'A quantidade do produto deve ser um número inteiro não negativo.';
    }
    return null; // No errors
}

function tratarErro(erro) {
    console.error('Erro:', erro);
}

module.exports = {
    ehEntradaValida,
    validarDadosProduto,
    tratarErro
};