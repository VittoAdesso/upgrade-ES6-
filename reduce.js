// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    { name: 'Yuyu Cabeza Crack', score: 5 },
    { name: 'Maria Aranda Jimenez', score: 1 },
    { name: 'Cristóbal Martínez Lorenzo', score: 6 },
    { name: 'Mercedez Regrera Brito', score: 7 },
    { name: 'Pamela Anderson', score: 3 },
    { name: 'Enrique Perez Lijó', score: 6 },
    { name: 'Pedro Benitez Pacheco', score: 8 },
    { name: 'Ayumi Hamasaki', score: 4 },
    { name: 'Robert Kiyosaki', score: 2 },
    { name: 'Keanu Reeves', score: 10 }
];

// El acumulador puede ser prácticamente cualquier cosa(entero, cadena, objeto, etc.) 
// y debe instanciarse o pasarse al llamar a.reduce().

const totalScore = exams.reduce(function(valorIncial, valorQueLeSigue) {
    return valorIncial + valorQueLeSigue.score; // pido que me devuelva las sumas del incial mas el segundo, y así
}, 0); //inicio conteo en 0, puedo inciarlo con lo que quiera

console.log('Los alumnos tienen un total de nota acumulad de: ' + ' ' + totalScore + ' puntos');






// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().

const exams = [
    { name: 'Yuyu Cabeza Crack', score: 5 },
    { name: 'Maria Aranda Jimenez', score: 1 },
    { name: 'Cristóbal Martínez Lorenzo', score: 6 },
    { name: 'Mercedez Regrera Brito', score: 7 },
    { name: 'Pamela Anderson', score: 3 },
    { name: 'Enrique Perez Lijó', score: 6 },
    { name: 'Pedro Benitez Pacheco', score: 8 },
    { name: 'Ayumi Hamasaki', score: 4 },
    { name: 'Robert Kiyosaki', score: 2 },
    { name: 'Keanu Reeves', score: 10 }
];

const totalPromedio = exams.reduce(function(valor1Acumulado, valor2) {
    if (valor2.score > 5) {
        return (valor1Acumulado + valor2.score);
    }

}, 0);

console.log(totalPromedio);


// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const exams = [
    { name: 'Yuyu Cabeza Crack', score: 5 },
    { name: 'Maria Aranda Jimenez', score: 1 },
    { name: 'Cristóbal Martínez Lorenzo', score: 6 },
    { name: 'Mercedez Regrera Brito', score: 7 },
    { name: 'Pamela Anderson', score: 3 },
    { name: 'Enrique Perez Lijó', score: 6 },
    { name: 'Pedro Benitez Pacheco', score: 8 },
    { name: 'Ayumi Hamasaki', score: 4 },
    { name: 'Robert Kiyosaki', score: 2 },
    { name: 'Keanu Reeves', score: 10 }
];

const totalPromedio = exams.reduce(function(valor1Acumulado, valor2) {
    return ((valor1Acumulado + valor2.score) / exams.length); // entre la longitud del array 
}, 0);

console.log('Los alumnos tienen un promedio total de: ' + ' ' + totalPromedio + ' puntos');