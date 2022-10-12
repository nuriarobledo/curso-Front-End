const valor = parseInt(prompt('Ingrese un valor comprendido entre 1 y 5', ''));

switch(valor){
    case 1:
        document.write("enero");
        break;
    case 2:
        document.write("febrero")
        break;
    case 3:
        document.write("marzo")
        break;
    case 4:
        document.write("abril")
        break;
    case 5:
        document.write("mayo")
        break;
    default:
        document.write('debe ingresar un numero entre 1 y 5')
        break;
}
