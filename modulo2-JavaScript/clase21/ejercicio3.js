/* CREAR UN CODIGO Q RECIBA UN ARRAY DE NUMEROS Y DEVUELVA EL MAYOR*/

//const num=[30,45,3,4,5];
const num= [];
for (i=1;i<6;i++){
    num[i] = parseInt(prompt('Ingrese un numero', ''));
}
console.log(num);

function mayor(){
let max=0;
    for (i=0; i<num.length;i++){
        if (num[i]>max){
            max=num[i];
        }
    }
    document.write(`el numero mayor es: ${max}`);
            console.log(max)

}
mayor();