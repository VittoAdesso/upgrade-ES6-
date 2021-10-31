/* 3.1 Dado el siguiente array, crea una copia usando spread operators. */
const pointsList = [32, 54, 21, 64, 75, 43]

const copiaPointList = [...pointsList]; // llamar al spred es con los tres puntos '...'

console.log(copiaPointList);

//////////////////////////////////////////////////////////

/* 3.2 Dado el siguiente objeto, crea una copia usando spread operators. */
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };

const copyToy = {...toy };

console.log(copyToy);


//////////////////////////////////////////////////////////


/* 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos. */
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const juntandoArrays = [...pointsList, ...pointsLis2]; // llamo 1 array, llamo al segundo y en consola me los une ,,, sin necesidad de utilizar el concat.()
console.log(juntandoArrays);


//////////////////////////////////////////////////////////


/* 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators. */
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

const toyUpdate2 = {...toy, ...toyUpdate };

console.log(toyUpdate2);


//////////////////////////////////////////////////////////


/* 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos. */
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsMenosUno = [...colors];
colorsMenosUno.splice(2, 1);

console.log(colorsMenosUno);





/* Operaciones matemáticas

const numbers = [37, -17, 7, 0]
console.log(Math.min(numbers)) // NaN
console.log(Math.min(...numbers)) // -17
console.log(Math.max(...numbers)) // 37 */