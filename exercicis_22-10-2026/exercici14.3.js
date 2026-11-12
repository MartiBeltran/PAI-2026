//14.3.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// quin és el més gran. Només pots fer servir una instrucció if-else.

let numero1 = Number(prompt("Escull el primer numero: "));
let numero2 = Number(prompt("Escull el segon numero: "));

if (numero1 > numero2) {
    console.log("El numero més gran és: " + (numero1));
}

else if (numero2 > numero1) {
    console.log("El numero més gran és: " + (numero2));
}
