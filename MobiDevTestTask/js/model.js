"use strict"

var Implementer = {

	lines: [],
	redoLines: [],
	obj: {},
	//
	resetObjValues: function() {
		Implementer.obj = {
			x1: "",
			y1: "",
			x2: "",
			y2: "",
			width: 1,
			color: 0,
			isTheFirstClick: true,
			begCoordsSetted: false,
		}
	},
	//
	getCoordsHover: function() {
			
		controller.view.Drawer.showCords(event.clientX, event.clientY);
	
		this.obj.x2 = event.clientX;
		this.obj.y2 = event.clientY;
		
		if(this.obj.begCoordsSetted){

			controller.view.Drawer.prewiew(this.obj, this.lines);
		
		}
	},
	//
	getCoordsClick: function() {


		this.obj.color = document.getElementById("lineColor").value;
		this.obj.width = document.getElementById("lineWidth").value;

		if(this.obj.isTheFirstClick){

			this.obj.x1 = event.clientX;
			this.obj.y1 = event.clientY;
			this.obj.isTheFirstClick = false;
			this.obj.begCoordsSetted = true;

		}
		else{

			this.obj.x2 = event.clientX;
			this.obj.y2 = event.clientY;
			
			this.cordsSetted();
		}

	},
	//
	converting: function(object, arr) {
		
		arr[arr.length] = [object.x1, object.y1, object.x2, object.y2, object.width, object.color];
	
	},
	//
	cordsSetted: function(){
		this.converting(this.obj, this.lines);		
		controller.view.Drawer.clearCanvas();
		controller.view.Drawer.canvasDrow(this.lines);
		this.resetObjValues();

	},
	//
	handDrow: function() {
		function handDrowRun(object){
			object.width = document.getElementById("lineWidth").value;
			object.color = document.getElementById("lineColor").value;
			object.x1 = document.getElementById("beginningX").value;
			object.y1 = document.getElementById("beginningY").value;
			object.x2 = document.getElementById("endX").value;
			object.y2 = document.getElementById("endY").value;
			if((object.x1 == "") || (object.y1 == "") || (object.x2 == "") || (object.y2 == "")){
				alert("All coordinates are required!");
			}
			else{ 
				Implementer.cordsSetted();
			}
		};
		handDrowRun(this.obj);
	},
	//
	undo: function() {
		function undoProceed(arr1, arr2) {
			if(arr1.length > 0){

				arr2[arr2.length] = arr1[arr1.length - 1];
				arr1.length = arr1.length - 1;
				Implementer.undo.checker = arr1.length + arr2.length;

				controller.view.Drawer.clearCanvas();
				controller.view.Drawer.canvasDrow(Implementer.lines);
			}
		};

		undoProceed(this.lines, this.redoLines);
	},
	//
	redo: function() {
		function redoProceed(arr1, arr2) {
			if(Implementer.undo.checker < (arr1.length + arr2.length)) { 
				arr2 = [];
			}

			if(arr2.length > 0){

				arr1[arr1.length]  = arr2[arr2.length - 1];
				arr2.length = arr2.length - 1;

				controller.view.Drawer.clearCanvas();
				controller.view.Drawer.canvasDrow(Implementer.lines);
			}
		};
		redoProceed(this.lines, this.redoLines);
	},
	//
	Reset: function() {
	
		this.lines = [];

		this.redoLines = [];

		controller.view.Drawer.clearCanvas();

		this.resetObjValues();

		document.getElementById("beginningX").value = "";
		document.getElementById("beginningY").value = "";
		document.getElementById("endX").value = "";
		document.getElementById("endY").value = "";
	},
	//
	save: function() {
		if (typeof(Storage) !== "undefined") {

			let myJSON = JSON.stringify(this.lines);
			localStorage.setItem("drawning", myJSON);
		}
		else {
			alert("Your browser does not support Local Storage");
		}
	},
	//
	Open: function() {
		if (typeof(Storage) !== "undefined") {

			let myJSON = localStorage.getItem("drawning");
			this.lines = JSON.parse(myJSON);

			controller.view.Drawer.canvasDrow(this.lines);
		}
		else {
			alert("Your browser does not support Local Storage");
		}
	},
	//
	openCanvasSizer: function() {
		document.getElementById('canvasSizer').className = "display";
	},
	//
	canvasSizer: function(width, height){
		width = document.getElementById("width").value;
		height = document.getElementById("height").value;
		document.getElementById("canvasEditor").width = width;
		document.getElementById("canvasEditor").height = height;
		document.getElementById('canvasSizer').className = "notDisplay";

		controller.view.Drawer.clearCanvas();
		controller.view.Drawer.canvasDrow(this.lines);
	},
	//
	hideCanvasSizer: function(){
		document.getElementById('canvasSizer').className = "notDisplay";

	}
}

Implementer.resetObjValues();

exports.Implementer = Implementer;