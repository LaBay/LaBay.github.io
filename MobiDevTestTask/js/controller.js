"use strict"

var model = require('./model');
var view = require('./view');


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

