const {
    isValidInput,
    validateProductData,
    handleError
} = require('./decision');

describe('decision.js utils', () => {
    describe('isValidInput', () => {
        it('retorna true para string não vazia', () => {
            expect(isValidInput('produto')).toBe(true);
        });
        it('retorna false para string vazia', () => {
            expect(isValidInput('')).toBe(false);
        });
        it('retorna false para string com apenas espaços', () => {
            expect(isValidInput('   ')).toBe(false);
        });
        it('retorna false para undefined', () => {
            expect(isValidInput(undefined)).toBe(false);
        });
        it('retorna false para null', () => {
            expect(isValidInput(null)).toBe(false);
        });
    });

    describe('validateProductData', () => {
        it('retorna erro se nome for vazio', () => {
            const product = { nome: '', preco: 10, quantidade: 1 };
            expect(validateProductData(product)).toBe('Product name is required.');
        });
        it('retorna erro se preco for NaN', () => {
            const product = { nome: 'Caneta', preco: NaN, quantidade: 1 };
            expect(validateProductData(product)).toBe('Product price must be a positive number.');
        });
        it('retorna erro se preco for zero ou negativo', () => {
            const product = { nome: 'Caneta', preco: 0, quantidade: 1 };
            expect(validateProductData(product)).toBe('Product price must be a positive number.');
        });
        it('retorna erro se quantidade não for inteiro', () => {
            const product = { nome: 'Caneta', preco: 10, quantidade: 1.5 };
            expect(validateProductData(product)).toBe('Product quantity must be a non-negative integer.');
        });
        it('retorna erro se quantidade for negativo', () => {
            const product = { nome: 'Caneta', preco: 10, quantidade: -1 };
            expect(validateProductData(product)).toBe('Product quantity must be a non-negative integer.');
        });
        it('retorna null para dados válidos', () => {
            const product = { nome: 'Caneta', preco: 10, quantidade: 1 };
            expect(validateProductData(product)).toBeNull();
        });
    });

    describe('handleError', () => {
        it('chama console.error com mensagem', () => {
            const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
            handleError('Erro de teste');
            expect(spy).toHaveBeenCalledWith('Error:', 'Erro de teste');
            spy.mockRestore();
        });
    });
});