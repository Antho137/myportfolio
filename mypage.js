function updateYear() {
	var now = new Date();
	var theYear = now.getFullYear();
	var thisYear = document.getElementById("ye");
	thisYear.innerHTML = theYear;
	return theYear;
}
updateYear();