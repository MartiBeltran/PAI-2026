//21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir
//prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la
//taula a la consola

let numero = parseInt(prompt("Introdueix un número:"));

let taula = [];
taula[0] = numero * 2;
taula[1] = numero * 3;

console.log(taula);

