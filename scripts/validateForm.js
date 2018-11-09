function validateForm() {
	
	var name = document.forms["contactUs"]["Name"].value;
	var email = document.forms["contactUs"]["email"].value;
	var phoneNum = document.forms["contactUs"]["pNumber"].value;
	var checked = document.querySelectorAll("input#days:checked");
	if (name == "") {
		alert("You must include your name.");
		return false;
	}
	if (email == "") {
		alert("You must include your email address.");
		return false;
	}
	if (phoneNum == "") {
		alert("You must include your Phone Number.");
		return false;
	}
	if(checked.length == 0) {
		alert("Please select at least one day")
		return false;
	}
	
	alert("Thank you, we will get back to you soon.");
	document.forms["contactUs"]["Name"].value = "";
	document.forms["contactUs"]["email"].value = "";
	document.forms["contactUs"]["pNumber"].value = "";
	//reason code
	var options = document.querySelectorAll("reason");
	for (var i=0; i<options.length; i++) {
		options[i].selected = options[i].defaultSelected;
	}
	document.forms["contactUs"]["info"].value = "";
	//radio button code
	document.getElementById("no").checked = true;
	//check box code
	var checkboxes = document.querySelectorAll("days")
	for (i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked == true) {
			checkboxes[i].checked = false;
		}
	}
}