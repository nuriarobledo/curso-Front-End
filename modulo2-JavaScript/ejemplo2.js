const nombre = 'Nuria';
const edad= 40;
const apellido = 'Robledo';

document.write('hola soy ' + nombre + '<br/>'); //imprime nuria pq está en mayus
document.write(`hola soy ${nombre} ${apellido}. Mi edad es ${edad}`); //interpolacion de string
        
console.log(nombre);
console.log(`hola soy ${nombre}. Mi edad es ${edad}`)