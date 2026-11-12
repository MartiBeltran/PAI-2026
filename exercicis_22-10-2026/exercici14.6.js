//14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona
// pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el
// valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir
// si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25

let carnet = prompt("Tens carnet de conduir? (si/no): ");
let alcohol = Number(prompt("Quin valor ha donat la prova d’alcoholèmia?: "));

if (carnet === "si" && alcohol < 0.25) {
    console.log("Pots conduir.");
}
else {
    console.log("No pots conduir.");    
}