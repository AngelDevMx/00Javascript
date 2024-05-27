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