/* 
let Crea una variable
Ejemplo
let userName;
userName = 'Juan';


Var Crea una variable
Ejemplo:
var userName

Reglas de las variables:
-No son aceptados numeros al principio de la variable
-No se aceptan palabras reservadas
-No se aceptan carácteres especiales
-Tipografía camelCase

const: variables constantes que se quedan con valor fijo
const Pi = 3.1416;

*/

let userAge;
let birthYear;

userAge = prompt("Ingresa tu edad"); //Mostrar un ventana emergente y adquirir datos del usuario
birthYear = 2024-userAge;
document.write(`Tu tienes ${userAge} años de edad y naciste en el año ${birthYear}`);