//--VARIABLES GLOBALES--//
var eau = 0;
var eauMax = 5000;
var bois = 0;
var boisMax = 10000;
var nourriture = 0;
var nourritureMax = 5000;
var malt = 0;
var maltMax = 3000;
var houblon = 0;
var houblonMax = 3000;
var grain = 0;
var grainMax = 500;
var biere = 0;
var biereMax = 1000;
var or = 0;
var orMax = 5000;
var ame = 0;
var levure = 0;
var sucre = 0;
var canard = 0;
var canardMax = 5;
var canardMort = 0;
var canardMortMax = 5000;
var canRess1 = 0;
var canRess2 = 0;
var canRess3 = 0;
var canRess4 = 0;
var canRess5 = 0;
var canRess6 = 0;
var canRess7 = 0;
var canRess8 = 0;
var canTot = 0;
var prixBat1 = 500;
var prixBat2 = 750;
var prixBat3 = 750;
var prixBat4 = 750;
var prixBat5 = 750;
var prixBat6 = 750;
var prixBat7 = 750;
var prixBat8 = 750;
var prixBat9 = 750;
var prixBat10 = 750;
var niveauBat1 = 0;
var niveauBat2 = 0;
var niveauBat3 = 0;
var niveauBat4 = 0;
var niveauBat5 = 0;
var niveauBat6 = 0;
var niveauBat7 = 0;
var niveauBat8 = 0;
var niveauBat9 = 0;
var niveauBat10 = 0;



//--FONCTIONS RESSOURCES--//

function createCanard(number){ //fonction d'incrémentation de la ressource canard
    canard = canard + number; //incrémente la ressource canard
    document.getElementById("canard").innerHTML = canard.toFixed(); //affichage des canard
	document.getElementById("canardMax").innerHTML = canardMax.toFixed(); //affichage maximum de canard
	if(canard > canardMax){ //empêche la ressource de dépasser son maximum
		canard = canardMax;
		document.getElementById("canard").innerHTML = canard.toFixed(); //affichage des canard
	}
};

function eauClick(number){ //fonction d'incrémentation de la ressource eau au click
	eau = eau + number; //incrémente la ressource eau en fonction du nombre en paramètre
	document.getElementById("eau").innerHTML = eau.toFixed(1); //affichage de la ressource
	document.getElementById("eauMax").innerHTML = eauMax.toFixed();
	if(eau > eauMax){
		eau = eauMax; //affichage de la ressource
		document.getElementById("eau").innerHTML = eau.toFixed(1); //affichage de la ressource
	}
};

function boisClick(number){
	bois = bois + number;
	document.getElementById("bois").innerHTML = bois.toFixed(1);
	document.getElementById("boisMax").innerHTML = boisMax.toFixed();
	if(bois > boisMax){
		bois = boisMax;
		document.getElementById("bois").innerHTML = bois.toFixed(1);
	}
};

function nourritureClick(number){
	nourriture = nourriture + number;
	document.getElementById("nourriture").innerHTML = nourriture.toFixed(1);
	document.getElementById("nourritureMax").innerHTML = nourritureMax.toFixed();
	if(nourriture > nourritureMax){
		nourriture = nourritureMax;
		document.getElementById("nourriture").innerHTML = nourriture.toFixed(1);
	}
};

function incrementMalt(number){ //fonction d'incrémentation de la ressource malt
    malt = malt + number; //incrémente la ressource malt en fonction du nombre en paramètre
	document.getElementById("malt").innerHTML = malt.toFixed(1); //affichage de la ressource
	document.getElementById("maltMax").innerHTML = maltMax.toFixed();
	if(malt > maltMax){ //empêche la ressource de dépasser son maximum
		malt = maltMax;
		document.getElementById("malt").innerHTML = malt.toFixed(1); //affichage de la ressource
	}
};

function incrementHoublon(number){
    houblon = houblon + number;
	document.getElementById("houblon").innerHTML = houblon.toFixed(1);
	document.getElementById("houblonMax").innerHTML = houblonMax.toFixed();
	if(houblon > houblonMax){
		houblon = houblonMax;
		document.getElementById("houblon").innerHTML = houblon.toFixed(1);
	}
};

function incrementGrain(number){
    grain = grain + number;
	document.getElementById("grain").innerHTML = grain.toFixed(1);
	document.getElementById("grainMax").innerHTML = grainMax.toFixed();
	if(grain > grainMax){
		grain = grainMax;
		document.getElementById("grain").innerHTML = grain.toFixed(1);
	}
};

function incrementOr(number){
    or = or + number;
	document.getElementById("or").innerHTML = or.toFixed(1);
	document.getElementById("orMax").innerHTML = orMax.toFixed();
	if(or > orMax){
		or = orMax;
		document.getElementById("or").innerHTML = or.toFixed(1);
	}
};

function incrementBiere(number){
    biere = biere + number;
	document.getElementById("biere").innerHTML = biere.toFixed(1);
	document.getElementById("biereMax").innerHTML = biereMax.toFixed();
	if(biere > biereMax){
		biere = biereMax;
		document.getElementById("biere").innerHTML = biere.toFixed(1);
	}
};


//--FONCTION AFFECTATION--//

function affectCanard(id){ //fonction d'affectation des canard
		if(id == 1 && canard > 0) { //si click sur l'id 1, affecte un travailleur à la ressource 1
			canard = canard - 1; //ôte 1 canard
			canRess1 = canRess1 + 1; //rajoute un travailleur de la ressource 1
			document.getElementById('canard1').innerHTML = canRess1.toFixed(); //affichage de la ressource 
			document.getElementById("canard").innerHTML = canard.toFixed(); //affichage des canard
			document.getElementById("eauSec").innerHTML = canRess1.toFixed(1); //affichage de l'incrémentation/s
		}
		if(id == 2 && canard > 0) {
			canard = canard - 1;
			canRess2 = canRess2 + 1;
			document.getElementById('canard2').innerHTML = canRess2.toFixed();
			document.getElementById("canard").innerHTML = canard.toFixed();
			document.getElementById("boisSec").innerHTML = (canRess2 * 0.68).toFixed(2);		
		}
		if(id == 3 && canard > 0) {
			canard = canard - 1;
			canRess3 = canRess3 + 1;
			document.getElementById('canard3').innerHTML = canRess3.toFixed(); 
			document.getElementById("canard").innerHTML = canard.toFixed();
		}
		if(id == 4 && canard > 0) {
			canard = canard - 1;
			canRess4 = canRess4 + 1;
			document.getElementById('canard4').innerHTML = canRess4.toFixed();
			document.getElementById("canard").innerHTML = canard.toFixed();
			document.getElementById("maltSec").innerHTML = (canRess4 * 0.46).toFixed(2);
		}
		if(id == 5 && canard > 0) {
			canard = canard - 1;
			canRess5 = canRess5 + 1;
			document.getElementById('canard5').innerHTML = canRess5.toFixed();
			document.getElementById("canard").innerHTML = canard.toFixed();
			document.getElementById("houblonSec").innerHTML = (canRess5 * 0.42).toFixed(2);
		}
		if(id == 6 && canard > 0) {
			canard = canard - 1;
			canRess6 = canRess6 + 1;
			document.getElementById('canard6').innerHTML = canRess6.toFixed(); 
			document.getElementById("canard").innerHTML = canard.toFixed();
			document.getElementById("biereSec").innerHTML = (canRess6 * 0.38).toFixed(2);
		}
		if(id == 7 && canard > 0) {
			canard = canard - 1;
			canRess7 = canRess7 + 1;
			document.getElementById('canard7').innerHTML = canRess7.toFixed();
			document.getElementById("canard").innerHTML = canard.toFixed();
			document.getElementById("orSec").innerHTML = (canRess7 * 0.23).toFixed(2);
		}
	canTot = canRess1 + canRess2 + canRess3 + canRess4 + canRess5 + canRess6 + canRess7;
	document.getElementById("nourritureSec").innerHTML = ((canRess3 * 0.8)-(canTot * 0.1)).toFixed(2);
	document.getElementById("canTot").innerHTML = canTot;
	document.getElementById("canTotSec").innerHTML = "( -" + (canTot * 0.1).toFixed(1) + "/s )";
};

function retCanard(id){
	if(id == 1 && canRess1 >= 1 && canard != canardMax) { //si click sur l'id 1 et travailleurs actifs >= 1, retire un travailleur à la ressource 1
		canard = canard + 1; //rajoute 1 canard
		canRess1 = canRess1 - 1; //ôte un travailleur de la ressource 1
		document.getElementById('canard1').innerHTML = canRess1.toFixed(); //affichage de la ressource
		document.getElementById("canard").innerHTML = canard.toFixed(); //affichage des canard
		document.getElementById("eauSec").innerHTML = canRess1.toFixed(2); //affichage de l'incrémentation/s
	}
	if(id == 2 && canRess2 >= 1 && canard != canardMax) {
		canard = canard + 1;
		canRess2 = canRess2 - 1;
		document.getElementById('canard2').innerHTML = canRess2.toFixed();
		document.getElementById("canard").innerHTML = canard.toFixed();
		document.getElementById("boisSec").innerHTML = (canRess2 * 0.68).toFixed(2);
	}
	if(id == 3 && canRess3 >= 1 && canard != canardMax) {
		canard = canard + 1;
		canRess3 = canRess3 - 1;
		document.getElementById('canard3').innerHTML = canRess3.toFixed();
		document.getElementById("canard").innerHTML = canard.toFixed();
	}
	if(id == 4 && canRess4 >= 1 && canard != canardMax) {
		canard = canard + 1;
		canRess4 = canRess4 - 1;
		document.getElementById('canard4').innerHTML = canRess4.toFixed();
		document.getElementById("canard").innerHTML = canard.toFixed();
		document.getElementById("maltSec").innerHTML = (canRess4 * 0.46).toFixed(2);
	}
	if(id == 5 && canRess5 >= 1 && canard != canardMax) {
		canard = canard + 1;
		canRess5 = canRess5 - 1;
		document.getElementById('canard5').innerHTML = canRess5.toFixed();
		document.getElementById("canard").innerHTML = canard.toFixed();
		document.getElementById("houblonSec").innerHTML = (canRess5 * 0.42).toFixed(2);
	}
	if(id == 6 && canRess6 >= 1 && canard != canardMax) {
		canard = canard + 1;
		canRess6 = canRess6 - 1;
		document.getElementById('canard6').innerHTML = canRess6.toFixed();
		document.getElementById("canard").innerHTML = canard.toFixed();
		document.getElementById("biereSec").innerHTML = (canRess6 * 0.38).toFixed(2);
	}
	if(id == 7 && canRess7 >= 1 && canard != canardMax) {
		canard = canard + 1;
		canRess7 = canRess7 - 1;
		document.getElementById('canard7').innerHTML = canRess7.toFixed();
		document.getElementById("canard").innerHTML = canard.toFixed();
		document.getElementById("orSec").innerHTML = (canRess7 * 0.23).toFixed(2);
	}
	canTot = canRess1 + canRess2 + canRess3 + canRess4 + canRess5 + canRess6 + canRess7;
	document.getElementById("nourritureSec").innerHTML = ((canRess3 * 0.8)-(canTot * 0.1)).toFixed(2);
	document.getElementById("canTot").innerHTML = canTot;
	document.getElementById("canTotSec").innerHTML = "( -" + (canTot * 0.1).toFixed(1) + "/s )";
};

//--FONCTIONS BATIMENTS--//

function achatLevel(id) {
	if (id == 1 && bois > prixBat1) {
		bois = bois - prixBat1;
		niveauBat1 = niveauBat1 + 1;
		prixBat1 = (prixBat1 * 1.25^niveauBat1);
		eauMax = (eauMax * 1.2);
		document.getElementById("eauMax").innerHTML = eauMax.toFixed();
		document.getElementById("achatNivBat1").innerHTML = "lvl : " + niveauBat1;
		document.getElementById("prixBat1").innerHTML = "bois : " + prixBat1;
	}
	if (id == 2 && bois > prixBat2) {
		bois = bois - prixBat2;
		niveauBat2 = niveauBat2 + 1;
		prixBat2 = (prixBat2 * 1.4^niveauBat2);
		boisMax = (boisMax * 1.2);
		nourritureMax = (nourritureMax * 1.2);
		document.getElementById("boisMax").innerHTML = boisMax.toFixed();
		document.getElementById("nourritureMax").innerHTML = nourritureMax.toFixed();
		document.getElementById("achatNivBat2").innerHTML = "lvl : " + niveauBat2;
		document.getElementById("prixBat2").innerHTML = "bois : " + prixBat2;
	}
	if (id == 3 && bois > prixBat3) {
		bois = bois - prixBat3;
		niveauBat3 = niveauBat3 + 1;
		prixBat3 = (prixBat3 * 1.4^niveauBat3);
		boisMax = (boisMax * 1.2);
		document.getElementById("boisMax").innerHTML = boisMax.toFixed();
		document.getElementById("achatNivBat3").innerHTML = "lvl : " + niveauBat3;
		document.getElementById("prixBat3").innerHTML = "bois : " + prixBat3;
	}
	if (id == 4 && bois > prixBat4) {
		bois = bois - prixBat4;
		niveauBat4 = niveauBat4 + 1;
		prixBat4 = (prixBat4 * 1.4^niveauBat4);
		boisMax = (boisMax * 1.2);
		document.getElementById("boisMax").innerHTML = boisMax.toFixed();
		document.getElementById("achatNivBat4").innerHTML = "lvl : " + niveauBat4;
		document.getElementById("prixBat4").innerHTML = "bois : " + prixBat4;
	}
	if (id == 5 && bois > prixBat5) {
		bois = bois - prixBat5;
		niveauBat5 = niveauBat5 + 1;
		prixBat5 = (prixBat5 * 1.4^niveauBat5);
		boisMax = (boisMax * 1.2);
		document.getElementById("boisMax").innerHTML = boisMax.toFixed();
		document.getElementById("achatNivBat5").innerHTML = "lvl : " + niveauBat5;
		document.getElementById("prixBat5").innerHTML = "bois : " + prixBat5;
	}
	if (id == 6 && bois > prixBat6) {
		bois = bois - prixBat6;
		niveauBat6 = niveauBat6 + 1;
		prixBat6 = (prixBat6 * 1.4^niveauBat6);
		boisMax = (boisMax * 1.2);
		document.getElementById("boisMax").innerHTML = boisMax.toFixed();
		document.getElementById("achatNivBat6").innerHTML = "lvl : " + niveauBat6;
		document.getElementById("prixBat6").innerHTML = "bois : " + prixBat6;
	}
	if (id == 7 && bois > prixBat7) {
		bois = bois - prixBat7;
		niveauBat7 = niveauBat7 + 1;
		prixBat7 = (prixBat7 * 1.4^niveauBat7);
		boisMax = (boisMax * 1.2);
		document.getElementById("boisMax").innerHTML = boisMax.toFixed();
		document.getElementById("achatNivBat7").innerHTML = "lvl : " + niveauBat7;
		document.getElementById("prixBat7").innerHTML = "bois : " + prixBat7;
	}
	if (id == 8 && bois > prixBat8) {
		bois = bois - prixBat8;
		niveauBat8 = niveauBat8 + 1;
		prixBat8 = (prixBat8 * 1.4^niveauBat8);
		boisMax = (boisMax * 1.2);
		document.getElementById("boisMax").innerHTML = boisMax.toFixed();
		document.getElementById("achatNivBat8").innerHTML = "lvl : " + niveauBat8;
		document.getElementById("prixBat8").innerHTML = "bois : " + prixBat8;
	}
	if (id == 9 && bois > prixBat9) {
		bois = bois - prixBat9;
		niveauBat9 = niveauBat9 + 1;
		prixBat9 = (prixBat9 * 1.4^niveauBat9);
		boisMax = (boisMax * 1.2);
		document.getElementById("boisMax").innerHTML = boisMax.toFixed();
		document.getElementById("achatNivBat9").innerHTML = "lvl : " + niveauBat9;
		document.getElementById("prixBat9").innerHTML = "bois : " + prixBat9;
	}
	if (id == 10 && bois > prixBat10) {
		bois = bois - prixBat10;
		niveauBat10 = niveauBat10 + 1;
		prixBat10 = (prixBat10 * 1.4^niveauBat10);
		boisMax = (boisMax * 1.2);
		document.getElementById("boisMax").innerHTML = boisMax.toFixed();
		document.getElementById("achatNivBat10").innerHTML = "lvl : " + niveauBat10;
		document.getElementById("prixBat10").innerHTML = "bois : " + prixBat10;
	}
}

//--FONCTION TIMER--//

window.setInterval(function(){ //timer 5 secondes
	
	createCanard(Math.round((Math.random() * (4 - 1)) + 1));
	
}, 30000);

window.setInterval(function(){ //timer 1 seconde
	
	eauClick(canRess1);
	boisClick(canRess2 * 0.68); //le 0.5 détermine l'incrémentation de la ressource 2 par travailleur actif
	nourritureClick((canRess3 * 0.8)-(canTot * 0.1)); //le 0.7 détermine l'incrémentation de la ressource 3 par travailleur actif
	incrementMalt(canRess4 * 0.46);
	incrementHoublon(canRess5 * 0.42);
	incrementGrain((canRess4 * 0.0012) + (canRess5 * 0.0010));
	incrementBiere(canRess6 * 0.38);
	incrementOr(canRess7 * 0.23);
	
}, 1000);