

window.addEventListener('load', function(){
	var h1 = document.getElementById('pealkiri');
	alert(h1.innerHTML); // teavitus
});

var numberMuutuja = 123; //veel numbrid: infinity ja NaN-tehted temaga alati = NaN

var tekstiMuutuja = "te \n \x20 \u0020 kst";
var tekstiMuutuja = 'tekst';

var booleanMuutuja = false;
var booleanMuutuja = true;

var undefinedMuutuja = undefined; //muutuja on olemas, aga tal pole vaartust
var nullMuutuja = null; //objecti vaartusega muutuja

var massiiviMuutuja = [1, "tekst", [3], function(){}, false]; //massiivi tyybi sisud pole piiratud
massiiviMuutuja[0]== 1
massiiviMuutuja[1]== "tekst"

var meetod = function(a){
	return this.omadus + a;
};

var objektMuutuja = {
	omadus: 123,
	meetod: meetod //function(a){
		//return this.omadus + a; //this - konteksti muutuja kus ta parasjagu on, tagastab argumendi a liidetuna objekti omadusele
	//}
};

var objekt2 = {
	omadus: 6,
	meetod: objektMuutuja.meetod
}

alert( objektMuutuja.meetod(5) );

//"tekst" . toUpperCase(); //muudab oma konteksti "tekst" suurteks tahtedeks
//12 . toString(2); vastus "1100" 12 binaarkujul

if (tingimus) {
	//tingimus kehtib
} else {
	//tingimus ei kehti
}

/*vхrdne ==
mittevхrdne !=
suurem kui >
suurem vхi vordne >=
vдiksem kui <
vдiksem vхi vordne <= 
vastandvaartus ! */

if ( 123 == 123) {
	
}

/*
AND: && (true && false) - tagastakse kas vasakpoolne falsy vхi parempoolne
OR: || (true || false) - tagastatakse kas vasakpoolne truethy vхi parempoolne
falsy: false, null, undefined, 0, ''
truethy: '0', ...
*/