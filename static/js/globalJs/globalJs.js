$(document).ready( function() {
		
		$( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
		 $( "div.failure" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
		 $( "div.warning" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
	  
		 history.pushState(null, null, location.href);
		    window.onpopstate = function () {
		        history.go(1);
		    };
	
		    $('#Icaptchaa').bind("cut copy paste",function(e) {
		        e.preventDefault();
		    });
		    
	});