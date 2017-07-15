"use strict"

module.exports = {
	entry: "./js/controller", 
	output: {
		path: "./js",
		filename: "build.js",
		library: "controller"
	},

	watch: true,

	 devtool: "source-map"
}