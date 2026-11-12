const N = Number(prompt("Introdueix un nombre N:"));

let suma = 0;
for (let i = 1; i <= N; i++) {
    suma += i;
}

console.log("La suma dels nombres de 1 a " + N + " és " + suma);