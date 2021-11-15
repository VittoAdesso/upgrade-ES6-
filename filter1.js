// 6.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayoresDeEdad = ages.filter(ages => ages > 18);
console.log(mayoresDeEdad);


// 6.2 Dado el siguiente array, utiliza.filter() para generar un nuevo array
// con los valores que sean par.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages.filter(ages => ages % 2 === 0); // busco que me muestre los números pares, y los busco con %

console.log(pares);