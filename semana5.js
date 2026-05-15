let x = 'Pedro';
console.log("Inicio del recorrido")
//inicializador/hasta cuando/como sera el recorrido
for (let i = 0; i < 5; i++){
    console.log(x[i]);
}
console.log("Fin del recorrido");


let y = ["Ana", "Pedro"];
console.log("Inicio del recorrido")
for (let i = 0; i < 2; i++){
    console.log(y[i]);
}
console.log("Fin del recorrido");


let numeros = [1,2,3,4,5,6,7,8,9,10];
let nuevo_espacio = [];

for (let i = 0; i < 10; i++){
    console.log(numeros[i]);
    if (numeros[i] % 2 == 0){
        console.log(numeros[i]);
        nuevo_espacio.push(numeros[i]);
    }
}
console.log(nuevo_espacio);

//Defina un array con 5 nombres y de esos, filtre los nombres menores 4 caracteres
let nombres = ["Alan", "Fabricio", "Ivan", "Javier", "Andy"];
let nombre_fil = [];

for (let i = 0; i < nombres.length; i++){
    if(nombres[i].length <= 4){
        console.log(nombres[i]);
        nombre_fil.push(nombres[i]);
    }
}
console.log(nombre_fil);

let i = 0;
while (i < x.length) {
    console.log(x[i]);
    i++
} 

let numero = [1,2,3,4,5,6,7,8,9,10];
let nuevo_espacio2 = [];
let c = 0;
while (c < 10){
    if (numero[c] % 2 == 0){
        console.log(numero[c]);
        nuevo_espacio2.push(numero[c]);
    }
    c++
}
console.log(nuevo_espacio2);