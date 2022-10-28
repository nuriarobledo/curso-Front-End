$(document).ready(function(){ //cuando cargo todo, empieza la funcion
    $window = $(window);

    $('#intro').height($window.height()); //dependiendo d las ventanas, se adapta al ancho,
    $window.scroll(function(){
        $('div.background').each(function(index,item){ //array d elementos
            let $scroll = $(item);
            let yPos = -($window.scrollTop()/$scroll.data('speed')); //cuando scrolleamos para abajo, el elem va para arriba
            let coords = '50%' + yPos + 'px'; //50% para q el rio quede en el medio + la posicion + los pixeles
            $scroll.css ({backgroundPosition: coords}); // y a todo eso se lo aplicamos al scroll3
        })
    })
})