"use strict";
define([
		"synaptic",
		"mnist"
	], function(synaptic, mnist){

	var App = function(){
		this.canvas = {

		};

		this.setupNN();
		this.setupCanvas();
	};

	App.prototype = {
		setupNN : function(){

		},
		setupCanvas : function(){
			this.canvas.input = document.querySelector("#input-canvas");
			this.canvas.inputCtx = this.canvas.input.getContext("2d");

			this.canvas.output = document.querySelector("#output-canvas");
			this.canvas.outputCtx = this.canvas.output.getContext("2d");

			this.canvas.input.addEventListener("click", function(evt){
				console.log(evt);
				if (evt.ctrlKey){
					this.requestCanvasImageURL();
				}
			}.bind(this));
		},
		onWindowResize : function(){

		},
		putInputImage : function(image){
			image.crossOrigin = "Anonymous";
			image.setAttribute('crossOrigin', '');
			this.canvas.inputCtx.drawImage(image,10,10, this.canvas.input.width, this.canvas.input.height);
		},
		readInputCanvasImageData : function(acc){
			var data = this.canvas.inputCtx.getImageData(0,0,this.canvas.input.width, this.canvas.input.height).data;
			console.log(data);
		},
		requestCanvasImageURL : function(){
			var url = prompt("Enter image URL");
			var image = new Image();
			image.addEventListener("load", function(){
				this.putInputImage(image);
			}.bind(this));

			image.src = url;
		}
	};

	return App;

});