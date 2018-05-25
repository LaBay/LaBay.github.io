var controller =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict"
	
	var model = __webpack_require__(1);
	var view = __webpack_require__(2);
	
	
	var Manager = {
		onmousemove: function(){controller.model.Implementer.getCoordsHover()},
		onclick: function(){controller.model.Implementer.getCoordsClick()},
		Draw: function(){controller.model.Implementer.handDrow()},
		Reset: function(){controller.model.Implementer.Reset()},
		Undo: function(){controller.model.Implementer.undo()},
		Redo: function(){controller.model.Implementer.redo()},
		Save: function(){controller.model.Implementer.save()},
		Open: function(){controller.model.Implementer.Open()},
		CanvasSize: function(){controller.model.Implementer.openCanvasSizer()},
	};
	
	global.Manager = Manager;
	
	exports.model = model;
	exports.view = view;
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict"
	
	var model = __webpack_require__(1);
	
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

/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map