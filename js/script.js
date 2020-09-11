/*------------------------------
	1. Elegir Tipo de Servicio
	2. Elegir Combos
	3. Guardar Formulario
	4. Interactividad CheckBox
	5. Registrar a Mysql
--------------------------------*/

/*------------------------------
	VARIABLES GLOBALES
--------------------------------*/
combo = "";
nombre = "";
cedula = "";
celular = "";
domicilio = "";	
nota = "";

/*------------------------------
	1. Elegir Tipo de Servicio
--------------------------------*/
function opcion_1(){
	document.getElementById("sub_contenedor_1").style.display="none";
	document.getElementById("datos_personales").style.display="block";
}

function opcion_2(){
	document.getElementById("sub_contenedor_1").style.display="none";
	document.getElementById("combos").style.display="flex";
}


/*------------------------------
	2. Elegir Combos
--------------------------------*/

function combo_1(){	
	setTimeout(function() {           
		combo = "Combo #1 Chip de 2Gigas";
		document.getElementById("combos").style.display="none";
		document.getElementById("datos_personales").style.display="block";
		document.getElementById("h1_encabezado").innerHTML = "A domicilio sin costo adicional";
    }, 200);
} 

function combo_2(){
	setTimeout(function() {           
		combo = "Combo #2 Chip de 7 Gigas + Auriculares";
		document.getElementById("combos").style.display="none";
		document.getElementById("datos_personales").style.display="block";
		document.getElementById("h1_encabezado").innerHTML = "A domicilio sin costo adicional";
    }, 200);
} 

function combo_3(){
	setTimeout(function() {           
		combo = "Combo #3 Chip de 15 Gigas + Parlante Mini Bluetooth";
		document.getElementById("combos").style.display="none";
		document.getElementById("datos_personales").style.display="block";
		document.getElementById("h1_encabezado").innerHTML = "A domicilio sin costo adicional";
    }, 200);
} 

function combo_4(){
	setTimeout(function() {           
		combo = "Combo #4 Chip de 15 Gigas + Gran Parlantes Bluetooth";
		document.getElementById("combos").style.display="none";
		document.getElementById("datos_personales").style.display="block";
		document.getElementById("h1_encabezado").innerHTML = "A domicilio sin costo adicional";
    }, 200);
} 


/*------------------------------
	3. Guardar Formulario
--------------------------------*/

function formulario(){
	setTimeout(function() {   
		nombre = document.forms["myForm"]["nombre"].value;
		cedula = document.forms["myForm"]["cedula"].value;
		celular = document.forms["myForm"]["celular"].value;
		domicilio = document.forms["myForm"]["domicilio"].value;	
		nota = document.forms["myForm"]["nota"].value;

	  	if (nombre != "" & cedula != "" & celular != "" & domicilio != "") {
			document.getElementById("datos_personales").style.display="none";
			document.getElementById("contenedor_cita").style.display="block";

			document.getElementById("h1_encabezado").innerHTML = "Pídalo aquí, Páguelo en Casa!";
	    	return false;
	 	}
    }, 200);
}


/*------------------------------
	4. Interactividad CheckBox
--------------------------------*/

	var d = new Date();
	var dia_semana = d.getDay();
	var hora_dia = d.getHours();
	/*Desactivar HOY si son las 3pm*/
	if (hora_dia >= 15) {
    document.getElementById("id_hoy").style.backgroundColor ="#a1a1a1";
	document.getElementById("hoy").disabled =true;
	document.getElementById("maniana").checked=true;
	}

	/*Desactivar Check HOY si es DOMINGO*/
	if (dia_semana == 7) {		
	    document.getElementById("id_hoy").style.backgroundColor ="#a1a1a1";
		document.getElementById("hoy").disabled =true;
		document.getElementById("maniana").checked=true;
	}

	/*Desactivar Check MAÑANA si hoy es SABADO*/
	if (dia_semana == 6) {		
	    document.getElementById("id_maniana").style.backgroundColor ="#a1a1a1";
		document.getElementById("maniana").disabled =true;
		document.getElementById("hoy").checked=true;
	}

	/*Desactivar Check P_MAÑANA si hoy es VIERNES*/
	if (dia_semana == 5) {		
	    document.getElementById("id_p_maniana").style.backgroundColor ="#a1a1a1";
		document.getElementById("p_maniana").disabled =true;
		document.getElementById("hoy").checked=true;
	}

	/*Desactivar En la Mañana si está Activo HOY*/
	if (document.getElementById('hoy').checked){
	    document.getElementById("id_la_maniana").style.backgroundColor ="#a1a1a1";
		document.getElementById("la_maniana").disabled =true;
		document.getElementById("la_tarde").checked=true;
	}


/* Al pulsar cada CheckBox*/
function hoy(){

	if (hora_dia < 15 & dia_semana != 7 ) {
    	document.getElementById("hoy").checked=true;
	    document.getElementById("id_la_maniana").style.backgroundColor ="#a1a1a1";
		document.getElementById("la_maniana").disabled =true;
		document.getElementById("la_tarde").checked=true;
	}
}

function maniana(){	
	if (dia_semana != 6 ) {
    	document.getElementById("maniana").checked=true;

	    document.getElementById("id_la_maniana").style.backgroundColor ="#BE8BE3";
		document.getElementById("la_maniana").disabled =false;
	}
}

function p_maniana(){
	if (dia_semana != 5 ) {
    	document.getElementById("p_maniana").checked=true;
    	document.getElementById("id_la_maniana").style.backgroundColor ="#BE8BE3";
		document.getElementById("la_maniana").disabled =false;
	}
}

function la_maniana(){
	if (document.getElementById('hoy').checked){
		//No hacer nada

	}else{
		document.getElementById("la_maniana").checked=true;
	}
}

function la_tarde(){
	document.getElementById("la_tarde").checked=true;
}

/*------------------------------
	5. Registrar a Mysql
--------------------------------*/

function cita(){	
	setTimeout(function() {   

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
	            //   Continuar a Final
	                document.getElementById("contenedor_cita").style.display="none";
					document.getElementById("contenedor_final").style.display="block";
	            console.log(response);
	        }
	    });  
    }, 200);


	document.getElementById("encabezado").style.display="none";
} 





