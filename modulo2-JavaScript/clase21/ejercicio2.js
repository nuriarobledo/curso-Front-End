/* Crear un código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

0 a 1000 metros = pie
1000 a 10000 metros = bicicleta
10000 a 30000 metros = colectivo
30000 a 100000 metros = auto
+100000 = avión
*/

const distancia = parseInt(prompt('Bienvenido! Ingrese la distancia que va a recorrer', ''));
if (Number.isNaN(distancia)){
    document.write("La distancia ingresada es invalida -Recargue la pagina-");
}else if (distancia>=0 && distancia<=1000){
    document.write("Transporte recomendado: pie");
} else if (distancia>1000 && distancia<=10000){
    document.write("Transporte recomendado: bicicleta");
} else if (distancia>10000 && distancia <=30000){
    document.write("Transporte recomendado: colectivo");
} else if (distancia>30000 && distancia<=100000){
    document.write("Transporte recomendado: auto");
}else{
    document.write ("Transporte recomendado: avion");
}
