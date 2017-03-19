
window.onload = function (){
	var marklaud = document.getElementById("field");
	
	function uusPositsioon(liikuvMarklaud) {
		var newX = String(Math.floor(Math.random()*100))+"%";
		var newY = String(Math.floor(Math.random()*100))+"%";
		liikuvMarklaud.style.left = newX;
		liikuvMarklaud.style.left = newY;
	}
	
	marklaud.onclick = function() {
		uusPositsioon(this);
	}
};