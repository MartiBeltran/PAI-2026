let diasemana = (prompt("Escull: l-Dilluns. m-Dimarts, x-Dimecres, j-Dijous, v-Divendres, s-Dissabte, d-Domingo"))

switch (diasemana) {
    case "l":
    case "m":
    case "x":
    case "j":
    case "v":
        console.log("Aquest dia és laborable.");
        break;
    case "s":
    case "d":
        console.log("Aquest dia no és laborable.");
        break;
    
}
