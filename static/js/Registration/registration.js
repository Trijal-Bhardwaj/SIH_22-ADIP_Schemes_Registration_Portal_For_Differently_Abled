function selectState(countryId){
			$.ajax({
				type : "GET",
				 url : "getStateData",
				data : {countryId:193},
			 success : function(response){
				 if(response.length>0){
				
					 for(var userlist in response){
						 $('#orgStateId').append($("<option></option>").attr("value",response[userlist].num_state_id).text(response[userlist].str_state_name));
					 }  
					 
				 }
			 }
			});
		}

function selectDistrict(stateId){
	
 $('#orgDistId')
	    .find('option')
	    .remove()
	    .end()
	    
	$.ajax({
		type : "GET",
		 url : "getDistrictData",
		data : {stateId:stateId},
	 success : function(response){
		 if(response.length>0){
			// alert("respon   "+response);
		 $('#orgDistId').append($('<option/>').attr("value", 0).text("Select"));
			 for(var userlist in response){
				 $('#orgDistId').append($("<option></option>").attr("value",response[userlist].num_district_id).text(response[userlist].str_district_name));
			 }  
			 
		 }
	 }
	});
}	


function selectManfState(countryId){
	$.ajax({
		type : "GET",
		 url : "getStateData",
		data : {countryId:countryId},
	 success : function(response){
		 if(response.length>0){
		
			 for(var userlist in response){
				 $('#manfStateId').append($("<option></option>").attr("value",response[userlist].num_state_id).text(response[userlist].str_state_name));
			 }  
			 
		 }
	 }
	});
}


function selectManfDistrict(stateId){
	$.ajax({
		type : "GET",
		url : "getDistrictData",
		data : {stateId:stateId},
		success : function(response){
			if(response.length>0){
				for(var userlist in response){
					$('#manfDistId').append($("<option></option>").attr("value",response[userlist].num_district_id).text(response[userlist].str_district_name));
				}  
	 
			}
			
		}
	});
}


function checkBothPasswords(data){
	let passOne=$('#Pswd').val();
	let passTwo=data;
	//alert("check   "+passOne+" passTwo "+passTwo);

	if(passOne==null || passOne==''){
error_message('Please fill the password field first');
		$('#conPswd').val('');
		return false;
	}else if(passOne!=passTwo){
		error_message('Both passwords do not match!');
		$('#conPswd').val('');
		return false;
	}else{
		return true;
	}
	
}


function changeCaptcha()
{
	
	$.ajax({
		type:"GET",
		url:"getCaptcha",
		success:function(data){
			document.getElementById("loginCaptcha").value = data;
			
		}
	
	});
}


function changeRegistrationCaptcha(){
	$.ajax({
		type:"GET",
		url:"getCaptcha",
		success:function(data){
			document.getElementById("registrationCaptchaOne").innerHTML = data;
			$(regCaptcha).val('');
		}
	
	});
}

function checkUserExist(data){
	
	let userName=data.value;
	let id='#'+data.id;
	$.ajax({
		type : "GET",
		url  : "getUserNameStatus",
		data : {userName:userName},
	 success : function(response){
		if(response==true){
			error_message('This user name already present , please choose another one');
			$('#userName').val('');
			$(id).val('');
			$('#frm').bootstrapValidator('revalidateField', $(id));

		}
	 }
	});
}


window.onload = function() {
	 const myInput = document.getElementById('regCaptcha');
	 myInput.onpaste = function(e) {
	   e.preventDefault();
	 }
}

function getImage() {
	var tCtx = document.getElementById('textCanvas').getContext('2d'),
    imageElem = document.getElementById('image');
	var dd=$("#loginCaptcha").val();
	tCtx.canvas.width = tCtx.measureText(this.value).width;
	tCtx.fillText(dd, 0, 10);
	imageElem.src = tCtx.canvas.toDataURL();
}

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



$(document).ready(function() {
	
	$("#frm")
	.bootstrapValidator(
		{
			fields : {
			
				userName : {
					validators : {
						emailAddress: {
	                        message: 'Please supply a valid email address'
	                    },
	                   
						notEmpty : {
							message : "User Name is required and can\'t be empty"
						},
	                    regexp:{
	                    	 regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
	                         message: 'Please enter a valid email address'
	                    }
					}
				},
				password : {
					validators : {
						notEmpty : {
							message : "Password is required and can\'t be empty"
						},
						regexp : {
							regexp : /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,25}$/,
							message : "Password not in proper format"
						},
						/*stringLength : {
							min : 8,
							max : 25,
							message : "Password can contain maximum of 25 characters"
						}*/
					}
				},
				 strName : {
		           	 validators : {						
								notEmpty : {
									message : 'Name is required and cannot be empty'
								},
								stringLength : {
									max : 50,
									message : 'Name can contain maximum of 50 characters'
								},
								regexp : {
									regexp : /^[a-zA-Z\s]+$/,
									message : 'The Name can only consist of alphabets'
								}

							}
						},
						
						
						empDesg : {
				           	 validators : {						
										notEmpty : {
											message : 'Designation is required and cannot be empty'
										},
										stringLength : {
											max : 50,
											message : 'Designation can contain maximum of 50 characters'
										},
										regexp : {
											regexp : /^[a-zA-Z\s]+$/,
											message : 'Designation can only consist of alphabets'
										}

									}
								},
								empMobileNo: {
					                validators: {
					                	notEmpty : {
											message : "Mobile number is required and can\'t be empty"
										},
					                    regexp : {
											regexp : /^[0-9\-]+$/,
											message : "Please enter valid numbers"
										},
										stringLength : {
											min : 10,
											max : 10,
											message : "Number having 10 digit only  "
										}
					                }
					         },
								
						empNo : {
							validators : {
								notEmpty : {
									message : 'Employee No is required and cannot be empty'
								},
								stringLength : {
									max : 20,
									message : 'Employee No must be less than 20 characters'
								}, 
								regexp : {
									regexp : /^[a-zA-Z0-9.,\-\/\@\+\s &()]+$/,
									message : 'Employee No should be less than 20 characters and only alphabet,numbers, special characters(. , / () - & @ +) and white spaces are permitted'
								}

							}
					},
					
					empGender  : {
						  validators: {
			                	 callback: {
			                            message: 'Please choose an option',
			                            callback: function(value, validator, $field) {
			                                // Get the selected options
			                                var options = validator.getFieldElements('empGender').val();
			                                return (options != 0 );
			                            }
			                        }
			                }
					},
					userType  : {
						  validators: {
			                	 callback: {
			                            message: 'Please choose an option',
			                            callback: function(value, validator, $field) {
			                                // Get the selected options
			                                var options = validator.getFieldElements('userType').val();
			                                return (options != 0 );
			                            }
			                        }
			                }
					},
					
				orgType : {
	 				validators : {
	 					callback: {
	 				           message: 'Please specify organization type',
	 				           callback: function(value, validator, $field) {
	 				               
	 				               var options = validator.getFieldElements('orgType').val();

	 				               return (options != 0);
	 				           }
	 					}
	 				}
			  },
				orgName : {
					validators : {
						notEmpty : {
							message : "Name is required and can\'t be empty"
						},
						regexp : {
							regexp : /^[a-zA-Z0-9().\/,\s\-]+$/,
							message : "Only alphabet, numbers, special characters( / , . () - ) and white spaces are permitted"
						},
						stringLength : {
							min : 1,
							max : 250,
							message : "Name can contain maximum of 250 characters"
						}
					}
				},
				orgAddress : {
					validators : {
						notEmpty : {
							message : "Address is required and can\'t be empty"
						},
						regexp : {
							regexp : /^[a-zA-Z0-9().\/,\s\-\:]+$/,
							message : "Only alphabet, numbers, special characters( / , . () - ) and white spaces are permitted"
						},
						stringLength : {
							min : 1,
							max : 200,
							message : "Address can contain maximum of 200 characters"
						}
					}
				},
				orgCountryId : {
	 				validators : {
	 					callback: {
	 				           message: 'Please specify country',
	 				           callback: function(value, validator, $field) {
	 				               
	 				               var options = validator.getFieldElements('orgCountryId').val();

	 				               return (options != 0);
	 				           }
	 					}
	 				}
			  },
			  orgDistId : {
	 				validators : {
	 					callback: {
	 				           message: 'Please specify district',
	 				           callback: function(value, validator, $field) {
	 				               
	 				               var options = validator.getFieldElements('orgDistId').val();

	 				               return (options != 0);
	 				           }
	 					}
	 				}
			  }, 
			  orgStateId : {
	 				validators : {
	 					callback: {
	 				           message: 'Please specify state',
	 				           callback: function(value, validator, $field) {
	 				               
	 				               var options = validator.getFieldElements('orgStateId').val();

	 				               return (options != 0);
	 				           }
	 					}
	 				}
			  },
			  orgPincode: {
	                validators: {
	                    notEmpty: {
	                        message: 'Please supply your zip code'
	                    },
	                    regexp : {
							regexp : /^[0-9]+$/,
							message : "Only numbers are allowed"
						},
						stringLength : {
							min : 6,
							max : 6,
							message : "pincode must be of 6 digits"
						}
	                }
	           },
	           orgContactNumber: {
	                validators: {
	                	 notEmpty: {
		                        message: 'Please supply your contact code'
		                },
	                    regexp : {
							regexp : /^[0-9\-]+$/,
							message : "Only numbers are allowed"
						},
						stringLength : {
							min : 10,
							max : 10,
							message : "contact number can contain  10 numbers"
						}
	                }
	            },
	            orgFaxNumber: {
	                validators: {
	                   
	                    regexp : {
							regexp : /^[0-9\-]+$/,
							message : "Only numbers are allowed"
						},
						stringLength : {
							min : 10,
							max : 10,
							message : "Fax number can contain 10 numbers"
						}
	                }
	            },
	            orgEmailId : {
					validators : {
						emailAddress: {
	                        message: 'Please supply a valid email address'
	                    },
	                    regexp:{
	                    	 regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
	                         message: 'Please enter a valid email address'
	                    },
						stringLength : {
							min : 5,
							max : 50,
							message : "email id can contain maximum of 50 characters"
						}
					}
				}, 
				orgPanNumber : {
						validators : {
							/* notEmpty: {
			                        message: 'Please Enter your PAN number'
			                    },*/
			                    regexp : {
									regexp :/^[a-zA-Z0-9().\\/,\\+\\-]+$/,
									message : "Please enter valid pan number"
								},
								stringLength : {
									min : 10,
									max : 10,
									message : "PAN number can contain  10 numbers"
								}
						}
				}, 
				cin : {
					validators : {
						/* notEmpty: {
							 message: 'Please Enter your CIN number'
		                    },*/
		                    regexp : {
								regexp :/^[a-zA-Z0-9]+$/,
								message : "Please enter valid CIN number"
							},
							stringLength : {
								min : 21,
								max : 21,
								message : "CIN number can contain 21 numbers"
							}
					}
			},
				
				/*gstnumber : {
					validators : {
						 notEmpty: {
		                        message: 'Please supply your GST number'
		                    },
		                    regexp : {
								regexp :/^[a-zA-Z0-9().\\/,\\+\\-]+$/,
								message : "Please enter valid GST number"
							},
							stringLength : {
								min : 10,
								max : 20,
								message : "GST number can contain maximum of 20 characters"
							}
					}
			},*/
				
				orgWebsite : {
					validators : {
						
						regexp : {
							regexp : /^[a-zA-Z0-9().\/,\s\-\//\:]+$/,
							message : "Only alphabet, numbers, special characters( / , . () - ) and white spaces are permitted"
						},
						stringLength : {
							min : 1,
							max : 30,
							message : "Website name can contain maximum of 30 characters"
						}
					}
				},
				gsOne : {
					validators : {
						regexp : {
							regexp : /^[a-zA-Z0-9().\\/,\\+\\-]+$/,
							message : "Only alphabet, numbers, special characters( / , . () - ) and white spaces are permitted"
						},
						stringLength : {
							min : 1,
							max : 50,
							message : "GS1 number can contain maximum of 50 characters"
						}
					}
				},
				contactPersonName : {
					validators : {
						notEmpty : {
							message : "Contact Person Name is required and can\'t be empty"
						},
						regexp : {
							regexp : /^[a-zA-Z0-9().\/,\s\-]+$/,
							message : "Only alphabet, numbers, special characters( / , . () - ) and white spaces are permitted"
						},
						stringLength : {
							min : 1,
							max : 50,
							message : "Name can contain maximum of 50 characters"
						}
					}
				},
				contactPersonEmail : {
					validators : {
						notEmpty : {
							message : "Contact Person Email is required and can\'t be empty"
						},
						emailAddress: {
	                        message: 'Please supply a valid email address'
	                    },
						stringLength : {
							min : 1,
							max : 50,
							message : "Email id can contain maximum of 50 characters"
						}
					}
				},
				 orgPanNumber: {
		                validators: {
		                   
		                    regexp : {
								regexp : /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
								message : "AAAA1234A format is allowed"
							},
							stringLength : {
								min : 10,
								max : 10,
								message : "PAN must be of 10 limit"
							}
		                }
		           },
		           
				darpanid : {
					validators : {
						notEmpty : {
							message : "darpan id is required and can\'t be empty"
						},
						regexp : {
							regexp : /^[a-zA-Z0-9().\/,\s\-]+$/,
							message : "Only alphabet, numbers, special characters( / , . () - ) and white spaces are permitted"
						},
						stringLength : {
							min : 1,
							max : 20,
							message : "darpan id can contain maximum of 20 characters"
						}
					}
				},
				
				contactPerDesg : {
					validators : {
						notEmpty : {
							message : "Contact Person Designation is required and can\'t be empty"
						},
					
						
						regexp : {
							regexp : /^[a-zA-Z0-9().\/,\s\-\&]+$/,
							message : "Only alphabet, numbers, special characters( / , . () - ) and white spaces are permitted"
						},
						stringLength : {
							min : 1,
							max : 50,
							message : "Designation can contain maximum of 50 characters"
						}
					}
				},
				contactPersonMobileNo: {
		                validators: {
		                	notEmpty : {
								message : "Contact Person Mobile number is required and can\'t be empty"
							},
		                    regexp : {
								regexp : /^[0-9\-]+$/,
								message : "Please enter valid numbers"
							},
							stringLength : {
								min : 10,
								max : 10,
								message : "Number must be of 10 digit only"
							}
		                }
		         }	         
			}
		});
});


function validform() {
	
	
	 let userName=$('#userName').val();
	 if(userName==null || userName==""){
		 alert('please enter username');
		 return false;
	 }
	 let Pswd=$('#Pswd').val();
	 if(Pswd==null || Pswd==""){
		 alert('please enter Password');
		 return false;
	 }
	 
	 
	 let conPswd=$('#conPswd').val();
	 if(conPswd==null || conPswd==""){
		 alert('please enter Confirm Password');
		 return false;
	 }
	 
	 let manfOrgType=$('#orgType').val();
	 if(manfOrgType=='0'){
		 alert('Please select Organization type');
		 return false;
	 }
	 let orgName=$('#orgName').val();
	 if(orgName==null || orgName==""){
		 alert('please enter Organization Name');
		 return false;
	 }
	 
	 let orgAddress=$('#orgAddress').val();
	 if(orgAddress==null || orgAddress==""){
		 alert('please enter Organization Address');
		 return false;
	 }

	 let manfCountryId=$('#orgCountryId').val();
	 if(manfCountryId=='0'){
		 alert('Please select country');
		 return false;
	 }
	 
	 let manfStateId=$('#orgStateId').val();
	 if(manfStateId=='0'){
		 alert('Please select State');
		 return false;
	 } 
	 
	 let manfDistId=$('#orgDistId').val();
	 if(manfDistId=='0'){
		 alert('Please select District');
		 return false;
	 }
	 
	 
	 let orgPincode=$('#orgPincode').val();
	 if(orgPincode==null || orgPincode==""){
		 alert('please enter Organization Pin Code');
		 return false;
	 }
	 /*let orgPanNumber=$('#orgPanNumber').val();
	 if(orgPanNumber==null || orgPanNumber==""){
		 alert('please enter Organization PAN number');
		 return false;
	 }*/
	 
	 let contactPersonName=$('#contactPersonName').val();
	 if(contactPersonName==null || contactPersonName==""){
		 alert('please enter Contact Person Name');
		 return false;
	 }
	 
	 let contactPerDesg=$('#contactPerDesg').val();
	 if(contactPerDesg==null || contactPerDesg==""){
		 alert('please enter Contact Person Designation');
		 return false;
	 }
	 
	 let contactPersonMobileNo=$('#contactPersonMobileNo').val();
	 if(contactPersonMobileNo==null || contactPersonMobileNo==""){
		 alert('please enter Contact Person Mobile Number');
		 return false;
	 }
	 
	 let contactPersonEmail=$('#contactPersonEmail').val();
	 if(contactPersonEmail==null || contactPersonEmail==""){
		 alert('please enter Contact Person Mobile Email');
		 return false;
	 }
	 
	 let addressProofId=$('#addressProofId').val();
	 var abc=$('#orgType').val();
	 if(abc==11){
		 //var abc=$('#orgType').val();;
		// alert('alert   '+abc);
		 if(addressProofId==null || addressProofId==""){
			 error_message('please Upload Address Proof pdf');
		 return false;
		 }
		 
	 }	
	
	
	 /*let checkBoxOne1 = document.getElementById("agreementCheckBox_beneficiary");
	 if (checkBoxOne1.checked == false){
		 alert("Please Tick aggrement checkbox");
		 return false; 
	 }*/
	 let regCaptcha=$('#regCaptcha').val();
	 if(regCaptcha==''){
		 alert('please enter captcha');
		 return false;
	 }
	 
	 var bV = $("#frm").data('bootstrapValidator');
	 bV.validate();
	 if(bV.isValid()){ 
			confirm_alert('Do you Really want to save?','save');
		}
		else{
			
		}
	 
	
}

function  confirm_alert(msg,type){
	var m = msg.split('.');
	    var msg1=m[0];
	    msg2=m[1];
		swal(
				{  		
				title: "Are you sure?",   text: msg1,   
				type: "warning",  
				showCancelButton: true,   
				confirmButtonColor: "#34A534",   
				confirmButtonText: "OK",   
				cancelButtonText: "Cancel",   
				closeOnConfirm: true,   
				closeOnCancel:true 
				}, 
				function(isConfirm){   
				    	  if (isConfirm) {
				    		  
				    		  if(type=="save")
								{				
				    			  $("#infosavebutton").attr("disabled", true);
				    			  let userName=$('#userName').val();
				    			  let Pswd=$('#Pswd').val();
				    			  var Message=$('#Pswd').val();
				    			  //var hashcheck =  CryptoJS.SHA256(Message);
				    			  var randomNumber=Math.ceil(Math.random() * 10000);
				    			  var base = window.btoa(randomNumber+' ### '+Message+' ### '+Math.ceil(Math.random() * 10000));
				    			  var base2 = window.btoa(base);
				    			  var base3 = window.btoa(base2);
				    			  var base4 = window.btoa(base3);
				    			  $('#Pswd').val(base4);
				    			  
				    			  
				    			  $('#frm').submit();
								}
							else if(type=="delete")
								{
								 flag=true; 
								submit_form_delete();
								}
							else if(type=="modify")
							{
								submit_form_update();
							}
							else if(type=="ok")
							{
								 flag=true; 
								submit_form_delete();	
								}
					    	  } 

				    	  else {
				    		  imp=false;
				    	  }
				    	});
}

/*function checkGstnNumber(data){
	$.ajax({
		type : "get",
		 url : "checkGstnNumber",
	    data : {gstnNumber:data},
	 success : function(response){
		 if(response=='alreadyPresent'){
			 alert("This GSTN Number is already registered with some other company");
			 $('#gstnumber').val('');
		 }
	 }
	});
}*/


function fileValidation(id){
	var fileInput = document.getElementById(id);
	var filePath = fileInput.value;
	var allowedExtensions = /(\.pdf)$/i;
	 if(!allowedExtensions.exec(filePath)){
	        alert('Please upload file having extensions .pdf only.');
	 
	        fileInput.value = '';
	        return false;
	  }
}


function getSignatureChecksum(){
	 
	 var form = $('#frm')[0];
	 var data = new FormData(form);
	 
	 $.ajax({
		  	type: "POST",
			url : "getSignatureChecksum",
			enctype: 'multipart/form-data',
		    data : data,	
		    cache : false,
           processData : false,
           contentType : false,
           timeout: 600000,
		 	success : function(response){
			 if(response.length>0){
				 
				
				 $('#addressProofDocument').val(response);
			 }else{
				 alert("Error");
			 }
		 }
		});
	
	 
	 
}

