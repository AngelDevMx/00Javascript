// OBJETOS

let fruta = 'manzana';
let frutas = ['manzana', 'peras'];

let frutas1 = {
    familia : 'citricos',
    cantidad : 200, 
    tipo: ['limon', 'naranjas']
}

let usuario = {
    nombre: 'Maria',
    edad: 20,
    estudiante: true,
    'tiene pasaporte': true,
    idiomas: {
        nativo: 'español',
        extranjero :{
            ingles: 'avanzado',
            frances: 'intermedio',
            aleman: 'bajo'
        }
    }
}
console.log(usuario);
console.log(usuario.edad);
console.log(usuario.estudiante);

// Agregar propiedades
usuario.carrera = 'Contabilidad';
console.log(usuario);

//Eliminar propiedades
delete usuario.edad;
console.log(usuario);

// Consulta de propiedades
console.log(usuario.hasOwnProperty('nombre'));

// Metodo de corchete
console.log(usuario['estudiante']);
console.log(usuario['tiene pasaporte']);

console.log(usuario.idiomas.extranjero.aleman)


// CONSTRUCTORES DE OBJETOS
function Disco(artist,album,year){
    this.artist = artist;
    this.album = album;
    this.year = year;
}

let disco2 = new Disco('Beach House', 'Meteoritos' , '2024')
let disco3 = new Disco('Beach House volumen 2', 'Meteoritos 2' , '2024-9')
console.log(disco2)
console.log(disco3)