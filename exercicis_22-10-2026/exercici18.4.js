let N = Number(prompt("Introdueix un nombre: "));
let esPrimer = N >= 2;

for (let divisor = 2; divisor < N; divisor++) {
    if (N % divisor === 0) {
        esPrimer = false;
        break;
    }
}

if (esPrimer) {
    console.log("El nombre és primer.");
} else {
    console.log("El nombre no és primer.");
}