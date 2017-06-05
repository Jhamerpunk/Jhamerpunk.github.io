function pageload() {
	var ok = document.getElementById("icon01");
	ok.onclick = okayClick;
}

function okayClick() {
	alert("booyah");
}

window.onload = pageLoad;

function changeImage() {
	var pokeballImg = document.getElementById("icon01");
	pokeballImg.src = "../img/master.png";
}