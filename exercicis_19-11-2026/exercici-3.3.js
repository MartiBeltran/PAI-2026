//Feu un script que inclogui una funció que, donat un enter N, retorni ∑ (1 / n2 ) per a 0 < n ≤ N.

function calcularSuma(N) {
    let suma = 0;

    for (let n = 1; n <= N; n++) {
        suma += 1 / (n * n);
    }

    return suma;
}

let resultat = calcularSuma(parseInt(prompt("Introdueix un nombre enter N:")));
console.log(resultat);







    
        