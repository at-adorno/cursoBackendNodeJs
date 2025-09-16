const captura = require("prompt-sync")();
let n1: number = Number(captura("Nota 1: "));
let n2: number = Number(captura("Nota 2: "));
console.log("Média:", (n1 + n2) / 2);