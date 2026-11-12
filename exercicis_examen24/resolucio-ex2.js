const codiVehicle = prompt("Introdueix el codi del vehicle (M, C, F):");
const hores = parseInt(prompt("Introdueix el nombre d'hores estacionades:"));
let preuPerHora;

// Opció amb switch-case

switch (codiVehicle) {
    case "M":
        preuPerHora = 1;
        break;
    case "C":
        preuPerHora = 2;
        break;
    case "F":
        preuPerHora = 3;
        break;
    default:
        console.log("Tipus de vehicle no vàlid");
}

// Opció amb if-else

if (codiVehicle === "M") {
    preuPerHora = 1;
} else if (codiVehicle === "C") {
    preuPerHora = 2;
} else if (codiVehicle === "F") {
    preuPerHora = 3;
} else {
    console.log("Tipus de vehicle no vàlid");
}

// Càlcul del preu total si el codi és vàlid

if (preuPerHora !== undefined) {
    const preuTotal = preuPerHora * hores;
    console.log("Preu total: " + preuTotal + " €");
}