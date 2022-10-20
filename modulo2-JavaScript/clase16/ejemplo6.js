const alternar = document.getElementsByClassName('alternar')[0]; //`pasa la posicion

alternar.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('activo');

})
//classList > representa una lista de clases asignadas al elemento
// toggle >  cambiar una clase
// add > agrega una clase
// remove > remueve una o varias clases 