var captura = require("prompt-sync")();
var n1 = Number(captura("Nota 1: "));
var n2 = Number(captura("Nota 2: "));
console.log("Média:", (n1 + n2) / 2);
