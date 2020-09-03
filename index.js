let guesscount = 5;
let computerNumber = Math.floor(Math.random() * 100) + 1;
console.log("random number", computerNumber);
let result = "";
let myTimer;

let input = document.getElementById("userInput");
input.addEventListener("keypress", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("enter").click();
	}
});
startTimer(40);

function guess() {
	let userNumber = document.getElementById("userInput").value;
	if (userNumber < 0) {
		document.getElementById("problem").innerHTML = "Type number between 0-100";
	} else if (userNumber > 100) {
		document.getElementById("problem").innerHTML = "Type number between 0-100";
	} else if (isNaN(userNumber) == true) {
		document.getElementById("problem").innerHTML = "Please type in numbers";
	} else if (userNumber > computerNumber) {
		document.getElementById("problem").innerHTML = "Your number is too high";
		guesscount--;
	} else if (userNumber < computerNumber) {
		document.getElementById("problem").innerHTML = "Your number is too low";
		guesscount--;
	} else if ((userNumber = computerNumber)) {
		document.getElementById("problem").innerHTML = "Win";
		document.getElementById("enter").disabled = true;
	}
	console.log("guess count", guesscount);

	document.getElementById(
		"guesses"
	).innerHTML = `Number of guesses left: ${guesscount}`;

	if (guesscount == 0) {
		document.getElementById("problem").innerHTML = "You run out of guesses";
		alert("game over :(");
		document.getElementById("enter").disabled = true;
	}
}

function startTimer(duration) {
	let second = duration;
	myTimer = setInterval(function () {
		second--;
		document.getElementById("time").innerHTML = second;
		if (second == 0) {
			document.getElementById("problem").innerHTML = "You run out of time";
			document.getElementById("enter").disabled = true;
			clearInterval(myTimer);
		}
	}, 1000);
}

function resetGame() {
	clearInterval(myTimer);
	startTimer(40);
	guesscount = 5;
	input.value = "";
	document.getElementById(
		"guesses"
	).innerHTML = `Number of guesses left: ${guesscount}`;
	document.getElementById("enter").disabled = false;
	document.getElementById("problem").innerHTML = "";
}
