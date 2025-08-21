const readline = require('readline-sync');

let nomeCompleto = readline.question('Digite seu nome completo:')
console.log("Nome Maiúsculo: ", nomeMaiusculo(nomeCompleto));
console.log("Nome Minúsculo: ", nomeMinusculo(nomeCompleto));
console.log("Quantidade de Caracteres: ", quantidadeDeCaracteres(nomeCompleto));
console.log("Primeiro nome: ", nomesSeparados(nomeCompleto).primeiroNome);
console.log("Último nome: ", nomesSeparados(nomeCompleto).ultimoNome);

function nomeMaiusculo(nomeCompleto){
    const maiusculo = nomeCompleto.toUpperCase();
    return maiusculo;
}
function nomeMinusculo(nomeCompleto){
    const minusculo = nomeCompleto.toLowerCase();
    return minusculo;
}
function quantidadeDeCaracteres(nomeCompleto){
    const nomeSemEspacos = nomeCompleto.replace(/ /g, '');
    const quantidadeDeCaracteres = nomeSemEspacos.length;
    return quantidadeDeCaracteres;
}
function nomesSeparados(nomeCompleto){
    const nomes = nomeCompleto.split(/ /g);
    const primeiroNome = nomes[0];
    const ultimoNome = nomes[nomes.length - 1];
    return{
        primeiroNome,
        ultimoNome
    };
}