$(document).ready(function(){
    $('#calcular').click(function(){   
        numero = parseInt(numero); 
        if(numero>=1 && !isNaN(numero)){
            $("#mensajes").append("<tr><th>Números primos de "+numero);
            for (var x =1; x<=numero; x++){
                if(esPrimo(x)){
                    document.write("<tr><td>"+ x +"</td></tr>");
                }
            }
        }else{
        alert("¡El valor introducido NO es válido!")
        };
    });
})