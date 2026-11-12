//14.5.- Escriu un programa que, donats tres números llegits amb prompt, escrigui a la
// consola els tres números ordenats.

let numero1 = Number(prompt("Introdueix el primer numero: "));
let numero2 = Number(prompt("Introdueix el segon numero: "));
let numero3 = Number(prompt("Introdueix el tercer numero: "));
let auxiliar;

if (numero1 > numero2) {
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}

if (numero2 > numero3) {
    auxiliar = numero2;
    numero2 = numero3;
    numero3 = auxiliar;
}

if (numero1 > numero2) {
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}

console.log(numero1, numero2, numero3);