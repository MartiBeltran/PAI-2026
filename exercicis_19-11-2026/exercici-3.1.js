//Exercici 3.1
// Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció. 

function parellOImparell(numero) {
    if (numero % 2 === 0) {
        return "El número és parell";
    } else {
        return "El número és imparell";
    }
}

let resultat = parellOImparell(parseInt(prompt("Introdueix un nombre enter:")));
console.log(resultat);
