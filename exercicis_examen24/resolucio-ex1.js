const temperatura = parseFloat(prompt("Introdueix la temperatura en graus Celsius:"));
if (temperatura > 30) {
    console.log("Temperatura alta");
} else if (temperatura < 10) {
    console.log("Temperatura baixa");
} else {
    console.log("Temperatura moderada");
}