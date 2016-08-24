var modalIframe = function(){
	$(document).on('click','#test', function(){
        callExisteEvento();
		callModal();
	} );


	var callExisteEvento = function(){
		$.ajax({
			url:'http://lnxsapl1d.dev.unix.banorte.com:9080/ade-front/existeEvento.json?'+
				'param1=q1BD4mQqd6HOgsbVJFwPAQ%3D%3D&'+
                'param2=WWW&param3=yissus',
                dataType: 'text'

                /*url: 'http://localhost:8180/ade-front/existeEvento.json?'+
                    'param1=q1BD4mQqd6HOgsbVJFwPAQ%3D%3D&'+
                    'param2=WWW&param3=yissus',
                dataType: 'text'*/
                }).done(function(data) {
                   console.log('Se ajusta tamanio de la ventana modal: '+data)
                    var valor = data.split(',');
                    if(valor.length > 2){
                        $('#framePopUp').attr('width',valor[1]);
                        $('#framePopUp').attr('height',valor[2]);
                        $('#framePopUp').css({'border-radius':'5px 5px'});
                        $('#T').css({'width': valor[1], 'height':valor[2]});

                        $('#divModalPopUp').css({'width':parseInt(valor[1])+15});


                    } 
                });

	}


	var callModal = function(){
 	$('#framePopUp').attr('src',
	 	'http://lnxsapl1d.dev.unix.banorte.com:9080/ade-front/ade.htm?'+
	 					'param1=q1BD4mQqd6HOgsbVJFwPAQ%3D%3D&'+
	 					'param2=WWW&'+
	 					'ejecutivo=1234567&ipCliente=&sesion=&param3=ysuss');
	        
	        $("#modalPopup").modal();       // Ejecuta la modal con la popup dentro     

	}	
};
$(function(){
	modalIframe();
});
if(window.addEventListener){
	window.addEventListener('message', function(event){
	var origen = event.origin || event.originalEvent.origin;
		if (origen !== "http://lnxsapl1d.dev.unix.banorte.com:9080"){
			return;
		} 
	$("#modalPopup").modal('hide');
	},false);
	
}else{
	window.attachEvent('onmessage', function(event){
	var origen = event.origin || event.originalEvent.origin;
		if (origen !== "http://lnxsapl1d.dev.unix.banorte.com:9080"){
			return;
		} 
	$("#modalPopup").modal('hide');
	});
}
function send(msg) {

	var popupIframe = document.getElementsByTagName('iframe')[0];
	var contenido = (popupIframe.contentWindow ? popupIframe.contentWindow :popupIframe.contentDocument);
	contenido.postMessage(msg, "http://lnxsapl1d.dev.unix.banorte.com:9080");
	return false;
}