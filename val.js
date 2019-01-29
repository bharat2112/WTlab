function validation()
	{
		var re=/^[a-zA-Z]+$/;
		var email=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$/;
		var name=document.myform.name.value;
		var mail=document.myform.name.email;
		if(  name== "" ) {
			alert( "Please provide your name!" );
			document.myForm.Name.focus() ;
		
		}
		
			
		if(!re.test(name)){
			alert("Name cannot contains numeric values");
			document.myForm.Name.focus() ;
		}
		if(email.test(mail))
			{
			alert("correct");
			}
		else
			{
			alert("incorrect");
			}
			
	}