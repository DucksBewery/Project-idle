//--VARIABLES GLOBALES--//
var eau = 0;
var bois = 0;
var nourriture = 0;
var canards = 0;
var canRess1 = 0;
var canRess2 = 0;
var canRess3 = 0;
var canTot = 0;


//--FONCTIONS RESSOURCES--//

function eauClick(number){ //fonction d'incrémentation de la ressource eau
    eau = eau + number; //incrémente la ressource eau en fonction du nombre en paramètre
    document.getElementById("eau").innerHTML = eau.toFixed(1); //affichage de la ressource
};

function boisClick(number){ //fonction d'incrémentation de la ressource bois
    bois = bois + number; //incrémente la ressource bois en fonction du nombre en paramètre
    document.getElementById("bois").innerHTML = bois.toFixed(1); //affichage de la ressource
};

function nourritureClick(number){ //fonction d'incrémentation de la ressource nourriture
    nourriture = nourriture + number; //incrémente la ressource nourriture en fonction du nombre en paramètre
    document.getElementById("nourriture").innerHTML = nourriture.toFixed(1); //affichage de la ressource
};

function createCanard(number){ //fonction d'incrémentation de la ressource canard
    canards = canards + number; //incrémente la ressource canards
    document.getElementById("canards").innerHTML = canards.toFixed(); //affichage des canards
};


//--FONCTION AFFECTATION--//

function affectCanard(id){ //fonction d'affectation des canards
	if(canards == 0){ //si le nombre de canard = 0, pas d'affectation possible
		event.preventDefault(); //arrête la fonction
	} else {
		if(id == 1) { //si click sur l'id 1, affecte un travailleur à la ressource 1
			canards = canards - 1; //ôte 1 canard
			canRess1 = canRess1 + 1; //rajoute un travailleur de la ressource 1
			document.getElementById('canards1').innerHTML = canRess1.toFixed(); //affichage de la ressource 
			document.getElementById("canards").innerHTML = canards.toFixed(); //affichage des canards
			document.getElementById("eauSec").innerHTML = canRess1.toFixed(1); //affichage de l'incrémentation/s
		}
		if(id == 2) { //si click sur l'id 2, affecte un travailleur à la ressource 2
			canards = canards - 1; //ôte 1 canard
			canRess2 = canRess2 + 1; //rajoute un travailleur de la ressource 2
			document.getElementById('canards2').innerHTML = canRess2.toFixed(); //affichage de la ressource 
			document.getElementById("canards").innerHTML = canards.toFixed(); //affichage des canards
			document.getElementById("boisSec").innerHTML = (canRess2 * 0.5).toFixed(1); //affichage de l'incrémentation/s
		}
		if(id == 3) { //si click sur l'id 3, affecte un travailleur à la ressource 3
			canards = canards - 1; //ôte 1 canard
			canRess3 = canRess3 + 1; //rajoute un travailleur de la ressource 3
			document.getElementById('canards3').innerHTML = canRess3.toFixed(); //affichage de la ressource 
			document.getElementById("canards").innerHTML = canards.toFixed(); //affichage des canards
			document.getElementById("nourritureSec").innerHTML = (canRess3 * 0.7).toFixed(1); //affichage de l'incrémentation/s
		}
	}
	canTot = canRess1 + canRess2 + canRess3;
	document.getElementById("canTot").innerHTML = canTot;
	document.getElementById("canTotSec").innerHTML = "( -" + (canTot * 0.1).toFixed(1) + "/s )";
};

function retCanard(id){
	if(id == 1 && canRess1 >= 1) { //si click sur l'id 1 et travailleurs actifs >= 1, retire un travailleur à la ressource 1
		canards = canards + 1; //rajoute 1 canard
		canRess1 = canRess1 - 1; //ôte un travailleur de la ressource 1
		document.getElementById('canards1').innerHTML = canRess1.toFixed(); //affichage de la ressource
		document.getElementById("canards").innerHTML = canards.toFixed(); //affichage des canards
		document.getElementById("eauSec").innerHTML = canRess1.toFixed(1); //affichage de l'incrémentation/s
	}
	if(id == 2 && canRess2 >= 1) { //si click sur l'id 2 et travailleurs actifs >= 1, retire un travailleur à la ressource 2
		canards = canards + 1; //rajoute 1 canard
		canRess2 = canRess2 - 1; //ôte un travailleur de la ressource 2
		document.getElementById('canards2').innerHTML = canRess2.toFixed(); //affichage de la ressource
		document.getElementById("canards").innerHTML = canards.toFixed(); //affichage des canards
		document.getElementById("boisSec").innerHTML = (canRess2 * 0.5).toFixed(1); //affichage de l'incrémentation/s
	}
	if(id == 3 && canRess3 >= 1) { //si click sur l'id 3 et travailleurs actifs >= 1, retire un travailleur à la ressource 3
		canards = canards + 1; //rajoute 1 canard
		canRess3 = canRess3 - 1; //ôte un travailleur de la ressource 3
		document.getElementById('canards3').innerHTML = canRess3.toFixed(); //affichage de la ressource
		document.getElementById("canards").innerHTML = canards.toFixed(); //affichage des canards
		document.getElementById("nourritureSec").innerHTML = (canRess3 * 0.7).toFixed(1); //affichage de l'incrémentation/s
	}
	canTot = canRess1 + canRess2 + canRess3;
	document.getElementById("canTot").innerHTML = canTot;
	document.getElementById("canTotSec").innerHTML = "( -" + (canTot * 0.1).toFixed(1) + "/s )";
};


//--FONCTION TIMER--//

window.setInterval(function(){ //timer 5 secondes
	
	createCanard(1);
	
}, 10000);

window.setInterval(function(){ //timer 1 seconde
	
	eauClick(canRess1);
	boisClick(canRess2 * 0.5); //le 0.5 détermine l'incrémentation de la ressource 2 par travailleur actif
	nourritureClick((canRess3 * 0.7)-(canTot * 0.1)); //le 0.7 détermine l'incrémentation de la ressource 3 par travailleur actif
	
}, 1000);