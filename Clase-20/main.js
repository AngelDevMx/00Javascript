// Seleccionar por id
let elementoId = document.getElementById('parrafo1');
elementoId.innerHTML = 'HTML'

//SELECCIONAR POR CLASE
let elementoPorClase = document.getElementsByClassName('parrafos');
console.log(elementoPorClase.length);
elementoPorClase[1].innerHTML = 'CSS';

let elementoPorEtiqueta = document.getElementsByTagName('p');
console.log(elementoPorEtiqueta.lenght);
elementoPorEtiqueta[2].innerHTML='Java'

elementoId.style.background='orange';