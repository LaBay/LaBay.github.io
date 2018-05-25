"use strict"

var model = require('./model');

var Drawer = {

	prewiew: function(object, arr) {
		this.clearCanvas();
		this.drow(object.x1,object.y1,object.x2,object.y2, object.width, object.color);
		this.canvasDrow(arr);
	},
	//
	drow: function (x1, y1, x2, y2, width, color) {

		var canvasEditor = document.getElementById("canvasEditor");
		var ctx = canvasEditor.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.lineWidth = width;
		ctx.strokeStyle = color;
		ctx.stroke();
	},
	//
	canvasDrow: function (arr) {
		
		for (let i = 0; i < arr.length; i++) {
			this.drow(arr[i][0], arr[i][1], arr[i][2], arr[i][3], arr[i][4], arr[i][5])
		};
	},
	//
	clearCanvas: function(width, height) {
		width = document.getElementById("width").value;
		height = document.getElementById("height").value;
		var canvasEditor = document.getElementById("canvasEditor");
		var ctx = canvasEditor.getContext("2d");
		ctx.clearRect(0, 0, width, height);
},
	//
	showCords:function (x, y) {
		if(controller.model.Implementer.obj.isTheFirstClick){
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
}

exports.Drawer = Drawer;