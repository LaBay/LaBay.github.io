requirejs.config({
	paths: {
	
		'tmpl': 'tmpl',
	},
	shim:{

		'tmpl': {
			exports: 'tmpl'
		}
	}
});

require(
	[
	'jquery','tmpl','model','view','controller'
	],
function(jquery, tmpl, Model, View, Controller){
	$(function (){
	var firstToDoList =['eat', 'drink', 'sleep'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
	})	
});