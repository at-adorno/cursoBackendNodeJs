const {
    ehEntradaValida,
    validarDadosProduto,
    tratarErro
} = require('./decisoes');

describe('decision.js utils', () => {
    describe('ehEntradaValida', () => {
        it('retorna true para string não vazia', () => {
            expect(ehEntradaValida('produto')).toBe(true);
        });
        it('retorna false para string vazia', () => {
            expect(ehEntradaValida('')).toBe(false);
        });
        it('retorna false para string com apenas espaços', () => {
            expect(ehEntradaValida('   ')).toBe(false);
        });
        it('retorna false para undefined', () => {
            expect(ehEntradaValida(undefined)).toBe(false);
        });
        it('retorna false para null', () => {
            expect(ehEntradaValida(null)).toBe(false);
        });
    });

    describe('validarDadosProduto', () => {
        it('retorna erro se nome for vazio', () => {
            const produto = { nome: '', preco: 10, quantidade: 1 };
            expect(validarDadosProduto(produto)).toBe('O nome do produto é obrigatório.');
        });
        it('retorna erro se preco for NaN', () => {
            const produto = { nome: 'Caneta', preco: NaN, quantidade: 1 };
            expect(validarDadosProduto(produto)).toBe('O preço do produto deve ser um número positivo.');
        });
        it('retorna erro se preco for zero ou negativo', () => {
            const produto = { nome: 'Caneta', preco: 0, quantidade: 1 };
            expect(validarDadosProduto(produto)).toBe('O preço do produto deve ser um número positivo.');
        });
        it('retorna erro se quantidade não for inteiro', () => {
            const produto = { nome: 'Caneta', preco: 10, quantidade: 1.5 };
            expect(validarDadosProduto(produto)).toBe('A quantidade do produto deve ser um número inteiro não negativo.');
        });
        it('retorna erro se quantidade for negativo', () => {
            const produto = { nome: 'Caneta', preco: 10, quantidade: -1 };
            expect(validarDadosProduto(produto)).toBe('A quantidade do produto deve ser um número inteiro não negativo.');
        });
        it('retorna null para dados válidos', () => {
            const produto = { nome: 'Caneta', preco: 10, quantidade: 1 };
            expect(validarDadosProduto(produto)).toBeNull();
        });
    });

     describe('tratarErro', () => {
        it('chama console.error com mensagem', () => {
            const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
            tratarErro('Erro de teste');
            expect(spy).toHaveBeenCalledWith('Erro:', 'Erro de teste');
            spy.mockRestore();
        });
    });
});