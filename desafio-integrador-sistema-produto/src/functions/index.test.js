let cadastrarProduto, listarProdutos, buscarPorNome, totalEmEstoque;

describe('Funções de produto', () => {
    let produtos;
    let consoleSpy;

    beforeEach(() => {
        produtos = [];
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.spyOn(console, 'table').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
        jest.resetModules();
    });

    describe('cadastrarProduto', () => {
        it('cadastra produto válido', () => {
            jest.resetModules();
            jest.doMock('prompt-sync', () => () => jest.fn()
                .mockReturnValueOnce('Caneta Azul')
                .mockReturnValueOnce('2.5')
                .mockReturnValueOnce('10'));
            ({ cadastrarProduto } = require('./index'));

            cadastrarProduto(produtos);
            expect(produtos.length).toBe(1);
            expect(produtos[0]).toEqual({ nome: 'Caneta Azul', preco: 2.5, quantidade: 10 });
        });

        it('não cadastra produto com nome vazio', () => {
            jest.resetModules();
            jest.doMock('prompt-sync', () => () => jest.fn()
                .mockReturnValueOnce('   ')
                .mockReturnValueOnce('2.5')
                .mockReturnValueOnce('10'));
            ({ cadastrarProduto } = require('./index'));

            cadastrarProduto(produtos);
            expect(produtos.length).toBe(0);
        });

        it('não cadastra produto duplicado', () => {
            produtos.push({ nome: 'Caneta Azul', preco: 2.5, quantidade: 10 });
            jest.resetModules();
            jest.doMock('prompt-sync', () => () => jest.fn()
                .mockReturnValueOnce('Caneta Azul')
                .mockReturnValueOnce('2.5')
                .mockReturnValueOnce('10'));
            ({ cadastrarProduto } = require('./index'));

            cadastrarProduto(produtos);
            expect(produtos.length).toBe(1);
        });
    });

    beforeAll(() => {
        ({ listarProdutos, buscarPorNome, totalEmEstoque } = require('./index'));
    });

    describe('listarProdutos', () => {
        it('lista produtos cadastrados', () => {
            produtos.push({ nome: 'Caneta', preco: 2.5, quantidade: 10 });
            listarProdutos(produtos);
            expect(consoleSpy).toHaveBeenCalledWith('Produtos cadastrados:');
            expect(console.table).toHaveBeenCalled();
        });

        it('avisa quando não há produtos', () => {
            listarProdutos(produtos);
            expect(consoleSpy).toHaveBeenCalledWith('Nenhum produto cadastrado.');
        });
    });

    describe('buscarPorNome', () => {
        it('encontra produto por nome', () => {
            produtos.push({ nome: 'Caneta Azul', preco: 2.5, quantidade: 10 });
            buscarPorNome(produtos, 'azul');
            expect(consoleSpy).toHaveBeenCalledWith('Resultados da busca:');
            expect(console.table).toHaveBeenCalled();
        });

        it('avisa quando não encontra produto', () => {
            produtos.push({ nome: 'Caneta Azul', preco: 2.5, quantidade: 10 });
            buscarPorNome(produtos, 'vermelha');
            expect(consoleSpy).toHaveBeenCalledWith('Nenhum produto encontrado com esse nome.');
        });
    });

    describe('totalEmEstoque', () => {
        it('calcula valor total corretamente', () => {
            produtos.push({ nome: 'Caneta', preco: 2.5, quantidade: 10 });
            produtos.push({ nome: 'Lápis', preco: 1.5, quantidade: 20 });
            totalEmEstoque(produtos);
            expect(consoleSpy).toHaveBeenCalledWith('Valor total em estoque: R$ 55.00');
        });

        it('valor total é zero se não há produtos', () => {
            totalEmEstoque(produtos);
            expect(consoleSpy).toHaveBeenCalledWith('Valor total em estoque: R$ 0.00');
        });
    });
});