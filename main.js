/*
===============================================
Student Name: 	Priyatham Goud Kata
Solution for Assignment 2
===============================================
*/


	function append_to_div(div_name, data)
		{ 
            document.getElementById(div_name).innerText += data; 
        } 
	function addZero(i)
		{
		if (i < 10) 
		{
			i = "0" + i;
		}
		return i;
		}
	function myFunction() 
		{ 
			var startYear = document.myform.startYear.value;
			var startYearInt= parseInt(startYear);
			var myDate=new Date();
			var h= addZero(myDate.getHours());
			var m = addZero(myDate.getMinutes());
				if (startYearInt  >= 2000)
				{
					var finalmessage = h + ":" + m + " - " + document.myform.fullName.value + 
					", " + document.myform.major.value +", " + document.myform.startYear.value +"\n" ;
					append_to_div("my_div", finalmessage + "\n");
					document.myform.fullName.value = ""; 
					document.myform.major.value= "";
					document.myform.startYear.value = "";
				}
				else 
				{
					window.alert("Incorrect Year:" + startYearInt);
				}
		}

	