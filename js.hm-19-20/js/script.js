"use strict"

$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",

	function(skills){
		skills = _.union(_.flattenDepth(_.map(skills, 'skills'))).sort();
		console.log("Array of skills:", skills);
	});
	
$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",

	function(names){
		names = _.map(_.sortBy(names, function (obj){return obj.friends.length;}), 'name');
		console.log("Array of names:", names);
	});	
	
$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",

	function(friends){
		friends = _.uniq(_.map(_.flattenDeep(_.map(friends,'friends')),'name')).sort();
		console.log("Array of friends:", friends);
	});