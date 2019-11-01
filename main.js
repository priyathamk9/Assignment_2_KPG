/*
===============================================
Student Name: 	Priyatham Goud Kata
Solution for Assignment 2
===============================================
*/

		//function to append the output of myFunction i.e. values from input text fields
	function append_to_div(div_name, data)
		{ 
            document.getElementById(div_name).innerText += data; 
        } 
		//  function to display the time using getHours method mentioned below
	function addZero(i)
		{
		if (i < 10) 
		{
			i = "0" + i;
		}
		return i;
		}
		//function to perform the validations and produce the required output
	function myFunction() 
		{ 
			var startYear = document.myform.startYear.value;
			var startYearInt= parseInt(startYear);
			var myDate=new Date();
		//using addZero function to get the time in hours and minutes
			var h= addZero(myDate.getHours());
			var m = addZero(myDate.getMinutes());
		//if condition to check the field value of startYear is greater than or eqal to 2000
				if (startYearInt  >= 2000)
				{
		//concatenation of all the field values along with variables having time value to a variable finalmessage
					var finalmessage = h + ":" + m + " - " + document.myform.fullName.value + 
					", " + document.myform.major.value +", " + document.myform.startYear.value +"\n" ;
					append_to_div("my_div", finalmessage + "\n");
			//Emptying the field values after clicking the Add record button
					document.myform.fullName.value = ""; 
					document.myform.major.value= "";
					document.myform.startYear.value = "";
				}
			//Alert to display messaage if startyear is less than 2000
				else 
				{
					window.alert("Incorrect Year:" + startYearInt);
				}
		}

	
