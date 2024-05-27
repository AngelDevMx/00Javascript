function saludoInicial(name){
    document.write(`Hola que tal soy ${name} <br>`);
}

saludoInicial("Jorge");
saludoInicial("Jessy");
saludoInicial();

let c = 100;

function sunmarNumeros(a,b){
    let suma = a + b + c;
    document.write(suma + "<br>")
}

sunmarNumeros(1,2);