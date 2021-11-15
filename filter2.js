// 6.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

// forma más efectiva, arroja array exacto con lo que le pido 
const resultados = streamers.filter(resultados => resultados.gameMorePlayed === 'League of Legends');
console.log(resultados);

// 2 forma, sólo que me da 4 veces el resultado
for (let resultados of streamers) {

    resultados = streamers.filter(resultados => resultados.gameMorePlayed === 'League of Legends');
    // console.log(resultados)
    console.log(resultados);
}


// 6.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const resultado1 = streamers.filter(resultado1 => resultado1.name.includes('u')); // pido que me busque en el array las palabras que tengan la letra u 
console.log(resultado1)