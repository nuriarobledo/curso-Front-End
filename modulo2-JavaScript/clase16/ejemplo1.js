const items = document.getElementsByClassName("item"); //selecciono los elem con clase item

function cambiarVisibilidad(numItem) {
    const item = items[numItem];
    if (item.style.visibility == '') {
        item.style.visibility = 'hidden';
    }else{
        item.style.visibility = '';
    }
    
}

function cambiarVisibilidad(numItem) {
    const item = items[numItem];
    if (item.style.visibility == '') {
        item.style.visibility = 'hidden';
    }else{
        item.style.visibility = '';
    }
    
}
function cambiarDisplay(numItem) {
    const item = items[numItem];
    if (item.style.visibility == '') {
        item.style.visibility = 'none';
    }else{
        item.style.visibility = '';
    }
    
}
