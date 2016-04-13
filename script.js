var block = document.getElementById("output");

function handleClick() {
	block.innerHTML = "Jerk, stop poking me";
	block.style.backgroundColor = "red"
}

function clearClick() {
	block.innerHTML = "";
	block.style.backgroundColor = "deepskyblue"
}


block.onmouseover = handleClick;
block.onmouseout = clearClick;

//function handleInput() {
//	block.innerHTML = input.value;
//	
//}
//
//input.onkeyup = handleInput;

var input = document.getElementById("text");
var button = document.getElementById("button");


function handleButtonPress() {
	block.innerHTML = input.value;
	input.value = "";
}

button.onclick = handleButtonPress;