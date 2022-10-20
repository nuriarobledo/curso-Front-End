const frutas= ['palta', 'naranja', 'manzanas','anana','bananas'];

console.log(frutas);
console.log(frutas.sort()); //orden alfabetico

const numeros = [78,10,7,1,2];

console.log(numeros);
console.log(numeros.sort()); //1, 10, 2 , 7 ,78 (unicode, el array es ordenado atendiendo a la posicion del valor de cada caracter, segun la conversion a string de cada elemento )

const num = numeros.sort(function(a,z){
    return a-z; // ordenamos de la A-Z 
    //imprime de menor a mayor
})
console.log(num);

const num2 = numeros.sort(function(a,b){
    return b-a; // ordenamos de la Z-A
    //imprime de mayor a menor
})
console.log(num2); //70,10,7,2,1

const palabras= ['nuria','rocio','milagros','lourdes','cobayo'];
const palab = palabras.sort()

console.log(palab); //cobayo,lourdes, milagros .....
console.log(palabras.sort().reverse()); //posible solucion

const palabrs = palabras.sort(function(a,b){ //otra posible solucion
    if (b>a) return -1;
    return 0;
})
console.log(palabrs)