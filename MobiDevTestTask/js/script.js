var Lines = [];

var RedoLines = [];

var Line = {};

function resetObjValues() {
	Line = {
	x1: "",
	y1: "",
	x2: "",
	y2: "",
	width: 1,
	color: 0,
	isTheFirstClick: true,
	begCoordsSetted: false,
	}
};

resetObjValues();

function getCoordsHover() {
	
	showCords(event.clientX, event.clientY);
	
	Line.x2 = event.clientX;
	Line.y2 = event.clientY;
	
	if(Line.begCoordsSetted){

		prewiew();
	
	}
	
}

function getCoordsClick() {

		Line.color = document.getElementById("lineColor").value;
		Line.width = document.getElementById("lineWidth").value;

		if(Line.isTheFirstClick){

			Line.x1 = event.clientX;
			Line.y1 = event.clientY;
			Line.isTheFirstClick = false;
			Line.begCoordsSetted = true;

		}
		else{

			Line.x2 = event.clientX;
			Line.y2 = event.clientY;
			
			cordsSetted();
		}
}

function converting() {

	Lines[Lines.length] = [Line.x1, Line.y1, Line.x2, Line.y2, Line.width, Line.color];
	
}

function prewiew() {

	clearCanvas();
	Drow(Line.x1,Line.y1,Line.x2,Line.y2, Line.width, Line.color);
	CanvasDrow();

}

function Drow(x1, y1, x2, y2, width, color) {
	var canvasEditor = document.getElementById("canvasEditor");
	var ctx = canvasEditor.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineWidth = width;
	ctx.strokeStyle = color;
	ctx.stroke();
}

function CanvasDrow() {
	for (var i = 0; i < Lines.length; i++) {
		Drow(Lines[i][0],Lines[i][1],Lines[i][2],Lines[i][3],Lines[i][4],Lines[i][5])
	}
}

function cordsSetted(){
	converting();
	clearCanvas();
	CanvasDrow();
	resetObjValues();

}

function clearCanvas() {
	var canvasEditor = document.getElementById("canvasEditor");
	var ctx = canvasEditor.getContext("2d");
	ctx.clearRect(0, 0, 800, 400);
}

function showCords(x, y) {
	if(Line.isTheFirstClick){
	document.getElementById("beginningX").value = x;
	document.getElementById("beginningY").value = y;
	document.getElementById("endX").value = "";
	document.getElementById("endY").value = "";
	}
	else{
	document.getElementById("endX").value = x;
	document.getElementById("endY").value = y;
	}
}

function handDrow() {

	Line.color = document.getElementById("lineColor").value;
	Line.x1 = document.getElementById("beginningX").value;
	Line.y1 = document.getElementById("beginningY").value;
	Line.x2 = document.getElementById("endX").value;
	Line.y2 = document.getElementById("endY").value;
	if((Line.x1 == "") || (Line.y1 == "") || (Line.x2 == "") || (Line.y2 == "")){
		alert("All coordinates are required!");
	}
	else{ 
		cordsSetted();
	}
}

function Undo() {
	
	if(Lines.length > 0){

	RedoLines[RedoLines.length] = Lines[Lines.length - 1];
	Lines.length = Lines.length - 1;
	this.checker = Lines.length + RedoLines.length;

	clearCanvas();
	CanvasDrow();

	}
}

function Redo() {

	if(Undo.checker < (Lines.length + RedoLines.length)) { 
		RedoLines = [];
	}

	if(RedoLines.length > 0){

	Lines[Lines.length]  = RedoLines[RedoLines.length - 1];
	RedoLines.length = RedoLines.length - 1;

	clearCanvas();
	CanvasDrow();

	}
}

function Reset() {
	
	Lines = [];

	RedoLines = [];

	clearCanvas();

	resetObjValues();

	document.getElementById("beginningX").value = "";
	document.getElementById("beginningY").value = "";
	document.getElementById("endX").value = "";
	document.getElementById("endY").value = "";
}


function Save() {
	if (typeof(Storage) !== "undefined") {

		let myJSON = JSON.stringify(Lines);
    	localStorage.setItem("drawning", myJSON);
	}
	else {
		alert("Your browser does not support Local Storage")
	}
}

function Open() {
	if (typeof(Storage) !== "undefined") {

		let myJSON = localStorage.getItem("drawning");
		Lines = JSON.parse(myJSON);

		CanvasDrow();
	}
	else {
		alert("Your browser does not support Local Storage")
	}
}

function openCanvasSizer() {
	document.getElementById('canvasSizer').className = "display";
}

function canvasSizer(width, height){
	width = document.getElementById("width").value;
	height = document.getElementById("height").value;
	document.getElementById("canvasEditor").width = width;
	document.getElementById("canvasEditor").height = height;
	document.getElementById('canvasSizer').className = "notDisplay";

	CanvasDrow();
}

function hideCanvasSizer(){
	document.getElementById('canvasSizer').className = "notDisplay";

}