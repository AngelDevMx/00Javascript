/*
//set timeout
// sintaxis   setTomeout(funcion , ms, arg1, arg2, ....)
function saludo(nombre){
    console.log(`Hola ${nombre}, buenos días`);
}

//setTimeout(saludo,2000, 'David');

let temporizadorId = setTimeout(saludo,2000, 'David');

clearTimeout(temporizadorId);

//sintaxis setInterval(funcion, ms, arg1, arg2)
// ejecuta una funcion cada cierto tiempo

let numero = 5

let lanzamiento = setInterval(()=>{
    console.log(`lanzamiento en ${numero} segundos`);
    numero--;
    if(numero == 0){        
        clearInterval(lanzamiento)   
    }},1000)

    // settimeout anidado

let numero = 0;

let incrementoID = setTimeout(function incremento(){
    console.log(numero)
    numero++
    incrementoID = setTimeout(incremento,1000)
},1000)


*/

//Ejercicio

let mostrarFecha = document.getElementById(`fecha`);
let mostrarHora = document.getElementById(`hora`);

let fecha = new Date();

let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves' , 'Viernes' , 'Sabado'];

let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre','Octubre', 'Noviembre', 'Diciembre'];


mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()]} , ${fecha.getDate()} de ${mes[fecha.getMonth()]} de ${fecha.getFullYear()}`

setInterval(()=>{
    let hora = new Date()
    mostrarHora.innerHTML = hora.toLocaleTimeString()
},1000)