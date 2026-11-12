//21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i
//emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la
//multiplicació i la divisió dels dos valors introduïts.

let numero1 = parseInt(prompt("Escolleix un numero: "));
let numero2 = parseInt(prompt("Escolleix unaltre numero: "));

let taula = [];

taula[0] = numero1 + numero2;
taula[1] = numero1 - numero2;
taula[2] = numero1 * numero2;
taula[3] = numero1 / numero2;

console.log(taula);