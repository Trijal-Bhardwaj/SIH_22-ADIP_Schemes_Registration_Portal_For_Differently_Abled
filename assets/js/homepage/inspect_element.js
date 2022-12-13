/*document.addEventListener('keydown', function() {
		  if (event.keyCode == 123) {
		    alert("This function has been disabled!");
		    return false;
		  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
		    alert("This function has been disabled ");
		    return false;
		  } else if (event.ctrlKey && event.keyCode == 85) {
		    alert("This function has been disabled ");
		    return false;
		  }
		}, false);

		if (document.addEventListener) {
		  document.addEventListener('contextmenu', function(e) {
		    alert("This function has been disabled!");
		    e.preventDefault();
		  }, false);
		} else {
		  document.attachEvent('oncontextmenu', function() {
		    alert("This function has been disabled!");
		    window.event.returnValue = false;
		  });
		}
		document.onkeydown = function (e) {
	        if (event.keyCode == 123) {
	            return false;
	        }
	        if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'i'.charCodeAt(0))) {
	            return false;
	        }
	        if (e.ctrlKey && e.shiftKey && (e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'c'.charCodeAt(0))) {
	            return false;
	        }
	        if (e.ctrlKey && e.shiftKey && (e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'j'.charCodeAt(0))) {
	            return false;
	        }
	        if (e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0) || e.keyCode == 'u'.charCodeAt(0))) {
	            return false;
	        }
	        if (e.ctrlKey && (e.keyCode == 'S'.charCodeAt(0) || e.keyCode == 's'.charCodeAt(0))) {
	            return false;
	        }
	    }
		
		$(document).keypress(
				  function(event){
					    if (event.which == '13') {
					      event.preventDefault();
					    }
					});*/