"use strict";
define([
		"synaptic",
		"mnist"
	], function(synaptic, mnist){

	var App = function(){
		console.log(synaptic);

		window.mnist = mnist;
		window.synaptic = synaptic;

		this.network = new synaptic.Architect.Perceptron(40, 25, 3);
	};

	App.prototype = {

	};

	return App;

});