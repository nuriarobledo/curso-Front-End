function todoslosParrafos (){
    const allparrafos= document.getElementsByTagName('p'); //queryselectorall
    //console.log(allparrafos);

    const num = allparrafos.length; // 7
    alert(`hay ${num} elementos <p< dentro de este document`);
    //alert('la suma de los p es' + allparrafos.length);
}



