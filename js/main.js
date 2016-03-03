//--FONCTION KILL--//
/*
* calcule le nombre de canards actifs au total dans la ville.
 Calcule le malus sur la nourriture pour chaque travailleur actif.
 Si le malus est supérieur à la création, le texte est affiché en rouge.
 conséquence : la ressource se décrémente, si elle atteint 0 en décrémentation,
 tous les canards actifs meurent, sauf ceux affectés à la nourriture.
* param : -
* return : -
 */
function kill(){
    canTot = eau.canardAffect + bois.canardAffect + nourriture.canardAffect + malt.canardAffect + houblon.canardAffect + orge.canardAffect;
    if((canTot * 0.13)>(nourriture.canardAffect * 0.8)){
        document.getElementById("nourriture").style.color = "red";
        document.getElementById("nourritureMax").style.color = "red";
        document.getElementById("canTot").innerHTML = canTot;
        document.getElementById("canTotSec").innerHTML = "( -" + (canTot * 0.13).toFixed(2) + "/s )";
        if(nourriture.quantite < 0){
            nourriture.quantite = 0;
            document.getElementById("nourriture").innerHTML = nourriture.quantite.toFixed(1);
            eau.canardAffect = 0;
            document.getElementById("eauSec").innerHTML = (eau.canardAffect * 0.55).toFixed(1);
            bois.canardAffect = 0;
            document.getElementById("boisSec").innerHTML = (bois.canardAffect * 1.68).toFixed(1);
            malt.canardAffect = 0;
            document.getElementById("maltSec").innerHTML = (malt.canardAffect * 0.36).toFixed(1);
            houblon.canardAffect = 0;
            document.getElementById("houblonSec").innerHTML = (houblon.canardAffect * 0.03).toFixed(1);
            orge.canardAffect = 0;
            document.getElementById("orgeSec").innerHTML = (orge.canardAffect * 0.42).toFixed(1);
            document.getElementById('canardeau').innerHTML = eau.canardAffect.toFixed();
            document.getElementById('canardbois').innerHTML = bois.canardAffect.toFixed();
            document.getElementById('canardmalt').innerHTML = malt.canardAffect.toFixed();
            document.getElementById('canardhoublon').innerHTML = houblon.canardAffect.toFixed();
            document.getElementById('canardorge').innerHTML = orge.canardAffect.toFixed();
            canTot = eau.canardAffect + bois.canardAffect + nourriture.canardAffect + malt.canardAffect + houblon.canardAffect + orge.canardAffect;
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


/*
* verifie l'avancement d'une étape brasserie
* param: le timer de l'étape, la div dans laquelle on affiche ce timer et l'identifiant de l'étape
* return: -
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

// //--FONCTIONS BRASSERIE--//
/*
 * fonctions liées au bâtiment spécial : la brasserie.
 Chaque étape est nécéssaire à la création de la ressource bière.
 Les fonctions devront d'abbord être lancées les unes après les
 autres.
 * param : -
 * retour : -
 */

function maltage(){
    if(tabComplete["completeBrass1"]==false && orge.quantite>orgeBrass && eau.quantite>eauBrass1){
        orge.quantite = orge.quantite - orgeBrass;
        eau.quantite = eau.quantite - eauBrass1;
        reste(tempsBrass1,"tempsBrass1","completeBrass1");
    }
}

function brassage(){
    if(tabComplete["completeBrass2"]==false && malt.quantite>maltBrass && eau.quantite>eauBrass2 && tabComplete["completeBrass1"]==true){
        malt.quantite = malt.quantite - maltBrass;
        eau.quantite = eau.quantite - eauBrass2;
        reste(tempsBrass2,"tempsBrass2","completeBrass2");
    }
}

function aromatisation(){
    if(tabComplete["completeBrass3"]==false && houblon.quantite>houblonBrass && eau.quantite>eauBrass3 && tabComplete["completeBrass2"]==true){
        houblon.quantite = houblon.quantite - houblonBrass;
        eau.quantite = eau.quantite - eauBrass3;
        reste(tempsBrass3,"tempsBrass3","completeBrass3");
    }
}

function fermentation(){
    if(tabComplete["completeBrass4"]==false && levure.quantite>levureBrass && grain.quantite>grainBrass && tabComplete["completeBrass3"]==true){
        levure.quantite = levure.quantite - levureBrass;
        grain.quantite = grain.quantite - grainBrass;
        reste(tempsBrass4,"tempsBrass4","completeBrass4");
    }
}

function conditionnement(){
    if(tabComplete["completeBrass5"]==false && tabComplete["completeBrass4"]==true){
        reste(tempsBrass5,"tempsBrass5","completeBrass5");
        biere.quantite = biere.quantite + (eauBrass1 + eauBrass2 + eauBrass3 + orgeBrass + maltBrass + houblonBrass + (levureBrass * 3) + (grainBrass * 2)) * ((Math.random() + 1) * 0.01);
        document.getElementById("biere").innerHTML = biere.quantite.toFixed(1);
        if(biere.quantite > biere.quantiteMax){
            biere.quantite = biere.quantiteMax;
            document.getElementById("biere").innerHTML = biere.quantite.toFixed(1);
        }
        document.getElementById("biereMax").innerHTML = biere.quantiteMax.toFixed();
    }
}

/*
* lorsque toutes les étapes sont terminées, on réinitialise les timer à 0
* param: -
* return: -
 */
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

//--TIMER--//
/*
* timers servant à l'incrémentation automatique de toutes les ressources sur lequelles des canards sont affectés.
 Gère aussi la génération de nouveaux canards.
 Pour chaque ressource, un coefficient est unique et varie en fonction du nombre de travailleurs actifs.
* param : -
* retour : -
 */
window.setInterval(function(){ //timer 5 secondes

    canard.incremente(Math.round((Math.random() * (4 - 1)) + 1));

}, 60000);

window.setInterval(function(){ //timer 1 seconde

    eau.incremente(eau.canardAffect * 0.55);
    bois.incremente(bois.canardAffect * 1.68);
    nourriture.incremente((nourriture.canardAffect * 0.8)-(canTot * 0.13));
    malt.incremente(malt.canardAffect * 0.36);
    houblon.incremente(houblon.canardAffect * 0.03);
    orge.incremente(orge.canardAffect * 0.42);
    if(tabComplete["completeBrass5"]==true){relance()}

}, 1000);