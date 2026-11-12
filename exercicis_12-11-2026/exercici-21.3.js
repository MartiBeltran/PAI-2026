//21.3.- Fes un programa que faci el següent:
//● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
//● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
//● Guardi a la posició 6 de la taula la suma dels elements
//● Escrigui a la consola el contingut de la taula. Què passa a la posició 5?

let taula = [23,45,98,73];

console.log(taula[0] + taula[2]);

taula[6] = taula[0] + taula[2];

console.log(taula);

//En la posició 5 surt el següent: "empty"

