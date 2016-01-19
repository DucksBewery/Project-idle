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
var travailleursTotaux = document.getElementById("travailleurs");
var achatNivBat1 = document.getElementById("achatNivBat1");
var achatNivBat2 = document.getElementById("achatNivBat2");
var prixBat1 = document.getElementById("prixBat1");
var prixBat2 = document.getElementById("prixBat2");





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
achatNivBat2.addEventListener('click', niveauSup2);


var travailleursTotaux = 0;


  //-----------------------------------------//
 //-----------FONCTIONS GLOBALES------------//
//-----------------------------------------//




  //-----------------------------------------//
 //------------RESSOURCE CANARD-------------//
//-----------------------------------------//

var canard = 0;
var canardMax = 50;
var time1=setInterval(IncrementRessource1,1000); //incrémente la ressource1 toute les secondes
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
var time2;

function affectation2(evt) {
	if(canard < 1){
		event.preventDefault();
	} else {
		canard = canard - 1;
		canardAffecte2 = canardAffecte2 + 1;
		travailleursTotaux = travailleursTotaux + 1;
		if(canardAffecte2>=1){
			time2=setInterval(incrementRessource2,1000); //incrémente la ressource2 toute les secondes
			document.getElementById("canards2").innerHTML = "Travailleurs : " + canardAffecte2;
			document.getElementById("affRessource1").innerHTML = canard + " / " + canardMax;
			document.getElementById("travailleurs").innerHTML = "Travailleurs actifs : " + travailleursTotaux;
		}
	}
}

function retrait2(evt) {
	if(canard >= canardMax || canardAffecte2 == 0){
		event.preventDefault();
	}else{
		canardAffecte2 = canardAffecte2 - 1;
		canard = canard + 1;
		travailleursTotaux = travailleursTotaux - 1;
		document.getElementById("canards2").innerHTML = "Travailleurs : " + canardAffecte2;
		document.getElementById("affRessource1").innerHTML = canard + " / " + canardMax;
		document.getElementById("travailleurs").innerHTML = "Travailleurs actifs : " + travailleursTotaux;
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
var prixbat1 = 300;

function niveauSup1(evt) {
	if (bois>=prixbat1) {
		bois = bois - prixbat1;
		niveau1 = niveau1 + 1;
		prixbat1 = (300 * niveau1 * 1.2); //calcul du coup d'upgrade du batiment
		eauMax = (eauMax * 1.2);
		document.getElementById("affRessource4").innerHTML = bois.toFixed(2)  + " / " + boisMax.toFixed();
		document.getElementById("affRessource2").innerHTML = eau.toFixed(2) + " / " + eauMax.toFixed();
		document.getElementById("nivBat1").innerHTML = "lvl : " + niveau1;
		document.getElementById("achatNivBat1").innerHTML = "+1 niveau";
		document.getElementById("prixBat1").innerHTML = "bois : " + prixbat1;
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
var time3;

function affectation3(evt) {
	if(canard < 1){
		event.preventDefault();
	} else {
		canard = canard - 1;
		canardAffecte3 = canardAffecte3 + 1;
		travailleursTotaux = travailleursTotaux + 1;
		if(canardAffecte3>=1){
			time3=setInterval(incrementRessource3,1000); //incrémente la ressource3 toute les secondes
			document.getElementById("canards3").innerHTML = "Travailleurs : " + canardAffecte3;
			document.getElementById("affRessource1").innerHTML = canard + " / " + canardMax;
			document.getElementById("travailleurs").innerHTML = "Travailleurs actifs : " + travailleursTotaux;
		}
	}
}

function retrait3(evt) {
	if(canard >= canardMax || canardAffecte3 == 0){
		event.preventDefault();
	}else{
		canardAffecte3 = canardAffecte3 - 1;
		canard = canard + 1;
		travailleursTotaux = travailleursTotaux - 1;
		document.getElementById("canards3").innerHTML = "Travailleurs : " + canardAffecte3;
		document.getElementById("affRessource1").innerHTML = canard + " / " + canardMax;
		document.getElementById("travailleurs").innerHTML = "Travailleurs actifs : " + travailleursTotaux;
		if(canardAffecte3<1){
			window.clearInterval(time3); //stoppe l'incrémentation de la ressource
		}
	}
}

function clickRessource3(evt) {
	nourriture = nourriture + 1;
	document.getElementById("affRessource3").innerHTML = nourriture.toFixed(2) + " / " + nourritureMax.toFixed();
}

function incrementRessource3 (evt) {
	nourriture = nourriture + 0.1533;
	document.getElementById("affRessource3").innerHTML = nourriture.toFixed(2) + " / " + nourritureMax.toFixed();
}





  //-----------------------------------------//
 //-------------BATIMENT STOCK--------------//
//-----------------------------------------//

var niveau2 = 0;
var prixbat2 = 600;

function niveauSup2(evt) {
	if (bois>=prixbat2) {
		bois = bois - prixbat2;
		niveau2 = niveau2 + 1;
		prixbat2 = (600 * niveau2 * 1.4); //calcul du coup d'upgrade du batiment
		nourritureMax = (nourritureMax * 1.2);
		document.getElementById("affRessource4").innerHTML = bois.toFixed(2)  + " / " + boisMax.toFixed();
		document.getElementById("affRessource3").innerHTML = nourriture.toFixed(2)  + " / " + nourritureMax.toFixed();
		document.getElementById("nivBat2").innerHTML = "lvl : " + niveau2;
		document.getElementById("achatNivBat2").innerHTML = "+1 niveau";
		document.getElementById("prixBat2").innerHTML = "bois : " + prixbat2;
	} else {
		event.preventDefault();	
	}
}





  //-----------------------------------------//
 //-------------RESSOURCE BOIS--------------//
//-----------------------------------------//

var bois = 0;
var boisMax = 100;
var canardAffecte4 = 0;
var time4;

function affectation4(evt) {
	if(canard < 1){
		event.preventDefault();
	} else {
		canard = canard - 1;
		canardAffecte4 = canardAffecte4 + 1;
		travailleursTotaux = travailleursTotaux + 1;
		if(canardAffecte4>=1){
			time4=setInterval(incrementRessource4,1000); //incrémente la ressource4 toute les secondes
			document.getElementById("canards4").innerHTML = "Travailleurs : " + canardAffecte4;
			document.getElementById("affRessource1").innerHTML = canard + " / " + canardMax;
			document.getElementById("travailleurs").innerHTML = "Travailleurs actifs : " + travailleursTotaux;
		}
	}
}

function retrait4(evt) {
	if(canard >= canardMax || canardAffecte4 == 0){
		event.preventDefault();
	}else{
		canardAffecte4 = canardAffecte4 - 1;
		canard = canard + 1;
		travailleursTotaux = travailleursTotaux - 1;
		document.getElementById("canards4").innerHTML = "Travailleurs : " + canardAffecte4;
		document.getElementById("affRessource1").innerHTML = canard + " / " + canardMax;
		document.getElementById("travailleurs").innerHTML = "Travailleurs actifs : " + travailleursTotaux;
		if(canardAffecte4<1){
			window.clearInterval(time4); //stoppe l'incrémentation de la ressource
		}
	}
}

function clickRessource4(evt) {
	bois = bois + 1;
	document.getElementById("affRessource4").innerHTML = bois.toFixed(2) + " / " + boisMax.toFixed();
}

function incrementRessource4 (evt) {
	bois = bois + 1.091;
	document.getElementById("affRessource4").innerHTML = bois.toFixed(2) + " / " + boisMax.toFixed();
}





