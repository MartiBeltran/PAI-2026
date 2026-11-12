//21.8.- Fes un programa que escrigui a la consola la suma tots els valors
//emmagatzemats a la taula.

let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];

let suma = 0

for (let i = 0 ; i < taula.length ; i++) {
    suma += taula[i];
}
console.log(suma);