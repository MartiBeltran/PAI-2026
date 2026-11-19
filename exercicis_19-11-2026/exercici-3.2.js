//Escriu un script que comprovi si un any donat és de traspàs. Un any és de traspàs si és múltiple de 4, excloent els que siguin múltiples de 100, però no els que siguin múltiples de 400. Per exemple, l'any 1900 no va ser de traspàs, el 2000 sí i el 2100 no ho és. 

function deTraspas(any) {
    if ((any % 4 === 0 && any % 100 !== 0) || any % 400 === 0) {
        return "L'any és de traspàs";
    } else {
        return "L'any no és de traspàs";
    }
}

let resultat = deTraspas(parseInt(prompt("Introdueix un any:")));
console.log(resultat);