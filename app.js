let windows10 = new Audio("windows10.mp3");
let discord = new Audio("discord.mp3");
let background = new Audio("background.mp3");
let discordCallSound = new Audio("incoming.mp3");
let goldenSample = new Audio("dont_play_me.mp3");

$(document).on('keydown', function (event) {
	if (event.key == "Enter") {
		windows10.load();
		windows10.play();
	}

	if (event.key == "Escape") {
		windows10.load();
		windows10.play();
	}
});

// $(window).on("mouseout", function (event) {
// 	var wihe = 'width=' + screen.availWidth + ',height=' + screen.availHeight;
// 	window.open("",
// 		"foo",
// 		"fullscreen=yes,screenX=1,screenY=1,left=1,top=1," + wihe);
// });

$(".full-container").click(function () {
	discordCall();
});

setTimeout(function () {
	discordCallSound.pause();
	discordCallSound.currentTime = 0;
}, 10000);

function discordCall() {
	$(".discord-call-container").addClass("animate");
	$(".backClick").show();
	$("#enable").hide();
	$("html").css("cursor", "none");
	$("#fullscreen-link").css("cursor", "none");
	discordCallSound.load();
	discordCallSound.play();

	setTimeout(function () {
		discordCall();
	}, 5390);
}

// If they try and close the window, don't let them
window.onbeforeunload = function (e) {
	e = e || window.event;

	if (e) {
		e.returnValue = 'Sure?';
	}

	return 'Sure?';
};

// Play Windows 10 background.mp3
function backgroundMP3() {
	background.load();
	background.play();
}

// check pointerLock support
var havePointerLock = 'pointerLockElement' in document ||
	'mozPointerLockElement' in document ||
	'webkitPointerLockElement' in document;

// element for pointerLock
var requestedElement = document.getElementById('full-container');

// prefixes
requestedElement.requestPointerLock = requestedElement.requestPointerLock || requestedElement.mozRequestPointerLock || requestedElement.webkitRequestPointerLock;

document.exitPointerLock = document.exitPointerLock ||
	document.mozExitPointerLock ||
	document.webkitExitPointerLock;

var isLocked = function () {
	return requestedElement === document.pointerLockElement ||
		requestedElement === document.mozPointerLockElement ||
		requestedElement === document.webkitPointerLockElement;
}

requestedElement.addEventListener('click', function () {
	if (!isLocked()) {
		discordCall();
		setTimeout(function () {
			goldenSample.load();
			goldenSample.play();
		}, 2500);
		requestedElement.requestPointerLock();
	}
}, false);

var changeCallback = function () {
	if (!havePointerLock) {
		alert(' ');
		return;
	}
	if (isLocked()) {
		document.addEventListener("mousemove", moveCallback, false);
		document.body.classList.add('locked');
	} else {
		document.removeEventListener("mousemove", moveCallback, false);
		document.body.classList.remove('locked');
	}
}

document.addEventListener('pointerlockchange', changeCallback, false);
document.addEventListener('mozpointerlockchange', changeCallback, false);
document.addEventListener('webkitpointerlockchange', changeCallback, false);

var moveCallback = function (e) {
	var x = e.movementX ||
		e.mozMovementX ||
		e.webkitMovementX ||
		0;

	var y = e.movementY ||
		e.mozMovementY ||
		e.webkitMovementY ||
		0;
}