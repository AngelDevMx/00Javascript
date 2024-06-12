//Lectura de nodos

//Por query selector

let elementoPorID = document.querySelector('#parrafo1')
elementoPorID.innerHTML = 'suscribete';

//por nombre de la clase
let elementoPorClase = document.querySelectorAll('.parrafos');
console.log(elementoPorClase);
 const arreglo = [...elementoPorClase];
 console.log(arreglo)
 arreglo[1].innerHTML = "Coding"

 let elementosPorEtiqueta = document.querySelectorAll('p')
 elementosPorEtiqueta[2].innerHTML = "Jesus"