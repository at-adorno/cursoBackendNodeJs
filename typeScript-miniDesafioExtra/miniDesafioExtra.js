var prompt = require("prompt-sync")();
var valorEmReais = Number(prompt("Valor em Reais (R$): "));
var cotacaoDoDolar = Number(prompt("Cotação atual do Dólar (US$): "));
var valorEmDolares = valorEmReais / cotacaoDoDolar;
console.log("Valor em D\u00F3lares: US$ ".concat(valorEmDolares.toFixed(2)));
