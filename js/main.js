//--FONCTION KILL--//
/*	action : Calcule le nombre de canards actifs au total dans la ville.
 Calcule le malus sur la nourriture pour chaque travailleur actif.
 Si le malus est supérieur à la création, le texte est affiché en rouge.
 conséquence : la ressource se décrémente, si elle atteint 0 en décrémentation,
 tous les canards actifs meurent, sauf ceux affectés à la nourriture.
 exception : -
 param : -
 retour : -
 conditions : calcul du malus > calcul incrémentation de nourriture.
 */
function kill(){
    canTot = canRess1 + canRess2 + canRess3 + canRess4 + canRess5 + canRess7;
    if((canTot * 0.13)>(canRess3 * 0.8)){
        document.getElementById("nourriture").style.color = "red";
        document.getElementById("nourritureMax").style.color = "red";
        document.getElementById("canTot").innerHTML = canTot;
        document.getElementById("canTotSec").innerHTML = "( -" + (canTot * 0.13).toFixed(2) + "/s )";
        if(nourriture < 0){
            nourriture = 0;
            document.getElementById("nourriture").innerHTML = nourriture.toFixed(1);
            canRess1 = 0;
            canRess2 = 0;
            canRess4 = 0;
            canRess5 = 0;
            canRess7 = 0;
            document.getElementById('canard1').innerHTML = canRess1.toFixed();
            document.getElementById('canard2').innerHTML = canRess2.toFixed();
            document.getElementById('canard4').innerHTML = canRess4.toFixed();
            document.getElementById('canard5').innerHTML = canRess5.toFixed();
            document.getElementById('canard7').innerHTML = canRess7.toFixed();
            canTot = canRess1 + canRess2 + canRess3 + canRess4 + canRess5 + canRess7;
            document.getElementById("canTot").innerHTML = canTot;
            document.getElementById("canTotSec").innerHTML = "( -" + (canTot * 0.13).toFixed(2) + "/s )";
        }
    } else {
        document.getElementById("nourriture").style.color = "black";
        document.getElementById("nourritureMax").style.color = "black";
        document.getElementById("canTot").innerHTML = canTot;
        document.getElementById("canTotSec").innerHTML = "( -" + (canTot * 0.13).toFixed(2) + "/s )";
    }
}

//--FONCTIONS RESSOURCES--//
/*	action : Fonctions permettant l'incrémentation des ressources.
 Celles nommées "ressourceClick" peuvent s'incrémenter au click de l'utilisateur, et automatiquement.
 Celles nommées "incrementRessource" ne gèrent que l'incrémentation automatique.
 Pour chacune, on affichera la ressource et le max à chaque incrémentation,
 et on lancera la fonction kill() pour vérifier la production de nourriture.
 exception : -
 param : -
 retour : -
 conditions : click, canards affectés > 1 pour le lancement du timer.
 */
function createCanard(number){
    canard = canard + number;
    document.getElementById("canard").innerHTML = canard.toFixed();
    document.getElementById("canardMax").innerHTML = canardMax.toFixed();
    if(canard > canardMax){
        canard = canardMax;
        document.getElementById("canard").innerHTML = canard.toFixed();
    }
}

function eauClick(number){
    eau = eau + number;
    document.getElementById("eau").innerHTML = eau.toFixed(1);
    document.getElementById("eauMax").innerHTML = eauMax.toFixed();
    if(eau > eauMax){
        eau = eauMax;
        document.getElementById("eau").innerHTML = eau.toFixed(1);
    }
    kill();
}

function boisClick(number){
    bois = bois + number;
    document.getElementById("bois").innerHTML = bois.toFixed(1);
    document.getElementById("boisMax").innerHTML = boisMax.toFixed();
    if(bois > boisMax){
        bois = boisMax;
        document.getElementById("bois").innerHTML = bois.toFixed(1);
    }
    kill();
}

function nourritureClick(number){
    nourriture = nourriture + number;
    document.getElementById("nourriture").innerHTML = nourriture.toFixed(1);
    document.getElementById("nourritureMax").innerHTML = nourritureMax.toFixed();
    if(nourriture > nourritureMax){
        nourriture = nourritureMax;
        document.getElementById("nourriture").innerHTML = nourriture.toFixed(1);
    }
    kill();
}

function incrementMalt(number){
    malt = malt + number;
    document.getElementById("malt").innerHTML = malt.toFixed(1);
    document.getElementById("maltMax").innerHTML = maltMax.toFixed();
    if(malt > maltMax){
        malt = maltMax;
        document.getElementById("malt").innerHTML = malt.toFixed(1);
    }
    kill();
}

function incrementHoublon(number){
    houblon = houblon + number;
    document.getElementById("houblon").innerHTML = houblon.toFixed(1);
    document.getElementById("houblonMax").innerHTML = houblonMax.toFixed();
    if(houblon > houblonMax){
        houblon = houblonMax;
        document.getElementById("houblon").innerHTML = houblon.toFixed(1);
    }
    kill();
}

function incrementGrain(number){
    grain = grain + number;
    document.getElementById("grain").innerHTML = grain.toFixed(1);
    document.getElementById("grainMax").innerHTML = grainMax.toFixed();
    if(grain > grainMax){
        grain = grainMax;
        document.getElementById("grain").innerHTML = grain.toFixed(1);
    }
    kill();
}

function incrementOr(number){
    or = or + number;
    document.getElementById("or").innerHTML = or.toFixed(1);
    document.getElementById("orMax").innerHTML = orMax.toFixed();
    if(or > orMax){
        or = orMax;
        document.getElementById("or").innerHTML = or.toFixed(1);
    }
    kill();
}

function incrementBiere(number){
    biere = biere + number;
    document.getElementById("biere").innerHTML = biere.toFixed(1);
    document.getElementById("biereMax").innerHTML = biereMax.toFixed();
    if(biere > biereMax){
        biere = biereMax;
        document.getElementById("biere").innerHTML = biere.toFixed(1);
    }
    kill();
}

function incrementOrge(number){
    orge = orge + number;
    document.getElementById("orge").innerHTML = orge.toFixed(1);
    document.getElementById("orgeMax").innerHTML = orgeMax.toFixed();
    if(orge > orgeMax){
        orge = orgeMax;
        document.getElementById("orge").innerHTML = orge.toFixed(1);
    }
    kill();
}

// //--FONCTIONS BRASSERIE--//
/*	action : Fonctions liées au bâtiment spécial : la brasserie.
 Chaque étape est nécéssaire à la création de la ressource bière.
 Les fonctions devront d'abbord être lancées les unes après les
 autres.
 exception : -
 param : -
 retour : -
 conditions : posséder suffisamment des ressources indiquée sur l'interface.
 */
 
 function reste(zetime, div, id) {
    if (zetime>0) {
        var heures = Math.floor(zetime / 3600);
        var minutes = Math.floor(((zetime / 3600) - Math.floor(zetime / 3600)) * 60);
        var secondes = zetime - ((Math.floor(zetime / 60)) * 60);
        if(heures < 10){heures= "0"+ heures}
        if(minutes < 10){minutes= "0"+ minutes}
        if(secondes < 10){secondes="0"+ secondes }

        document.getElementById(div).innerHTML = heures + ":" + minutes + ":" + secondes;
        var restant = zetime - 1;
		setTimeout("reste("+restant+",'"+div+"','"+id+"')", 1000);
    }
    else {
        document.getElementById(div).innerHTML = "Termine";
		tabComplete[id] = true;
    }
}

function maltage(e){
	if(tabComplete["completeBrass1"]==false && orge>orgeBrass && eau>eauBrass1){
		orge = orge - orgeBrass;
		eau = eau - eauBrass1;
		reste(tempsBrass1,"tempsBrass1","completeBrass1");
	}
}

function brassage(e){
    if(tabComplete["completeBrass2"]==false && malt>maltBrass && eau>eauBrass2 && tabComplete["completeBrass1"]==true){
        malt = malt - maltBrass;
        eau = eau - eauBrass2;
		reste(tempsBrass2,"tempsBrass2","completeBrass2");
    }
}

function aromatisation(e){
    if(tabComplete["completeBrass3"]==false && houblon>houblonBrass && eau>eauBrass3 && tabComplete["completeBrass2"]==true){
        houblon = houblon - houblonBrass;
        eau = eau - eauBrass3;
		reste(tempsBrass3,"tempsBrass3","completeBrass3");
    }
}

function fermentation(e){
    if(tabComplete["completeBrass4"]==false && levure>levureBrass && grain>grainBrass && tabComplete["completeBrass3"]==true){
        levure = levure - levureBrass;
        grain = grain - grainBrass;
		reste(tempsBrass4,"tempsBrass4","completeBrass4");
    }
}

function conditionnement(e){
	if(tabComplete["completeBrass5"]==false && tabComplete["completeBrass4"]==true){
		reste(tempsBrass5,"tempsBrass5","completeBrass5");
		biere = biere + (eauBrass1 + eauBrass2 + eauBrass3 + orgeBrass + maltBrass + houblonBrass + (levureBrass * 3) + (grainBrass * 2)) * ((Math.random() + 1) * 0.01);
		if(biere > biereMax){
			biere = biereMax;
			document.getElementById("biere").innerHTML = biere.toFixed(1);
		}
	document.getElementById("biereMax").innerHTML = biereMax.toFixed();
	}
}

function relance(){
	tabComplete["completeBrass1"] = false;
	tabComplete["completeBrass2"] = false;
	tabComplete["completeBrass3"] = false;
	tabComplete["completeBrass4"] = false;
	tabComplete["completeBrass5"] = false;
	document.getElementById("tempsBrass1").innerHTML = "00:02:30";
	document.getElementById("tempsBrass2").innerHTML = "00:05:00";
	document.getElementById("tempsBrass3").innerHTML = "00:04:00";
	document.getElementById("tempsBrass4").innerHTML = "00:15:00";
	document.getElementById("tempsBrass5").innerHTML = "01:30:00";
}
//--FONCTION AFFECTATION--//
/*	action : Affecter un canard à une ressource en fonction de l'id de cette ressource.
 Retire un canard des places dispo dans la ville.
 exception : Impossible d'affecter un canard s'il n'y en a pas de disponible en ville.
 param : Id de la ressource cible.
 retour : -
 conditions : id de la ressource, canards en ville > 0.
 */
function affectCanard(id){
    if(id == 1 && canard > 0) {
        canard = canard - 1;
        canRess1 = canRess1 + 1;
        document.getElementById('canard1').innerHTML = canRess1.toFixed();
        document.getElementById("canard").innerHTML = canard.toFixed();
        document.getElementById("eauSec").innerHTML = (canRess1 * 0.55).toFixed(1);
    }
    if(id == 2 && canard > 0) {
        canard = canard - 1;
        canRess2 = canRess2 + 1;
        document.getElementById('canard2').innerHTML = canRess2.toFixed();
        document.getElementById("canard").innerHTML = canard.toFixed();
        document.getElementById("boisSec").innerHTML = (canRess2 * 1.68).toFixed(2);
    }
    if(id == 3 && canard > 0) {
        canard = canard - 1;
        canRess3 = canRess3 + 1;
        document.getElementById('canard3').innerHTML = canRess3.toFixed();
        document.getElementById("canard").innerHTML = canard.toFixed();
        document.getElementById("nourritureSec").innerHTML = (canRess3 * 0.8).toFixed(2);
    }
    if(id == 4 && canard > 0) {
        canard = canard - 1;
        canRess4 = canRess4 + 1;
        document.getElementById('canard4').innerHTML = canRess4.toFixed();
        document.getElementById("canard").innerHTML = canard.toFixed();
        document.getElementById("maltSec").innerHTML = (canRess4 * 0.36).toFixed(2);
    }
    if(id == 5 && canard > 0) {
        canard = canard - 1;
        canRess5 = canRess5 + 1;
        document.getElementById('canard5').innerHTML = canRess5.toFixed();
        document.getElementById("canard").innerHTML = canard.toFixed();
        document.getElementById("houblonSec").innerHTML = (canRess5 * 0.03).toFixed(2);
    }
    if(id == 7 && canard > 0) {
        canard = canard - 1;
        canRess7 = canRess7 + 1;
        document.getElementById('canard7').innerHTML = canRess7.toFixed();
        document.getElementById("canard").innerHTML = canard.toFixed();
        document.getElementById("orgeSec").innerHTML = (canRess7 * 0.42).toFixed(2);
    }
    kill();
}

/*	action : Retirer un canard d'une ressource à laquelle il est affecté, en fonction de l'id de la ressource.
 Le canard ainsi retiré retournera dans les places libres dans la ville.
 exception : Retrait d'un travailleur impossible si il n'y a pas de place dispo en ville.
 param : Id de la ressource.
 retour : -
 conditions : id de la ressource, canards en ville != canards Max en ville, canards actifs sur la ressource >= 1.
 */
function retCanard(id){
    if(id == 1 && canRess1 >= 1 && canard != canardMax) {
        canard = canard + 1;
        canRess1 = canRess1 - 1;
        document.getElementById('canard1').innerHTML = canRess1.toFixed();
        document.getElementById("canard").innerHTML = canard.toFixed();
        document.getElementById("eauSec").innerHTML = (canRess1 * 0.55).toFixed(2);
    }
    if(id == 2 && canRess2 >= 1 && canard != canardMax) {
        canard = canard + 1;
        canRess2 = canRess2 - 1;
        document.getElementById('canard2').innerHTML = canRess2.toFixed();
        document.getElementById("canard").innerHTML = canard.toFixed();
        document.getElementById("boisSec").innerHTML = (canRess2 * 1.68).toFixed(2);
    }
    if(id == 3 && canRess3 >= 1 && canard != canardMax) {
        canard = canard + 1;
        canRess3 = canRess3 - 1;
        document.getElementById('canard3').innerHTML = canRess3.toFixed();
        document.getElementById("canard").innerHTML = canard.toFixed();
        document.getElementById("nourritureSec").innerHTML = (canRess3 * 0.8).toFixed(2);
    }
    if(id == 4 && canRess4 >= 1 && canard != canardMax) {
        canard = canard + 1;
        canRess4 = canRess4 - 1;
        document.getElementById('canard4').innerHTML = canRess4.toFixed();
        document.getElementById("canard").innerHTML = canard.toFixed();
        document.getElementById("maltSec").innerHTML = (canRess4 * 0.36).toFixed(2);
    }
    if(id == 5 && canRess5 >= 1 && canard != canardMax) {
        canard = canard + 1;
        canRess5 = canRess5 - 1;
        document.getElementById('canard5').innerHTML = canRess5.toFixed();
        document.getElementById("canard").innerHTML = canard.toFixed();
        document.getElementById("houblonSec").innerHTML = (canRess5 * 0.03).toFixed(2);
    }
    if(id == 7 && canRess7 >= 1 && canard != canardMax) {
        canard = canard + 1;
        canRess7 = canRess7 - 1;
        document.getElementById('canard7').innerHTML = canRess7.toFixed();
        document.getElementById("canard").innerHTML = canard.toFixed();
        document.getElementById("orgeSec").innerHTML = (canRess7 * 0.42).toFixed(2);
    }
    kill();
}

//--FONCTIONS BATIMENTS--//
/*	action : Acheter un bâtiment, en cliquant sur la ressource.
 La première fois, achète de bâtiment (lvl 0 --> lvl 1).
 Les fois suivantes, monte le bâtiment de niveau .
 exception : -
 param : Id du bâtiment.
 retour : -
 conditions : id du bâtiment, ressource pour la construction > coût de construction.
 */
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
        boisMax = (boisMax * 1.35);
        nourritureMax = (nourritureMax * 1.35);
        document.getElementById("boisMax").innerHTML = boisMax.toFixed();
        document.getElementById("nourritureMax").innerHTML = nourritureMax.toFixed();
        document.getElementById("achatNivBat2").innerHTML = "lvl : " + niveauBat2;
        document.getElementById("prixBat2").innerHTML = "bois : " + prixBat2;
    }
    if (id == 3 && bois > prixBat3) {
        bois = bois - prixBat3;
        niveauBat3 = niveauBat3 + 1;
        prixBat3 = (prixBat3 * 1.4^niveauBat3);
        houblonMax = (houblonMax * 1.35);
        maltMax = (maltMax * 1.35);
        orgeMax = (orgeMax * 1.35);
        document.getElementById("houblonMax").innerHTML = houblonMax.toFixed();
        document.getElementById("maltMax").innerHTML = maltMax.toFixed();
        document.getElementById("orgeMax").innerHTML = orgeMax.toFixed();
        document.getElementById("achatNivBat3").innerHTML = "lvl : " + niveauBat3;
        document.getElementById("prixBat3").innerHTML = "bois : " + prixBat3;
    }
    if (id == 4 && bois > prixBat4) {
        bois = bois - prixBat4;
        niveauBat4 = niveauBat4 + 1;
        prixBat4 = (prixBat4 * 1.6^niveauBat4);
        biereMax = (biereMax * 1.55);
        document.getElementById("biereMax").innerHTML = biereMax.toFixed();
        document.getElementById("achatNivBat4").innerHTML = "lvl : " + niveauBat4;
        document.getElementById("prixBat4").innerHTML = "bois : " + prixBat4;
    }
    if (id == 5 && bois > prixBat5) {
        bois = bois - prixBat5;
        niveauBat5 = niveauBat5 + 1;
        prixBat5 = (prixBat5 * 2^niveauBat5);
        orMax = (orMax * 1.4);
        document.getElementById("orMax").innerHTML = orMax.toFixed();
        document.getElementById("achatNivBat5").innerHTML = "lvl : " + niveauBat5;
        document.getElementById("prixBat5").innerHTML = "bois : " + prixBat5;
    }
    if (id == 6 && bois > prixBat6) {
        bois = bois - prixBat6;
        niveauBat6 = niveauBat6 + 1;
        prixBat6 = (prixBat6 * 1.5^niveauBat6);
        levureMax = (levureMax * 1.2);
		grainMax = (grainMax * 1.2);
        document.getElementById("levureMax").innerHTML = levureMax.toFixed();
        document.getElementById("grainMax").innerHTML = grainMax.toFixed();
        document.getElementById("achatNivBat6").innerHTML = "lvl : " + niveauBat6;
        document.getElementById("prixBat6").innerHTML = "bois : " + prixBat6;
    }
    if (id == 7 && bois > prixBat7) {
        bois = bois - prixBat7;
        niveauBat7 = niveauBat7 + 1;
        prixBat7 = (prixBat7 * 4^niveauBat7);
        ameMax = (ameMax * 1.2);
        document.getElementById("ameMax").innerHTML = ameMax.toFixed();
        document.getElementById("achatNivBat7").innerHTML = "lvl : " + niveauBat7;
        document.getElementById("prixBat7").innerHTML = "bois : " + prixBat7;
    }
    if (id == 8 && bois > prixBat8) {
        bois = bois - prixBat8;
        niveauBat8 = niveauBat8 + 1;
        prixBat8 = (prixBat8 * 1.4^niveauBat8);
        canardMax = canardMax + 2;
        document.getElementById("canardMax").innerHTML = canardMax.toFixed();
        document.getElementById("achatNivBat8").innerHTML = "lvl : " + niveauBat8;
        document.getElementById("prixBat8").innerHTML = "bois : " + prixBat8;
    }
    // if (id == 9 && bois > prixBat9) {
    // bois = bois - prixBat9;
    // niveauBat9 = niveauBat9 + 1;
    // prixBat9 = (prixBat9 * 1.4^niveauBat9);
    // boisMax = (boisMax * 1.2);
    // document.getElementById("boisMax").innerHTML = boisMax.toFixed();
    // document.getElementById("achatNivBat9").innerHTML = "lvl : " + niveauBat9;
    // document.getElementById("prixBat9").innerHTML = "bois : " + prixBat9;
    // }
    // if (id == 10 && bois > prixBat10) {
    // bois = bois - prixBat10;
    // niveauBat10 = niveauBat10 + 1;
    // prixBat10 = (prixBat10 * 1.4^niveauBat10);
    // boisMax = (boisMax * 1.2);
    // document.getElementById("boisMax").innerHTML = boisMax.toFixed();
    // document.getElementById("achatNivBat10").innerHTML = "lvl : " + niveauBat10;
    // document.getElementById("prixBat10").innerHTML = "bois : " + prixBat10;
    // }
}

//--TIMER--//
/*	action : Timers servant à l'incrémentation automatique de toutes les ressources sur lequelles des canards sont affectés.
 Gère aussi la génération de nouveaux canards.
 Pour chaque ressource, un coefficient est unique et varie en fonction du nombre de travailleurs actifs.
 exception : -
 param : -
 retour : -
 conditions : -
 */
window.setInterval(function(){ //timer 5 secondes

    createCanard(Math.round((Math.random() * (4 - 1)) + 1));

}, 3000);

window.setInterval(function(){ //timer 1 seconde

    eauClick(canRess1);
    boisClick(canRess2 * 0.68);
    nourritureClick((canRess3 * 0.8)-(canTot * 0.13));
    incrementMalt(canRess4 * 0.36);
    incrementHoublon(canRess5 * 0.03);
    incrementGrain((canRess4 * 0.00012) + (canRess5 * 0.00010) + (canRess7 * 0.00013));
    incrementOrge(canRess7 * 0.42);
	if(tabComplete["completeBrass5"]==true){relance()};

}, 1000);