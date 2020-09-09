
/*BOTON SERVICIO*/
function servicio(){
	setTimeout(function() {            

		document.getElementById("include_contenido").style.display="none";
		document.getElementById("include_combos").style.display="block";

    }, 200);

}

/*BOTON TIENDA DE MENU MOVIL*/
function nav_tienda(){
	document.getElementById("ul").style.left="-100%";
	document.getElementById("include_contenido").style.display="none";
	document.getElementById("include_combos").style.display="block";

	var currently_setting_hash = false;

	$(window).on("hashchange", function() {
	    if (currently_setting_hash) {
	        currently_setting_hash = false;
	        return;
	    }

	    currently_setting_hash = false;
	    //...
	});

	currently_setting_hash = true;
	window.location.hash = "combos";
}

/* NAV  MOVIL - abrir y cerrar*/
function nav_open(){
	setTimeout(function() {     
		var element = document.getElementById('ul'),
	    style = window.getComputedStyle(element),
	    left = style.getPropertyValue('left');

	    if (left != "0px") {
	    	document.getElementById("ul").style.left="0px";
	    }else{
	    	document.getElementById("ul").style.left="-100%";
	    } 
    }, 200);

}


/*
PREGUNTAR ANTES DE SALIR
*/
window.onbeforeunload = function(e) {
	var element = document.getElementById('datos_personales'),
    style = window.getComputedStyle(element),
    display_datos = style.getPropertyValue('display');

    if (display_datos != "none") {
    	  return "Do you want to exit this page?"
    }  


	var element_cita = document.getElementById('contenedor_cita'),
    style_cita = window.getComputedStyle(element_cita),
    display_cita = style_cita.getPropertyValue('display');

    if (display_cita != "none") {
    	  return "Do you want to exit this page?"
    }  
};


/*BOTON FINAL DE REGISTRO*/
function ir_inicio(){
	setTimeout(function() {   
		location.href = "index.php"; 
    }, 200);	

}


















