const valor1 = prompt('Ingrese su primer numero', '');
const valor2 = prompt ('Ingrese su segundo numero', '');
//const valor1 = parseInt(prompt('Ingrese su primer numero', ''));


const suma= parseInt(valor1)+parseInt(valor2);
const producto= (valor1)*(valor2); //el multiplicar no concatena asiq no necesitamos parseInt

console.log(suma)
console.log(producto)