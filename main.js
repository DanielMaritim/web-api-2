function doFirst() {
	var button = document.getElementById("button");
	button.addEventListener("click",saveData,false);
	//this event listener waits on the button to be clicked to call the function
	display();
}
function saveData () {
	var one = document.getElementById('one').value;
	var two = document.getElementById('two').value;
	sessionStorage.setItem(one,two);
	
	display();
	document.getElementById('one').value="";
	document.getElementById('two').value="";
}
function display (one) {
	var secondbox = document.getElementById("secondbox");
	secondbox.innerHTML="";
	
	for (var x=0;x< sessionStorage.length;x++){
		var a = sessionStorage.key(x);
		var b = sessionStorage.getItem(a);
		
		secondbox.innerHTML += a + "-" +  b + "<br/>";  
	}
}

window.addEventListener("load",doFirst,false);
// a session lasts as long as the browser stays open
//a web storage api is important when you are building a website that needs a data base