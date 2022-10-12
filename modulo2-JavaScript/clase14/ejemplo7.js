let x = 1;

let suma = 0;
const cuantos = parseInt(prompt('ingrese cuantos numeros va a sumar', ''));

while( x <=cuantos){
    const valor = parseInt(prompt(`ingrese el valor ${x} de ${cuantos}`, ''));
    suma +=valor;
    x++;
}

document.write(`la suma de los valores son ${suma}`);