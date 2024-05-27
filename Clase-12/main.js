/*

    CLASES

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

        set nombre(nuevoNombre){
            this._nombre = nuevoNombre;
        }
    }

    let player1 = new Player('Mario', 'Rojo');
    let player2 =  new Player('Luigi', 'Verde');

    console.log(player1);
    console.log(player2);

    console.log(player1.saludar());
    console.log(player2.saludar());


    //GET
    console.log(player1.nombre)

    //SET
    player1.nombre = 'Angel';
    console.log(player1.nombre)

    console.log(player1)