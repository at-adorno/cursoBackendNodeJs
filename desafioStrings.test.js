const {
  nomeMaiusculo,
  nomeMinusculo,
  quantidadeDeCaracteres,
  nomesSeparados
} = require('./desafioStrings');

describe('Funções de manipulação de strings', () => {
  describe('nomeMaiusculo', () => {
    test('deve retornar o nome em maiúsculo', () => {
      expect(nomeMaiusculo('João Silva')).toBe('JOÃO SILVA');
    });
    test('deve lidar com string vazia', () => {
      expect(nomeMaiusculo('')).toBe('');
    });
  });

  describe('nomeMinusculo', () => {
    test('deve retornar o nome em minúsculo', () => {
      expect(nomeMinusculo('João Silva')).toBe('joão silva');
    });
    test('deve lidar com string vazia', () => {
      expect(nomeMinusculo('')).toBe('');
    });
  });

  describe('quantidadeDeCaracteres', () => {
    test('deve retornar o número de caracteres sem espaços', () => {
      expect(quantidadeDeCaracteres('João Silva')).toBe(9);
      expect(quantidadeDeCaracteres('Maria de Souza')).toBe(12);
    });
    test('deve retornar 0 para string vazia', () => {
      expect(quantidadeDeCaracteres('')).toBe(0);
    });
    test('deve ignorar múltiplos espaços', () => {
      expect(quantidadeDeCaracteres('Ana   Paula')).toBe(8);
    });
  });

  describe('nomesSeparados', () => {
    test('deve retornar o primeiro e último nome corretamente', () => {
      expect(nomesSeparados('João Silva')).toEqual({ primeiroNome: 'João', ultimoNome: 'Silva' });
      expect(nomesSeparados('Maria de Souza')).toEqual({ primeiroNome: 'Maria', ultimoNome: 'Souza' });
    });
    test('deve lidar com apenas um nome', () => {
      expect(nomesSeparados('Carlos')).toEqual({ primeiroNome: 'Carlos', ultimoNome: 'Carlos' });
    });
    test('deve lidar com string vazia', () => {
      expect(nomesSeparados('')).toEqual({ primeiroNome: '', ultimoNome: '' });
    });
    test('deve ignorar espaços extras no início e fim', () => {
      expect(nomesSeparados('  Ana Paula  ')).toEqual({ primeiroNome: '', ultimoNome: '' });
    });
  });
});