// Script para perguntar o nome do usuário e exibir uma saudação personalizada
const userName = prompt("Qual é o seu nome?");
if (userName) {
    document.body.innerHTML += `<h1>Olá, ${userName}!</h1>`;
} else {
    document.body.innerHTML += "<h1>Olá, Mundo!</h1>";
}