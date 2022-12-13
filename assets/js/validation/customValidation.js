function ValidateName(objOne) {
var reg=/^[a-zA-Z ]*$/;
	let obj=objOne.value;
	let id="#"+objOne.id;
	if(!reg.test(obj)){
	  alert("Special Characters not allowed");
	  $(id).val("");
    }
}

function characterWithSpace(objOne) {
	var reg=/^([a-zA-Z]+\s)*[a-zA-Z]+$/
		let obj=objOne.value;
		let id="#"+objOne.id;
		if(!reg.test(obj)){
		  alert("Special characters and numbers are not allowed");
		  $(id).val("");
	    }
}

function charactersOnly(objOne){
	let obj=objOne.value;
	let id="#"+objOne.id;
	let reg=/^[a-zA-Z]+$/
	if(!reg.test(obj)){
		alert("Only characters are allowed");
		$(id).val("");
	}
}

function numbersOnly(objOne){
	let obj=objOne.value;
	let id="#"+objOne.id;
	let reg=/^[0-9]+$/
	if(!reg.test(obj)){
		alert("only numbers are allowed");
		$(id).val("");
	}
}

function  ValidateEmail(objOne) {
	let obj=objOne.value;
    let id="#"+objOne.id;
	//var reg=/^[a-zA-Z0-9.]+@[a-z]+[.com]+$/" 
		var reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		if(!reg.test(obj)){
       alert("Please fill email properly");
       $(id).val("");
    }
}

function ValidateString(objOne){
	let obj=objOne.value;
	let id="#"+objOne.id;
	let reg=/^[a-zA-Z0-9.@#-]+$/
	if(!reg.test(obj)){
		alert("this special character not allowed");
		$(id).val("");
	}
}

function ValidateWebsiteName(objOne){
	let obj=objOne.value;
	let id="#"+objOne.id;
	let reg=/^[a-zA-Z0-9.\/@#-]+$/
	if(!reg.test(obj)){
		alert("this special character not allowed");
		$(id).val("");
	}
}

function NumbersAndCharacters(objOne){
	let obj=objOne.value;
	let id="#"+objOne.id;
	let reg=/^[a-zA-Z0-9.@#-]+$/
	if(!reg.test(obj)){
		alert("this special character not allowed");
		$(id).val("");
	}
}



function ValidateMobileNumber(objOne){
	let obj=objOne.value;
	let id="#"+objOne.id;
	let reg=/^\d{10}$/
	if(!reg.test(obj)){
		alert("please enter correct valid number");
		$(id).val("");
	}
}

function ValidationSepratedByComma(objOne){
	let obj=objOne.value;
	let id="#"+objOne.id;
	let reg=/^[a-zA-Z,. ]+$/ 
	if(!reg.test(obj)){
		alert("Special character not allowed");
		$(id).val("");
	}
}

function TwoDegitsValidation(objOne){
	let obj=objOne.value;
	let id="#"+objOne.id;
	let reg=/^\d{2}$/
	if(!reg.test(obj)){
		alert("Maximum 2 degits allowed");
		$(id).val("");
	}
}

function FourDegitsValidation(objOne){
	let obj=objOne.value;
	let id="#"+objOne.id;
	let reg=/^\d{2,4}$/
	if(!reg.test(obj)){
		alert("Minimum 2 and Maximum 4 degits allowed");
		$(id).val("");
	}
}

function FourDegitsValidation(objOne){
	let obj=objOne.value;
	let id="#"+objOne.id;
	//let reg=/^\d{1,4}$/
	let reg=/^[0-9.]+$/
		if(!reg.test(obj)){
		alert("Minimum 1 and Maximum 4 degits allowed");
		$(id).val("");
	}
}

function AcceptOnlyCharAndNum(objOne){
	let obj=objOne.value;
	let id="#"+objOne.id;
	let reg=/^[0-9]+$/
	if(!reg.test(obj)){
		alert("Only numbers are allowed");
		$(id).val("");
	}	
}	


function passwordValidateOneTwo(objOne){
	let obj=objOne.value;
	let id="#"+objOne.id;
	let reg=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/
	if(!reg.test(obj)){
		if(obj.length>10)
			alert("Password should contain 10 characters");
		else if(obj.length<6)
			alert("Password must contain at least 6 characters");
		else
			alert("password should contain atleast one number and one special character");
		$(id).val("");
	}else{
		if(obj.length>16){
			alert("Password should contain 10 characters");
			$(id).val("");
		}
			
		if(obj.length<6){
			alert("Password must contain at least 6 characters");
			$(id).val("");
		}
	}	
}


function passwordValidate(objOne){
		
	let obj=objOne.value;
	let id="#"+objOne.id;
	let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
		if(!reg.test(obj)){
			alert("password should contain atleast one number and one special character , one lowercase letter and one uppercase letter");
			$(id).val("");
		}
}


function dateVAlidation(objOne){
	let reg=/^\d{2}\/\d{2}\/\d{4}$/
	let obj=objOne.value;
	let id="#"+objOne.id;
	if(!reg.test(obj)){
		alert("Invalied date format");
		$(id).val("");
		}	
	}

function addressVAlidation(objOne){
	let reg=/^[a-zA-Z0-9\s,.'-\/]*$/
		let obj=objOne.value;
		let id="#"+objOne.id;
		if(!reg.test(obj)){
			alert("Special characters are not allowed");
			$(id).val("");
		}	
	}


