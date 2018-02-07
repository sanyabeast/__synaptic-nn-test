"use strict";

requirejs.config({
	baseUrl : "src",
	paths : {
		"synaptic" : "../node_modules/synaptic/dist/synaptic",
		"mnist"    : "../node_modules/mnist/dist/mnist"
	}
});

requirejs(["App"], function(App){
	if (document.readyState == "complete"){
		window.app = new App();
	} else {
		document.addEventListener("DOMContentLoaded", function(){
			window.app = new App();
		});
	}
});