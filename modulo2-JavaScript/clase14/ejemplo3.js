const nombre = prompt('ingrese su nombre', '');
const nota = parseInt(prompt('ingrese su nota',''));

//console.log(nombre)
//console.log(nota)

if(Number.isNaN(nota)){
    document.write('la nota ingresada no es valida');
} else if (nota >=4){
    document.write(`${nombre} estas aprobado con ${nota}`)
} else{
    document.write(`${nombre} estas desaprobado con ${nota}.
    segui estudiando!!`)
}