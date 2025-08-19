/*
O Desafio:
Crie um programa que faça o seguinte:
Pergunte ao usuário o nome completo.
Mostre o nome completo em maiúsculas e minúsculas.
Mostre quantos caracteres o nome completo tem (descontando os espaços em branco).
Mostre o primeiro nome e o último nome separadamente.
*/

let nomeCompleto = prompt("Digite seu nome completo:");
console.log("Nome completo em maiúsculas:", nomeCompleto.toUpperCase());
console.log("Nome completo em minúsculas:", nomeCompleto.toLowerCase());
console.log("Quantidade de caracteres (sem espaços):", nomeCompleto.replace(/\s/g, "").length);
let nomes = nomeCompleto.split(" ");
console.log("Primeiro nome:", nomes[0]);
console.log("Último nome:", nomes[nomes.length - 1]);