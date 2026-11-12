// 14.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.

let numero = Number(prompt("Escull un numero: "))

if (numero % 2 === 0) {
    console.log("El numero es parell.");
}
else {
    console.log("El numero és senar.")
}
