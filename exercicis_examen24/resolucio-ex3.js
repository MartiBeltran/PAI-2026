let aforamentMaxim = 100;
let totalPersones = 0;
while (true) {
    const personesGrup = parseInt(prompt("Introdueix el nombre de persones del grup:"));
    if (personesGrup === 0) {
        break;
    }
    if (totalPersones + personesGrup <= aforamentMaxim) {
        totalPersones += personesGrup;
    } else {
        console.log("Aforament insuficient");
    }
}