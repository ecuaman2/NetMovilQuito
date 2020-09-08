
function servicio(){
	document.getElementById("include_contenido").style.display="none";
	document.getElementById("include_combos").style.display="block";

}

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

function nav_open(){
    /*CONOCER EL ATRIBUTO DE UL PARA SABER SU LEFT
	Para recurdar... en este codigo me demora como
	 2 horas tratandolo de hacer funsionar ._. el 
	 problema era que escribia 0 en vez de 0px ._.
    */

	var element = document.getElementById('ul'),
    style = window.getComputedStyle(element),
    left = style.getPropertyValue('left');

    if (left != "0px") {
    	document.getElementById("ul").style.left="0px";
    }else{
    	document.getElementById("ul").style.left="-100%";

    }   

}



/*

window.onhashchange=function(){	

		var element_combos = document.getElementById('combos'),
	    style_combos = window.getComputedStyle(element_combos),
	    combo2 = style_combos.getPropertyValue('display');

	    if (combo2 == "flex") {

	    	document.getElementById("combos").style.display="none";
			document.getElementById("include_combos").style.display="block";
			document.getElementById("include_contenido").style.display="block";
		}

		var element_datos = document.getElementById('datos_personales'),
	    style_datos = window.getComputedStyle(element_datos),
	    datos2 = style_datos.getPropertyValue('display');

	    if (datos == "block") {

	    	document.getElementById("datos_personales").style.display="none";
			document.getElementById("combos").style.display="flex";
		}
}
*/

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

















