var pFunFlag = 0;
// function actionHighlight() {
// 	var a = document.getElementById("Bronsolino");
// 	a.onclick
// }
function pHighlight() {
	let pFun= document.querySelector("action");
	if (pFunFlag=0) {
	for (var x = 0;x < pFun.length; x++) {
		pFun[x].setAttribute("style","bg-color: #ffff00");
	}
	else
		for (var x = 0;x < pFun.length; x++) {
			pFun[x].setAttribute("style","bg-color: #ffff00");
		}
// function anagram() {
// 	let cap = document.getElementsByName("Reynolds");
// 	console.log(cap.length);
// 	cap.forEach()
// }
// function highlight() {
//
// }
boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
// function start(){
// 	if "flag" !== "blue" {
//
//
// 	}


}
var btn = document.querySelector('button');

function random(number) {
	return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
	var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	document.body.style.backgroundColor = rndCol;
}