$(document).ready(function(){
    $('#calcular').click(function(){
        var valido = true;
        var resultado = numprim.calculate($('#numero').val());        
        $('#mensajes').empty();
        if($('#numero').val()>1 && ($('#numero').val()!="") && ($.isNumeric($('#numero').val()))) {
            $("#mensajes").append("<li>Los factores primos de " + $('#numero').val() + " son: "+resultado);
        } else if ($('#numero').val()!="") {
            $("#mensajes").append("<li class='error'>Introduce un número</li>");
            valido = false;
        } else if (($('#numero').val()<=1) || ($.isNumeric($('#numero').val()))) {
            $("#mensajes").append("<li class='error'>El número debe ser mayor de 1</li>");
            valido = false;
        };
    });
});