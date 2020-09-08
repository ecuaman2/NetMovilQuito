
	/*VARIABLES GLOBALES*/
	combo = "";

	nombre = "";
	cedula = "";
	celular = "";
	domicilio = "";	
	nota = "";


function opcion_1(){
	document.getElementById("sub_contenedor_1").style.display="none";
	document.getElementById("datos_personales").style.display="block";
}

function opcion_2(){
	document.getElementById("sub_contenedor_1").style.display="none";
	document.getElementById("combos").style.display="flex";
}


/* Combos */

function combo_1(){
	combo = "Combo #1 Chip de 2Gigas";
	document.getElementById("combos").style.display="none";
	document.getElementById("datos_personales").style.display="block";
} 

function combo_2(){
	combo = "Combo #2 Chip de 7 Gigas + Auriculares";
	document.getElementById("combos").style.display="none";
	document.getElementById("datos_personales").style.display="block";
} 

function combo_3(){
	combo = "Combo #3 Chip de 15 Gigas + Parlante Mini Bluetooth";
	document.getElementById("combos").style.display="none";
	document.getElementById("datos_personales").style.display="block";
} 

function combo_4(){
	combo = "Combo #4 Chip de 15 Gigas + Gran Parlantes Bluetooth";
	document.getElementById("combos").style.display="none";
	document.getElementById("datos_personales").style.display="block";
} 


/* Formulario de Contacto */

function boton(){
	nombre = document.forms["myForm"]["nombre"].value;
	cedula = document.forms["myForm"]["cedula"].value;
	celular = document.forms["myForm"]["celular"].value;
	domicilio = document.forms["myForm"]["domicilio"].value;	
	nota = document.forms["myForm"]["nota"].value;
  		if (nombre != "" & cedula != "" & celular != "" & domicilio != "") {

			document.getElementById("datos_personales").style.display="none";
			document.getElementById("contenedor_cita").style.display="block";

    	return false;
 		 }
}

/* Formulario Cita */

	var d = new Date();
	var dia_semana = d.getDay();
	var hora_dia = d.getHours();

	if (hora_dia >= 14) {
    document.getElementById("id_hoy").style.backgroundColor ="#a1a1a1";
	document.getElementById("hoy").disabled =true;
	document.getElementById("maniana").checked=true;

	}

function cita(){


	/* DIA DE ENTREGA*/
	dia_entrega = "";
    hora_entrega = "";

	if (document.getElementById('hoy').checked) {
        var dia_entrega = "Hoy";
    }else if (document.getElementById('maniana').checked) {
        var dia_entrega = "Mañana";
    }else if (document.getElementById('p_maniana').checked) {
        var dia_entrega = "Pasado de Mañana";
    }


    /* HORARIO DE ENTREGA*/

    if (document.getElementById('la_maniana').checked) {
        var hora_entrega = "En la Mañana";
    }else if (document.getElementById('la_tarde').checked) {
        var hora_entrega = "En la Tarde";
    }


    /*GUARDAR EN MYSQL*/

    // Convertir a objeto las variables
    var data = {};
    data.combo = combo;
    data.nombre = nombre;
    data.cedula = cedula;
    data.celular = celular;
    data.domicilio = domicilio;
    data.nota = nota;
    data.dia_entrega = dia_entrega;
    data.hora_entrega = hora_entrega;

    // enviar por POST mediante AJAX
    var url = 'include/registrar.php';   //este es el PHP al que se llama por AJAX
    $.ajax({
        method: 'POST',
        url: url,
        data: data,   //acá están todos los parámetros (valores a enviar) del POST
        success: function(response){
            // Se ejecuta al finalizar
            //   mostrar si está OK en consola
                document.getElementById("contenedor_cita").style.display="none";
				document.getElementById("contenedor_final").style.display="block";
            console.log(response);
        }
    });
} 

function hoy(){
	var d = new Date();
	var dia_semana = d.getDay();
	var hora_dia = d.getHours();

	if (hora_dia < 14) {
    document.getElementById("hoy").checked=true;

	}
}

function maniana(){
	document.getElementById("maniana").checked=true;
}

function p_maniana(){
	document.getElementById("p_maniana").checked=true;
}

function la_maniana(){
	document.getElementById("la_maniana").checked=true;
}

function la_tarde(){
	document.getElementById("la_tarde").checked=true;
}


function ir_inicio(){	


	location.href = "index.php";

	/*
	document.getElementById("contenedor_final").style.display="none";
	if (matchMedia('only screen and (max-width: 600px)').matches) {
	document.getElementById("sub_contenedor_1").style.display="inline-block";
	}
	else{
	document.getElementById("sub_contenedor_1").style.display="flex";
	}
	*/

}


/* AJAX*/
