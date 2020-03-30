//define global variables here
var ul = document.querySelector("ul");
var enterBtn = document.getElementById("enterBtn");
var myInput = document.getElementById("myInput");

//create list element with doneBtn 
function createListElement() {
var li = document.createElement("li");
		li.appendChild(document.createTextNode(myInput.value))
		ul.appendChild(li);
		myInput.value = "";

var doneBtn = document.createElement("button");
	doneBtn.className = "doneBtn";
	doneBtn.appendChild(document.createTextNode("Done"))
		li.appendChild(doneBtn)
	};

//add click event listener to enterBtn
enterBtn.addEventListener("click", function () {
	if (myInput.value.length > 0) { 
		createListElement ()	
	}
});

//add keypress event listener to enterBtn
myInput.addEventListener("keypress", function (event) {
	if (myInput.value.length > 0 && event.keyCode === 13) {
		createListElement ()
	}
});

//remove li element on doneBtn click
ul.addEventListener('click', function(event) {
  if (event.target.className === "doneBtn") {
	event.target.parentElement.style.display = "none";
  }
}, false);

//cross out li items on click
//inherited by button elements: fix somehow at later date
ul.addEventListener('click', function(event) {
  if (event.target.tagName === "LI") {
	event.target.classList.toggle("checked");
  }
}, false);





