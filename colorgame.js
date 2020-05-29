var numSquares = 9;
var colors = colorArr(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var medium = document.querySelector("#medium");
var hard = document.querySelector("#hard");


easy.addEventListener("click", function(){
	hard.classList.remove("selected");
	medium.classList.remove("selected");
	easy.classList.add("selected");
	numSquares = 3;
	colors = colorArr(numSquares);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "#232323";
	for(var i =0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
		squares[i].style.display = "none";
	}
	
	}
	
	
});

medium.addEventListener("click", function(){
	easy.classList.remove("selected");
	medium.classList.add("selected");
	hard.classList.remove("selected");
	numSquares = 6;
	colors = colorArr(numSquares);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "#232323";
	for(var i =0; i<squares.length; i++){
		// squares[i].style.backgroundColor = colors[i];
		// squares[i].style.display = "block";
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else{
		squares[i].style.display = "none";
	}
	
	}
	
});

hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	medium.classList.remove("selected");
	hard.classList.add("selected");
	numSquares = 9;
	colors = colorArr(numSquares);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "#232323";
	for(var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	
});





resetButton.addEventListener("click", function(){
	colors = colorArr(numSquares);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	for(var i =0; i<squares.length; i++){
	// add colors to squares
	squares[i].style.backgroundColor = colors[i];}
	h1.style.backgroundColor = "#232323";
});


colorDisplay.textContent = pickedColor;

for(var i =0; i<squares.length; i++){
	// add colors to squares
	squares[i].style.backgroundColor = colors[i];
	// add click listeners
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor == pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColor(pickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again";
		}else{
			messageDisplay.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}

	});
}

function changeColor(color){
	for (var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function randomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function colorArr(num){
	var arr = []
	for (var i = 0; i<num; i++){
	arr.push(generateColors());}
	return arr;

}