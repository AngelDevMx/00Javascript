// Funcion clasica - hositing

function saludar(nombre){
    return 'Hola ' + nombre;
}

console.log(saludar('Jorge'));

// HOISTING Significa queuna función puede ser llamada desde cualuier parte del codigo

//Funcion anonima, no tienen un nombre y hay que almacenarlas en una variable

let saludo = function(nombre){
    return 'Saludos ' + nombre;
}

console.log(saludo('David'));


// funciones flecha () => {}
// es una funcion anonima

let saludo2 = nombre =>'Saludos con flecha ' + nombre;

console.log(saludo2('Sebastian'));

let suma = (a,b) => a+b;
console.log(suma(5,2));