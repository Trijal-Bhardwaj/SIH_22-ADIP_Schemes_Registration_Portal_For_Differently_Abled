$(document).ready(function(){
	
	
	
	
	
	//alert("ready csrf2.js");
	var datastring="";
	//var originalSubmit = $( "#frm" ).submit;
	
	var form = document.getElementById('frm');
	var originalSubmit = form.submit;
	
	$( "#frm" ).submit(function(){
		//alert(this.name);
	 createFHash(this.name);
		 
	//alert("baad me");
	originalSubmit.apply(document.frm);
	return false;
		
	});

	var token_key = "NMD_TOKEN_KEY";

	var createFHash = function(frmName){

//alert("createFHash");
		 datastring = $("form[name='"+frmName+"']").serializeArray()
		var tokenval = getHexaCode(datastring);
		
		//alert("token==="+tokenval);
		
		//alert("token_key=121=="+token_key+" ss   "+tokenval);
		$('<input>').attr({
		    type: 'hidden',
		    id: token_key,
		    name: token_key,
		    value:tokenval
		}).appendTo('form');
		


		
	 	
	};

	 
	 var getHexaCode = function(datastring){
		
		 datastring.sort(function(a, b){
		        var a1= a.name.toLowerCase(), b1= b.name.toLowerCase();
		        if(a1== b1) return 0;
		        return a1> b1? 1: -1;
		    });
		     
		//alert(datastring);
		console.log(datastring);
		
		
		
		var myInput = "";
		var datalength=0;
	
		$.each(datastring, function( index, val ) {
			 
			if(val.name != token_key){
				
				////alert( index + ": " + val.name +" ="+val.value+"=");
				
				var newVal =  val.value;
				
				if(newVal!=''){
					
					newVal = newVal.replace(/ /gi, "_");
					newVal = newVal.replace(/\n|\r\n|\r/g, '_');
					myInput = myInput+""+newVal;
					datalength=datalength+1;
				}
				
			}
			
			  
		});
		
		//console.log("str :: "+myInput);
		//alert(myInput);
	return hex_md5(myInput);
		
		//return myInput;
		
		
	 };
	 
	 

	var submitForm = function(){
		
		////alert("inside submitForm");
		 		
		document.forms[0].submit();
		
		
	};
	 

	var getQueryParameters = function(str){

		str = str.split('?')[1];
		
		var outputArray = new Array();
		
		var strVals = str.split("&");
		
		for(var i=0; i< strVals.length; i++){
			
			var newVals = strVals[i].split("=");
			
			var obj = {name:""+newVals[0] , value:""+newVals[1]} ;
			
			outputArray[i] = obj;
			
		} 
		
		return outputArray;
		
	};


	

	
	



});

