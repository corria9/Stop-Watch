var base;
var playPause = 0;

function playFunc () {
	play ();
	playPause = playPause + 1;

	if (playPause === 1){
		document.getElementById("play").classList.add("pause");
	} else if (playPause === 2) {
		document.getElementById("play").classList.remove("pause");
		playPause = 0;
		stop();
	}
}

function play () {
	
}

function stop () {
	
}

var millisecond = 0;
var second = 0;
