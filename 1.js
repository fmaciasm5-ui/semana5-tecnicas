const prompt = require("prompt-sync")();
let valor = parseInt(prompt("Ingrese un valor numerico: "));
let arrValor = []

for (let i = 0; i < valor; i++){
    arrValor[i] = parseInt(prompt("Ingrese un numero: "))
}
console.log(valor);