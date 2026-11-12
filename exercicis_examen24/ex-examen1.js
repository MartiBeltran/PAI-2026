// 1.- (2 punts) Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge "El número és positiu" si el número és més gran que zero, "El número és negatiu" si és més petit que zero, o "El número és zero" si és igual a zero. Utilitza if-else.
let numero = Number(prompt("Escull un numero: "));

if (numero > 0) {
    console.log("El numero es positiu.");
} 
else if (numero < 0) {
    console.log("El numero es negatiu.");
} 
else {
    console.log("El numero és igual a 0.");
}
