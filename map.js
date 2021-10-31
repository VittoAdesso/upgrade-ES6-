/* 
4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */

const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

const names = users.map(function(elem) {
    return elem.name;
});

console.log(names);

//////////////////////////////////////////////////////////

/* 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. */

const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

for (let jugadores of users) {

    if (jugadores.name.includes('A')) {

        jugadores.name = 'Anacleto'; // cambio el nombre específico de una propiedad
        console.log(jugadores);

    }

}


//////////////////////////////////////////////////////////

/* 4.3 Dado el siguiente array, 
a. devuelve una lista que contenga los valores de la propiedad .name y 
b. añade al valor de .name el string ' (Visitado)' 
c. cuando el valor de la propiedad isVisited = true.
 */
const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
];


//const nuevasCities = cities.map(function(elem) {

for (let visitas of cities) {

    if (visitas.isVisited === true) {

        console.log(visitas.name, visitas.name = "Visitado");
    }
}