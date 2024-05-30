// OBJETO DATE

let fechaActual = new Date();
console.log(fechaActual);

console.log(fechaActual.getDate());
console.log(fechaActual.getMonth())
console.log(fechaActual.getFullYear())

//TIMESTAMP: 01 Enero 1970 -> Actualidad

console.log(fechaActual.getTime())
console.log(Date.now())
console.log(+fechaActual)

let fechaConTimestamp = new Date(0);
console.log(fechaConTimestamp);

//Ejercicio 1 
//mostrar la fecha actual en español con el sig formato:
//Domingo, 25 de julio de 2024

let fecha = new Date();
console.log(fecha.getDay());
console.log(fecha.getDate())
console.log(fecha.getMonth())
console.log(fecha.getFullYear())

let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves' , 'Viernes' , 'Sabado'];
console.log(diaSemana[fecha.getDay()]);

let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre','Octubre', 'Noviembre', 'Diciembre'];
console.log(mes[fecha.getMonth()])

console.log(`${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mes[fecha.getMonth()]} de ${fecha.getFullYear()}`)


//Ejercicio Mostrar la hora actual

let hora = new Date();
console.log(hora.toLocaleTimeString())
