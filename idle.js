  //-----------------------------------------//
 //------------SCRIPT PRINCIPAL-------------//
//-----------------------------------------//





  //-----------------------------------------//
 //-----------VARIABLES GLOBALES------------//
//-----------------------------------------//

var element1 = document.getElementById("ressource1");
var element2 = document.getElementById("ressource2");
var element3 = document.getElementById("ressource3");
var element4 = document.getElementById("ressource4");
var plus2 = document.getElementById("ajout2");
var plus3 = document.getElementById("ajout3");
var plus4 = document.getElementById("ajout4");
var moins2 = document.getElementById("retrait2");
var moins3 = document.getElementById("retrait3");
var moins4 = document.getElementById("retrait4");
var achatNivBat1 = document.getElementById("achatNivBat1");
var prixBat1 = document.getElementById("prixBat1");





  //-----------------------------------------//
 //---------------POINTEURS-----------------//
//-----------------------------------------//

element2.addEventListener('click', clickRessource2);
element3.addEventListener('click', clickRessource3);
element4.addEventListener('click', clickRessource4);
plus2.addEventListener('click', affectation2);
plus3.addEventListener('click', affectation3);
plus4.addEventListener('click', affectation4);
moins2.addEventListener('click', retrait2);
moins3.addEventListener('click', retrait3);
moins4.addEventListener('click', retrait4);
achatNivBat1.addEventListener('click', niveauSup1);





  //-----------------------------------------//
 //-----------FONCTIONS GLOBALES------------//
//-----------------------------------------//

function limite(max,valCour,pos){
	if (valCour >= max){
		valCour = max;		
	}
	document.getElementById(pos).innerHTML = valCour + " / " + max;
}





  //-----------------------------------------//
 //------------RESSOURCE CANARD-------------//
//-----------------------------------------//

var canard = 0;
var canardMax = 50;
var time1=setInterval(IncrementRessource1,15000); //incrémente la ressource1 toute les secondes
function IncrementRessource1(evt) {
	canard = canard + 1;
	document.getElementById("affRessource1").innerHTML = canard + " / " + canardMax;
}





  //-----------------------------------------//
 //--------------RESSOURCE EAU--------------//
//-----------------------------------------//

var eau = 0;
var eauMax = 500;
var canardAffecte2 = 0;
var timer2;

function affectation2(evt) {
	affectation(canardAffecte2, "canards2", incrementRessource2, timer2);
}

function retrait2(evt) {
	if(canard >= canardMax || canardAffecte2 == 0){
		event.preventDefault();
	}else{
		canardAffecte2 = canardAffecte2 - 1;
		canard = canard + 1;
		document.getElementById("canards2").innerHTML = "Travailleurs : " + canardAffecte2;
		document.getElementById("affRessource1").innerHTML = canard + " / " + canardMax;
		if(canardAffecte2<1){
			window.clearInterval(time2); //stoppe l'incrémentation de la ressource
		}
	}
}

function clickRessource2(evt) {
	eau = eau + 1;
	document.getElementById("affRessource2").innerHTML = eau.toFixed(2) + " / " + eauMax.toFixed();
}

function incrementRessource2 (evt) {
	eau = eau + 0.67;
	document.getElementById("affRessource2").innerHTML = eau.toFixed(2) + " / " + eauMax.toFixed();
}

  //-----------------------------------------//
 //-------------BATIMENT PUIT---------------//
//-----------------------------------------//

var niveau1 = 0;
var prixbat1 = 100;

function niveauSup1(evt) {
	if (eau>=prixbat1) {
		eau = eau - prixbat1;
		niveau1 = niveau1 + 1;
		prixbat1 = (100 * niveau1 * 1.4);
		eauMax = (eauMax * 1.2);
		document.getElementById("affRessource2").innerHTML = eau.toFixed(2)  + " / " + eauMax.toFixed();
		document.getElementById("nivBat1").innerHTML = "lvl : " + niveau1;
		document.getElementById("achatNivBat1").innerHTML = "+1 niveau";
		document.getElementById("prixBat1").innerHTML = "eau : " + prixbat1;
	} else {
		event.preventDefault();	
	}
}





  //-----------------------------------------//
 //----------RESSOURCE NOURRITURE-----------//
//-----------------------------------------//

var nourriture = 0;
var nourritureMax = 100;
var canardAffecte3 = 0;

function affectation3(evt) {
	affectation(canardAffecte3, "canards3", incrementRessource3);
}

function retrait3(evt) {
	if(canard >= canardMax || canardAffecte3 == 0){
		event.preventDefault();
	}else{
		canardAffecte3 = canardAffecte3 - 1;
		canard = canard + 1;
		document.getElementById("canards3").innerHTML = "Travailleurs : " + canardAffecte3;
		document.getElementById("affRessource1").innerHTML = canard + " / " + canardMax;
		if(canardAffecte3<1){
			window.clearInterval(time3); //stoppe l'incrémentation de la ressource
		}
	}
}

function clickRessource3(evt) {
	nourriture = nourriture + 1;
	document.getElementById("affRessource3").innerHTML = nourriture.toFixed(2) + " / " + nourritureMax;
}

function incrementRessource3 (evt) {
	nourriture = nourriture + 0.1533;
	document.getElementById("affRessource3").innerHTML = nourriture.toFixed(2) + " / " + nourritureMax;
}





  //-----------------------------------------//
 //-------------RESSOURCE BOIS--------------//
//-----------------------------------------//

var bois = 0;
var boisMax = 100;
var canardAffecte4 = 0;

function affectation4(evt) {
	affectation(canardAffecte4, "canards4", incrementRessource4);
}

function retrait4(evt) {
	if(canard >= canardMax || canardAffecte4 == 0){
		event.preventDefault();
	}else{
		canardAffecte4 = canardAffecte4 - 1;
		canard = canard + 1;
		document.getElementById("canards4").innerHTML = "Travailleurs : " + canardAffecte4;
		document.getElementById("affRessource1").innerHTML = canard + " / " + canardMax;
		if(canardAffecte4<1){
			window.clearInterval(time4); //stoppe l'incrémentation de la ressource
		}
	}
}

function clickRessource4(evt) {
	if(eau < 22 || nourriture < 4){
		event.preventDefault();
	} else {
		bois = bois + 1;
		eau = eau - 22;
		nourriture = nourriture - 4;
	}
	document.getElementById("affRessource4").innerHTML = bois.toFixed(2) + " / " + boisMax;
	document.getElementById("affRessource3").innerHTML = nourriture.toFixed(2) + " / " + nourritureMax;
	document.getElementById("affRessource2").innerHTML = eau.toFixed(2)  + " / " + eauMax.toFixed();
}

function incrementRessource4 (evt) {
	if(eau < 22 || nourriture < 4){
		event.preventDefault();
	} else {
	bois = bois + 0.091;
	eau = eau - 22;
	nourriture = nourriture - 4;
	}
	document.getElementById("affRessource4").innerHTML = bois.toFixed(2) + " / " + boisMax;
	document.getElementById("affRessource3").innerHTML = nourriture.toFixed(2) + " / " + nourritureMax;
	document.getElementById("affRessource2").innerHTML = eau.toFixed(2)  + " / " + eauMax.toFixed();
}



function affectation(affectCanard, affCanard, functionIncrementRessource, timer) {
	if(canard < 1){
		event.preventDefault();
	} else {
		canard = canard - 1;
		affectCanard = affectCanard + 1;
		if(affectCanard>=1){
		timer[affectCanard]=setInterval(functionIncrementRessource,1000); //incrémente la ressource toute les secondes
			document.getElementById(affCanard).innerHTML = "Travailleurs : " + affectCanard;
			document.getElementById("affRessource1").innerHTML = canard + " / " + canardMax;
		}
	}
}