/*
    CLASE IF ELSE

    if (condition){
        // codigo que si se cumple
    }else{
        //codigo si no se cumple
    }
*/
/*
let condicion = 82;

document.write("linea de código 1<br>");
document.write("linea de código 1<br>");
document.write("linea de código 1<br>");

if(condicion == 1){
    document.write("linea de código IF<br>");
    document.write("linea de código IF<br>");
    document.write("linea de código IF<br>");
} else if(condicion==2){
    document.write("linea de código ELSE IF<br>");
    document.write("linea de código ELSE IF<br>");
    document.write("linea de código ELSE IF<br>");
} else{
    document.write("linea de código ELSE<br>");
    document.write("linea de código ELSE<br>");
    document.write("linea de código ELSE<br>");
}
*/

//usario ingrese la hora y el sistema saludara
// hora de 6 a 12 Buenos dias
//hora de 13 - 18 Buenas tardes
// resto de horas Buenas noches

let hora = prompt("🕰️Ingresa la hora por favor: ");

if (hora>=6 && hora<=12){
    document.write("<h1> Buenos días</h1>")
}else if(hora>=13 && hora<=18){
    document.write("<h1> Buenas tardes</h1>");
}else{
    document.write("<h1>Buenas noches!!!</h1>")
}