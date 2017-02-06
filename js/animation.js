var canvas = null;
var canvasT = null;
var ctx = null;
var ctxT = null;
var imgLogo = null;
var testImg = null;

var frameRate = 1000/30;
var frame = 0;
var frames = [];

var playAnimation = false;


var onImageLoad = function(){
	console.log("loaded...");
	ctx.drawImage(imgLogo, 0, 0, canvas.width, canvas.height);
}

var onImageLoadT = function(){
	console.log("loaded...");
	
}


setupLogo = function(){
	imgLogo = new Image();
	imgLogo.onload = onImageLoad;
	imgLogo.src = "./img/logo.png"
}

/*setupTest = function(){
	testImg = new Image();
	testImg.onload = onImageLoadT;
	testImg.src = "./img/test.png"
}*/

var setup = function(){

	canvas = document.getElementById("logo");
	ctx = canvas.getContext("2d");

	setupLogo();
	
}

function animate(){
	if(playAnimation){
		ctxT.drawImage(testImg, 0, 0, canvasT.width, canvasT.height);
	}
	
}


function onReady(callback){
	var intervalID = window.setInterval(checkReady, 1000);
	function checkReady(){
		if(document.getElementsByTagName('body')[0] !== undefined){
			window.clearInterval(intervalID);
			callback.call(this);
		}
	}
}

function show(id, value){
	document.getElementById(id).style.display = value ? 'block': 'none'; 
}

onReady(function(){
	$('body').addClass('loaded');
})

