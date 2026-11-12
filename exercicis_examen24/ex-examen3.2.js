const N = parseInt(prompt("Escolleix numero: "));
let suma = 0;

for (let i = 0; i <= N; i++) {
    suma += i
}
console.log("La suma de tots els numeros escollits és: " + (suma))