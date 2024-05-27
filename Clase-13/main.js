/*
    SUBCLASES
*/


class Player{
    constructor(nombre, colorSombrero){
        this._nombre = nombre;
        this._colorSombrero = colorSombrero
    }
    saltar(){

    }
    correr(){

    }
    saludar(){
        return(`Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`)
    }
    get nombre(){
        return this._nombre;
    }

    set cambiarNombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
}


// CREACION DE UNA SUBCLASE

class Pet extends Player{
    constructor(nombre,colorSombrero,colorPiel){
        super(nombre,colorSombrero);
        this._colorPiel=colorPiel;
    }

    get colorPiel(){
        return this._colorPiel;
    }

    set colorPiel(nuevoColorPiel){
        this._colorPiel = nuevoColorPiel;
    }

    comer(){
        return 'Yo como manzanas'
    }

    saludar(){
        return super.saludar() + ' y ademas soy una mascota'
    }

}

let pet1 = new Pet('Yoshi', 'Invisible', 'Verde');
console.log(pet1);

console.log(pet1.nombre);

pet1.cambiarNombre = 'Rufus';
console.log(pet1.nombre);

//GET
console.log(pet1.colorPiel);
//SET
pet1.colorPiel = 'Purpura';
console.log(pet1.colorPiel);
console.log(pet1);

console.log(pet1.comer());
console.log(pet1.saludar());

//LAS CLASES NO GOZAN DE LA FUNCION HOSITING LA CUAL QUIERE DECIR QUE TIENE QUE SER LEIDA DE ARRIBA A ABAJO EN ORDEN A DIFERENCIA DE LAS FUNCIONES.