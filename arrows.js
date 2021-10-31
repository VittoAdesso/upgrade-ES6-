/* Iteración #1: Arrows */


/* Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.
*/

/* 1.1 Ejecuta esta función sin pasar ningún parametro */

let sinNada = () => { return 10 + 5 };
console.log(sinNada());

/* 1.2 Ejecuta esta función pasando un solo parametro */

let unSoloParamtro = (a) => { return a + 10 }
console.log(unSoloParamtro(5))

/* 1.3 Ejecuta esta función pasando dos parametros  */


let sum = (a, b) => { return a + b; }
console.log(sum(5, 10));