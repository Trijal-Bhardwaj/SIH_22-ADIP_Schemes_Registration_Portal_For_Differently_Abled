
var flag,imp,msg2,chk;

function ok_alert(msg){ 
		
    var m = msg.split('.');
 
    var msg1=m[0];
     msg2=m[1];
    if(msg == "atleast")
    {
    	swal('Error','There must be atleast one Drug',"error");
    }
    if(msg == "atleast1")
    {
    	swal('Error','There must be atleast one Device',"error");
    }
    else
	if (msg=="novalue")
		{
		swal('Error','No records selected', "error");	
		}
	else if (msg=="invalid")
	{
	swal('Error','Invalid Data', "error");	
	}
	else if(msg=="regerror")
		{
		swal('Error','Already there is Re-Registration against this RC, either in Saved Applications or Submitted Applications', "error");
		}
	else if(msg=="hiserror")
		{
		swal('Error','Already an application against this RC is either Submitted to CDSCO or Approved by CDSCO', "error");
		}
	else if(msg=="ExistLic"){
		swal('Error','Already an application against this RC or License is either Submitted to CDSCO or Approved by CDSCO', "error");
	}
	else if (msg=="error")
	{
		swal('Error','', "error");	
	}
	else if (msg=="finalError")
	{
		swal('Error','Application against this RC Number has been rejected.Hence, the application cannot be submitted', "error");	
	}
	else if (msg=="finalErrorInLic")
	{
		swal('Error','Application against this License Number has been rejected.Hence, the application cannot be submitted', "error");	
	}
	else if (msg1=="message")
	{
		swal('Message',msg2);	
	}
	else 
		swal({
			title: msg1,
			text: msg2,
			timer: '60000',
			type:"success",
			//showConfirmButton: false
			});
	

}

function message_alert(msg)
{
	//alert("inside message");
	//var flag1="true";
	var m = msg.split('.');
    // alert(m);
     var msg1=m[0];
    msg2=m[1];
     
     swal({
    	  title: msg1,
    	  text: msg2,    	
    	  showCancelButton: true,
    	  confirmButtonColor: "#DD6B55",    	  
    	  confirmButtonColor: "#34A534",
    	  confirmButtonText: "Ok",
    	  cancelButtonText: "Cancel",
    	  closeOnConfirm: true,
    	  closeOnCancel: true
    	},
    	 function(isConfirm){
    	  if (isConfirm) {
    		  flag=true;
    		  
    		  ok();
    		  
    		  //swal("Deleted!", "Your imaginary file has been deleted.", "success");
    	  } else {
    		  flag=false;
    		 
    		  ok();
    		    //swal("Cancelled", "Your imaginary file is safe :)", "error");
    	  }
    	});
}

function message_alert1(msg)
{
	//alert("inside message");
	//var flag1="true";
	var m = msg.split('.');
    // alert(m);
     var msg1=m[0];
     msg2=m[1];
     swal({
    	 title: msg1,
    	  text: msg2,
    	  //type: "warning",
    	  showCancelButton: true,
    	 // confirmButtonColor: "#ffffff",
    	  confirmButtonColor: "#34A534",
    	  confirmButtonText: "Ok",
    	  cancelButtonText: "Cancel",
    	  closeOnConfirm: true,
    	  closeOnCancel: true
    	  },
    	  function(isConfirm){
    	  if (isConfirm) {
    		  flag1=true;
    		
    		  ok1();
    		  
    		  //swal("Deleted!", "Your imaginary file has been deleted.", "success");
    	  } else {
    		  flag1=false;
    		 
    		  ok1();
    		    //swal("Cancelled", "Your imaginary file is safe :)", "error");
    	  }
    	});
}


function error_message(msg)
{
    var m = msg.split('.');
    // alert(m);
     var msg1=m[0];
     msg2=m[1];

 	swal({
		title: msg1,
		text: msg2,	
		type:"error",
		confirmButtonColor: ""
		});

     
}



function warning_message(msg)
{
    var m = msg.split('.');
    // alert(m);
     var msg1=m[0];
     msg2=m[1];

 	swal({
		title: msg1,
		text: msg2,	
		type:"warning",
		confirmButtonColor: ""
		});

     
}





function  confirm_alert(msg,type){ 
	//alert("inside confirm");
	var m = msg.split('.');

	 
	    var msg1=m[0];
	    msg2=m[1];
	    
swal({   title: "Are you sure?",   text: msg1,   
				type: "warning",   showCancelButton: true,   
				confirmButtonColor: "#34A534",   
				confirmButtonText: "OK",   
				cancelButtonText: "Cancel",   
				closeOnConfirm: true,   
				closeOnCancel:true 	}, 
				function(isConfirm){   
				    	  if (isConfirm) {
				    		  
				    		  if(type=="save")
								{							
								//alert("inside");
								 imp=true;//Historical Import Part2
								submit_form();
								
								}
							else if(type=="delete")
								{
								del_form();
								}
							else if(type=="modify")
							{
							mod_form();
							}
							else if(type=="ok")
							{
							
							
							flag=true;
								ok_form();						
							}
							
				    		  
				    		  //swal("Deleted!", "Your imaginary file has been deleted.", "success");
				    	  } 
				    	  else {
				    		  
				    		  imp=false;
				    		 // save_form();
				    		//swal("Cancelled", "", "error");
				    		 
				    	  }
				    	});
					
					
					
					
					
					
					

}
	
	

