var base;
var playPause = 0;

function playFunc () {
	playPause = playPause + 1;

	if (playPause === 1){
		play ();
		document.getElementById("play").classList.add("pause");
	} else if (playPause === 2) {
		document.getElementById("play").classList.remove("pause");
		playPause = 0;
		stop();
	}
}

function play () {
	base = setInterval (timer, 10); // milliseconds
}

function stop () {
	clearInterval(base);
}

var millisecond = 0;
var second = 0;
var minute = 0;
var hour = 0;

//Return value
var millisecondVal = 0;
var secondVal = 0;
var minuteVal = 0;
var hourVal = 0;

function timer () {
	millisecondValue = updateTime(millisecond);	
	secondVal = updateTime(second);
	minuteVal = updateTime(minute);
	hourVal = updateTime(hour);
	
	millisecond = ++millisecond;
	
	if (millisecond === 100) {
		millisecond = 0;
		second = ++second;
	}
	if (second == 60) {
		minute = ++minute;
		second = 0;
	}
	 if (minute == 60) {
		minute = 0;
		hour = ++hour; 
	}
	$("#millisecond").text(millisecondVal);
	$("#second").text(secondVal);
	$("#minute").text(minuteVal);
	$("#hour").text(hourVal);
}

//update every second millisecond
function updateTime () {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}


function resetFunc () {
	millisecond = 0;
	second = 0;
	minute = 0;
	hour = 0;
	
	$("#millisecond").text("00");
	$("#second").text("00");
	$("#minute").text("00");
	$("#hour").text("00");
}

function stopFunc () {
	clearInterval(base);
	resetFunc();
}
