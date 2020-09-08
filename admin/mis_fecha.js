	$(obtener_registros_fecha());



function obtener_registros_fecha(alumnos2)
{		

	$.ajax({
		url : 'consulta_fecha.php',
		type : 'POST',
		dataType : 'html',
		data : { alumnos2: alumnos2 },
		})

	.done(function(resultado){
		$("#tabla_resultado").html(resultado);
	})
}

$(document).on('keyup', '#fecha', function()
{
	var valorBusqueda=$(this).val();
	if (valorBusqueda!="")
	{
		obtener_registros_fecha(valorBusqueda);
	}
	else
		{
			obtener_registros_fecha();
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
  		'_blank' // 
		);

}


