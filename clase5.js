function Saludar(){ //1. Etapa: declaracion de la funcion
   return ("Mi tarea es preparar el desayuno.");
}
let resp = Saludar();
console.log(resp);
//Crear una funcion que dentro tenga dos variables, y cuando lo invoque te devuelva la suma de esas variables
function numero(){
    let x = 10;
    let y = 20;
    return x+y;
}
let respuesta = numero();
console.log(respuesta)

//Crear 3 variables, cuando la invoquemos presente una presentacion
function presentacion(){
    let edad = 18;
    let nombre = "Fabricio";
    let ciudad = "Duran";
    return `Hola me llamo ${nombre}, tengo ${edad} años, y soy de la ciudad de ${ciudad}`;
}
let presen = presentacion();
console.log(presen)

function numPar(){
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    let nuevo_espacio = [];

    for (let i = 0; i < 10; i++){
        if (numeros[i] % 2 == 0){
            nuevo_espacio.push(numeros[i]);
        }
    }
    return nuevo_espacio;
}
let num = numPar();
console.log(num)
