/* 
    ATRIBUTOS Y METODOS ESTATICOS

    Estos solo pertenecen a la clases y no son heredados a los objetos. Las subclases si los heredan.

*/

class Mascota{
    static cola = 'larga';
    pelaje = 'lacio';
    static contadorMascota =0;
    constructor(nombre,edad){
        this._nombre =  nombre;
        this._edad = edad;
        this._numero = ++Mascota.contadorMascota;
    }

    get numeroCreacion(){
        return this._numero;
    }

    static saludo(){
        return 'mover la cola'
    }
}

let mascota1 = new Mascota('Boby', 5);
console.log(mascota1);
let mascota2 = new Mascota('Kyra', 2);
console.log(mascota2)
console.log(mascota1.numeroCreacion)
console.log(mascota2.numeroCreacion)

console.log(Mascota.saludo());

class Perro extends Mascota{
    constructor(nombre,edad,raza){
        super(nombre,edad);
        this._raza;
    }
}

let perro1 = new Perro('Maya',6, 'Scahnauzer')

console.log(Perro.cola);
console.log(perro1.pelaje);
console.log(perro1._edad);
console.log(Perro.saludo());

console.log(perro1)
console.log(Perro.contadorMascota);

console.log(perro1.contadorMascota);

for (let i=1 ; i<=10 ; i++) {
    for (let j=1 ; j<=10 ; j++) {
        const resultado = i * j
        console.log(i + 'x' + j + '=' + resultado)
    }
}

for (let i = 0; i < 10 && i !== 3; i++) {
    console.log('Hola')
  }

const dia = new Date().getDay()

switch (dia) {
  case 0:
  case 6:
    console.log("¡Hoy es fin de semana! 🥳")
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("¡Nooo, a trabajar! 😢")
    break
  case 5:
    console.log("¡Hoy es viernes! 🤓")
    break
}

console.log(dia)