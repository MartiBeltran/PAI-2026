const tipus = prompt("Vols un conus (c) o una terrina (t)? ").trim().toLowerCase();
const sabor = prompt("Quin sabor vols? vainilla, xocolata, turró, menta, oreo, crema, gerds o ametlla.").trim().toLowerCase();

let preubase;
if (tipus === "c") {
    preubase = 3.45;
}
else if (tipus === "t") {
    preubase = 3.95;
}

else {
    preubase = null
}


let incrementpreu;
switch(sabor) {
    case "vainilla":
    case "xocolata":
        incrementpreu = 0;
        break;
    case "turró":
    case "menta":
    case "oreo":
        incrementpreu = 0.5;
        break;
    case "crema":
    case "gerds":
    case "ametlla":
        incrementpreu = 1;
        break;
    default:
        incrementpreu = null;

}

if (preubase === null || incrementpreu === null) {
    console.log("Dades mal introduides.")
}
else {
    console.log("El preu final és:" + (preubase + incrementpreu) + "€")
}