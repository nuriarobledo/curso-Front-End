//PIDE LA EDAD Y SI ES MAYOR DE 18 AÑOS INDICA SI PUEDE CONDUCIR

const edad = parseInt(prompt('Bienvenido! Ingrese su edad', ''));

//console.log(edad);

if(edad>18) {
    document.write('¡Felicitaciones! Usted puede conducir!');
} else if (edad<18) {
    document.write(`¡Malas noticias! con ${edad} no está habilitado para conducir :(`)
} else{
    document.write(`La edad ingresada es incorrecta -Recargue la pagina-`);
}

/* resuelto x la profe
if (Number.isNaN(edad)){ //si no es numerico
    document.write('Debes ingresar un numero');

} else if (edad >=18){
    document.write('¡Felicitaciones! Usted puede conducir!');
} else  {
    document.write(`¡Malas noticias! con ${edad} no está habilitado para conducir :(`)
}
*/

