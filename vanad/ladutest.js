document.querySelector('#kuva-nupp button').addEventListener('click', 
	function(event){
		document.getElementById('lisa-vorm').style.display = 'block';
		document.getElementById('kuva-nupp').style.display = 'none';
	});
	
document.querySelector('#peida-nupp button').addEventListener('click', 
	function(event){
		document.getElementById('lisa-vorm').style.display = 'none';
		document.getElementById('kuva-nupp').style.display = 'block';
	});
	
document.getElementById('lisa-vorm').addEventListener('submit', 
	function(event){
		event.preventDefault();
		
		var nimetus = document.getElementById('nimetus').value;
		var kogus = Number(document.getElementById('kogus').value);
		
		if( ! nimetus || kogus <= 0) {
			alert('Vigased andmed!');
			return;
		}
		
		document.getElementById('nimetus').value = '';
		document.getElementById('kogus').value = '';
		
		lisaRida(nimetus, kogus);
	});
	
function lisaRida(nimetus, kogus){
	var rida = document.createElement('tr');
	
	var tdNimetus = document.createElement('td');
	var tdKogus = document.createElement('td');
	var tdTegevused = document.createElement('td');
	
	var kustutaNupp = document.createElement('input');
	kustutaNupp.setAttribute('type', 'button');
	kustutaNupp.value = 'Kustuta rida';
	tdTegevused.appendChild(kustutaNupp);
	
	tdNimetus.textContent = nimetus;
	tdKogus.textContent = kogus;
	
	rida.appendChild(tdNimetus);
	rida.appendChild(tdKogus);
	rida.appendChild(tdTegevused);
	
	document.querySelector('#ladu tbody').appendChild(rida);
	
	kustutaNupp.addEventListener('click', function(event){
		if ( confirm('Kas oled kindel?')){
			rida . parentNode . removeChild(rida);
		}
	});
	
}
