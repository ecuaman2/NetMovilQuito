$(obtener_registros());



function obtener_registros(alumnos)
{		

	$.ajax({
		url : 'consulta_mis_clientes.php',
		type : 'POST',
		dataType : 'html',
		data : { alumnos: alumnos },
		})

	.done(function(resultado){
		$("#tabla_resultado").html(resultado);
	})
}

$(document).on('keyup', '#busqueda', function()
{
	var valorBusqueda=$(this).val();
	if (valorBusqueda!="")
	{
		obtener_registros(valorBusqueda);
	}
	else
		{
			obtener_registros();
		}
});

/* FUNSION DE PRUEBA PARA FILTRAR CON FECHA*/
/*
function Fecha(){
	var fecha = document.getElementById("fecha").value;
	var data = {};
    data.fecha = fecha;

	var url = 'consulta_mis_clientes';   //este es el PHP al que se llama por AJAX
    $.ajax({
        method: 'POST',
        url: url,
        data: data,   //acá están todos los parámetros (valores a enviar) del POST
        success: function(response){

        	alert(response);

                
            console.log(response);
        }
    });
}

*/


function Imprimir(){

	window.open(
  		'imprimir.php',
  		'_blank' // <- This is what makes it open in a new window.
)		;

}


