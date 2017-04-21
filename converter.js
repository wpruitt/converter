function toCelsius (tempInput) {
 			var fcTemp = ((tempInput - 32) / 1.8);
 			document.getElementById("output").innerHTML = fcTemp;
	 		if (fcTemp >= 32){
	 			document.getElementById("output").style.color = "red";
	 		}
	 		else if (fcTemp <= 0){
	 			document.getElementById("output").style.color = "blue";
	 		}
	 		else {
	 			document.getElementById("output").style.color = "green";
	 		}
}

function toFahrenheit (tempInput) {
 		var cfTemp = ((tempInput * 1.8) + 32);
 		document.getElementById("output").innerHTML = cfTemp;
 		if (cfTemp >= 90){
	 			document.getElementById("output").style.color = "red";
 		}
 		else if (cfTemp <= 32){
 			document.getElementById("output").style.color = "blue";
 		}
 		else {
 			document.getElementById("output").style.color = "green";
		}
}		

//Get a reference to the button element in the DOM
var button = document.getElementById("converter").addEventListener("click", function(){
	document.getElementById("output").style.visibility = "";
	});
var clear = document.getElementById("clear").addEventListener("click", function(){
	document.getElementById("tempIn").value = 0;
});
var cleardisplay = document.getElementById("clear").addEventListener("click", function(){
	document.getElementById("output").style.visibility = "hidden";
});
var clearTemp = document.getElementById("clear").addEventListener("click", function(){
	document.getElementById("output").style.color = "white";
});


// var whichTemp = document.getElementById("celsius").checked;
var useConv = 0;
// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(tempInput) {
	console.log("event", tempInput);
	if (document.getElementById("celsius").checked === true){
		useConv = toCelsius(tempInput)
	}	
	else {
		useConv = toFahrenheit(tempInput)
	}
}
// function determineConverter (clickEvent) {
// 	console.log("event", clickEvent);
// }

// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);
// 	function whichTempTo() {

// }

//document.getElementById("converter").addEventListener("click", determineConverter()); /*Links to button in HTML.adds event to button(when clicked, execute this func, ?bubble-to parent or capture-to button?) */
//console.log(event);
// var tempIn = document.getElementById("tempIn").addEventHandler("enter", fucntion(){

// });

var tempInput;
//document.getElementById("output").innerHTML = var tempOut
document.getElementById("tempIn").addEventListener("keydown", function(){
	console.log("event", event);
	if (event.key === "Enter"){
		tempInput = document.getElementById("tempIn").value;
		console.log(tempInput);
		determineConverter(tempInput);
	}
	else{
		console.log("no");
	}
})





