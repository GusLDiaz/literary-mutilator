function orangeFuzzy() {
	document.getElementById("fuzzy").style.color = "orange";
}
function anagram() {
	let cap = document.getElementsByName("Reynolds");
	console.log(cap.length);
	cap.forEach()
}
function highlight() {

}
function start(){
	if


}
var btn = document.querySelector('button');

function random(number) {
	return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
	var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	document.body.style.backgroundColor = rndCol;
}