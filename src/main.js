"use strict";

requirejs.config({
	baseUrl : "src",
	paths : {
		"synaptic" : "../node_modules/synaptic/dist/synaptic",
		"mnist"    : "../node_modules/mnist/dist/mnist"
	}
});

requirejs(["App"], function(App){
	window.app = new App();
});