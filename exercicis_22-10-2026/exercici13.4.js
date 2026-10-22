// 13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més gran que el segon i l’altre per comprovar si el segon número és més gran que el primer

let numero = Number(prompt("Escull un numero: "));
let numero2 = Number(prompt("Escull unaltre nunmero: "));

if (numero > numero2) {
    console.log(numero);
}

if (numero < numero2) {
    console.log(numero2);
}