/* 2.1 En base al siguiente javascript, 
a. crea variables en base a las propiedades del objeto usando object destructuring e 
b . imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto. */

const game = { title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020 }

let { title, year } = game; // van en llaves yaque son dos propieedades a las qiue llampo

console.log(game.title, game.year);


/* 2.2 En base al siguiente javascript, 
A- usa destructuring para crear 3 variables 
B- llamadas fruit1, fruit2 y fruit3, con los valores del array. 
C- Posteriormente imprimelo por consola. */

const fruits = ['Banana', 'Strawberry', 'Orange'];

let fruits1 = fruits[0]; // creo variable sin corchetes, y le doy el valor del array con el index que quierpo que busque

let fruits2 = fruits[1]; // repito lo de arriba

let fruits3 = fruits[2]; // repito lo de arriba

console.log(fruits1); // imrpimo valor
console.log(fruits2);
console.log(fruits3);



/* 2.3 En base al siguiente javascript,
a-  usa destructuring 
b- para crear 2 variables igualandolo a la función e
c-  imprimiendolo por consola. */

const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' }
};

let { name, race } = animalFunction;

console.log(animalFunction().name); // invoco a la función con su propiedad para que me la ejeute e imprima la propiedad del array
console.log(animalFunction().race); // repito


/* 2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.
 */
const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }

let name = car; // llamo 1 propiedad del objeto
let itv = car; // repito

/* console.log(car.name);
console.log(car.itv); */


let anno1 = car.itv[0]; //llamo y asigno variable variable del array
let anno2 = car.itv[1]; // repito
let anno3 = car.itv[2]; // repito
/* 
console.log(anno1);
console.log(anno2);
console.log(anno3); */

console.log(car.name, anno1); // llamo a la propiedad del carro y el año especigfico itv
console.log(car.name, anno2);
console.log(car.name, anno3);



/* console.log(car.name, car.itv[1]);
console.log(car.name, car.itv[2]); */