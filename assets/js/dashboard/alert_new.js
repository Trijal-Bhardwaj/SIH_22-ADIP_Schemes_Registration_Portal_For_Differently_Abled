function error_message(msg)
{
 	swal({
		title: msg,	
		type:"error",
		confirmButtonColor: "#237DA7"
		});
}

function warning_message(msg)
{
 	swal({
		title: msg,
		type:"warning",
		confirmButtonColor: "#237DA7"
		});  
}

function ok_message(msg)
{
 	swal({
		title: msg,
		type:"success",
		confirmButtonColor: "#237DA7"
		});
}