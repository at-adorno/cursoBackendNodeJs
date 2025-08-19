// Criando um array inicial
let frutas = ['maçã', 'banana', 'laranja'];

// Adicionando um elemento ao final do array
frutas.push('uva'); // ['maçã', 'banana', 'laranja', 'uva']

// Removendo o primeiro elemento do array
let primeiraFruta = frutas.shift(); // 'maçã', frutas agora: ['banana', 'laranja', 'uva']

// Adicionando um elemento ao início do array
frutas.unshift('melancia'); // ['melancia', 'banana', 'laranja', 'uva']

// Removendo o último elemento do array
let ultimaFruta = frutas.pop(); // 'uva', frutas agora: ['melancia', 'banana', 'laranja']

// Encontrando o índice de um elemento
let indiceBanana = frutas.indexOf('banana'); // 1

/// Usando slice para obter uma parte do array
let frutasFatiadas = frutas.slice(0, 1); // Pega do índice 0 até antes do índice 1

console.log('Frutas fatiadas:', frutasFatiadas);


// Removendo um elemento específico pelo índice
frutas.splice(indiceBanana, 1); // Remove 'banana', frutas agora: ['melancia', 'laranja']

// Iterando sobre o array
frutas.forEach((fruta, index) => {
  console.log(`Fruta ${index}: ${fruta}`);
});

// Transformando o array em uma string
let listaFrutas = frutas.join(', '); // 'melancia,

// Ordenando o array em ordem alfabética
frutas.sort(); // ['laranja', 'melancia']

console.log('Array ordenado:', frutas);

// Ordenando um array de números
let numeros = [5, 2, 9, 1, 7];
numeros.sort((a, b) => a - b); // [1, 2, 5, 7, 9]

console.log('Números ordenados:', numeros);
