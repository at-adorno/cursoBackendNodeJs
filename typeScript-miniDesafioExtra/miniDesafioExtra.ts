const prompt = require("prompt-sync")();

let valorEmReais: number = Number(prompt("Valor em Reais (R$): "));
let cotacaoDoDolar: number = Number(prompt("Cotação atual do Dólar (US$): "));
let valorEmDolares: number = valorEmReais / cotacaoDoDolar;

console.log(`Valor em Dólares: US$ ${valorEmDolares.toFixed(2)}`);