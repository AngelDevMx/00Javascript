/*

ARRAYS : Guardar uno o mas datos

 */

let variable = 5;

//Sintaxis

let arreglo = [];

//Elementos iniciales
let cursos = ['HTML', 'CSS', 'JAVASCRIPT'];

console.log(cursos[0]);
console.log(cursos[1]);
console.log(cursos[2]);

// Reemplazar elementos

cursos[1] ='PHP';
console.log(cursos);

//Agregar elementos
cursos[4]='Python';
console.log(cursos);

//longitud del arrar
console.log(cursos.length);

//METODO UNSHIFT:Este permito insertar un elemento al inicio del array
// SHIFT  QUITA EL PRIMER ELEMENTO
//METODO PUSH, Este permite insertar un elemento al final del array
//POP QUITA EL ULITMO ELEMENTO


// ARREGLOS MULTIDIMENSIONALES

let matriz = [
    [1,2,3],
    [2,3,4],
    [5,6,7]
];

console.log(matriz[0])
console.log(matriz[1][0])