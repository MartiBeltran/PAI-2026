// 13.5.- Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola
// el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels
// números és el més gran.

let numero1 = Number(prompt("Escull el primer numero: "));
let numero2 = Number(prompt("Escull el segon numero: "));
let numero3 = Number(prompt("Escull el tercer numero: "));

if (numero1 > numero2 && numero1 > numero3) {
    console.log(numero1);
}

if (numero2 > numero1 && numero2 > numero3) {
    console.log(numero2);
}

if (numero3 > numero1 && numero3 > numero2) {
    console.log(numero3);
}

