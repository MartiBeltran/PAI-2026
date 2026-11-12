//2.- (2 punts) Escriu un programa que, donat un número entre 1 i 7, escrigui a la consola el dia de la setmana corresponent (1 = dilluns, 2 = dimarts, etc.). Utilitza switch.
let numero = Number(prompt("Escull un numero entre 1-7: "));
let text;
switch (numero) {
    case 1:
        text = "Dilluns";
        break;
    case 2:
        text = "Dimarts";
        break;
    case 3:
        text = "Dimecres";
        break;
    case 4:
        text = "Dijous";
        break;
    case 5:
        text = "Divendres";
        break;
    case 6:
        text = "dissabte";
        break;
    case 7:
        text = "diumenge";
        break;
}
console.log(text);
