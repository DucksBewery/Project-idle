//incrémenter une ressource//

var clickEau = document.getElementById("eauClick");
clickEau.addEventListener("click", function(){eau.incremente(1)});

var clickBois = document.getElementById("boisClick");
clickBois.addEventListener("click", function(){bois.incremente(1)});

var clickNourriture = document.getElementById("nourritureClick");
clickNourriture.addEventListener("click", function(){nourriture.incremente(1)});

//affecter des cannards//

var canardAffectEau = document.getElementById("affectCanardEau");
canardAffectEau.addEventListener("click", function(){eau.affectCanard(0.55)});

var canardAffectBois = document.getElementById("affectCanardBois");
canardAffectBois.addEventListener("click", function(){bois.affectCanard(1.68)});

var canardAffectNourriture = document.getElementById("affectCanardNourriture");
canardAffectNourriture.addEventListener("click", function(){nourriture.affectCanard(0.8)});

var canardAffectMalt = document.getElementById("affectCanardMalt");
canardAffectMalt.addEventListener("click", function(){malt.affectCanard(0.36)});

var canardAffectHoublon = document.getElementById("affectCanardHoublon");
canardAffectHoublon.addEventListener("click", function(){houblon.affectCanard(0.03)});

var canardAffectOrge = document.getElementById("affectCanardOrge");
canardAffectOrge.addEventListener("click", function(){orge.affectCanard(0.42)});

//retirer des canards//

var canardRetEau = document.getElementById("retCanardEau");
canardRetEau.addEventListener("click", function(){eau.retCanard(0.55)});

var canardRetBois = document.getElementById("retCanardBois");
canardRetBois.addEventListener("click", function(){bois.retCanard(1.68)});

var canardRetNourriture = document.getElementById("retCanardNourriture");
canardRetNourriture.addEventListener("click", function(){nourriture.retCanard(0.8)});

var canardRetMalt = document.getElementById("retCanardMalt");
canardRetMalt.addEventListener("click", function(){malt.retCanard(0.36)});

var canardRetHoublon = document.getElementById("retCanardHoublon");
canardRetHoublon.addEventListener("click", function(){houblon.retCanard(0.03)});

var canardRetOrge = document.getElementById("retCanardOrge");
canardRetOrge.addEventListener("click", function(){orge.retCanard(0.42)});

//achat niveau batiments Conteneurs//

var batAchatPuit = document.getElementById("achatNivpuit");
batAchatPuit.addEventListener("click", function(){
    if(puit.achatLevel(1.25)){
        puit.augmenteStock(eau,1.2);
    }});

var batAchatDepot = document.getElementById("achatNivdepot");
batAchatDepot.addEventListener("click", function(){
    if(depot.achatLevel(1.4)){
        depot.augmenteStock(bois,1.35);
        depot.augmenteStock(nourriture,1.35);
    }});

var batAchatReserve = document.getElementById("achatNivreserve");
batAchatReserve.addEventListener("click", function(){
    if(reserve.achatLevel(1.4)){
        reserve.augmenteStock(malt,1.35);
        reserve.augmenteStock(houblon,1.35);
        reserve.augmenteStock(orge,1.35);
    }});

var batAchatCave = document.getElementById("achatNivcave");
batAchatCave.addEventListener("click", function(){
    if(cave.achatLevel(1.6)){
        cave.augmenteStock(biere,1.55);
    }});

var batAchatCoffre = document.getElementById("achatNivcoffre");
batAchatCoffre.addEventListener("click", function(){
    if(coffre.achatLevel(2)){
        coffre.augmenteStock(or,1.4);
    }});

var batAchatApprovisionnement = document.getElementById("achatNivapprovisionnement");
batAchatApprovisionnement.addEventListener("click", function(){
    if(approvionnement.achatLevel(1.5)){
        approvionnement.augmenteStock(levure,1.2);
        approvionnement.augmenteStock(grain,1.2);
    }});

var batAchatReceptacle = document.getElementById("achatNivreceptacle");
batAchatReceptacle.addEventListener("click", function(){
    if(receptacle.achatLevel(4)){
        receptacle.augmenteStock(ame,1.2);
    }});

var batAchatHabitation = document.getElementById("achatNivhabitation");
batAchatHabitation.addEventListener("click", function(){
    if(habitation.achatLevel(1.4)){
        habitation.augmenteStock(canard,1.2);
    }});

//achat niveau batiments Constructions//

var batAchatMoulin = document.getElementById("achatNivmoulin");
batAchatMoulin.addEventListener("click", function(){
    if(moulin.achatLevel(2.4)){
        moulin.augmenteTravailleur(eau,2);
    }});

var batAchatCamp = document.getElementById("achatNivcamp");
batAchatCamp.addEventListener("click", function(){
    if(camp.achatLevel(2.4)){
        camp.augmenteTravailleur(bois,3);
    }});

var batAchatChampCrouton = document.getElementById("achatNivchampCrouton");
batAchatChampCrouton.addEventListener("click", function(){
    if(champCrouton.achatLevel(2.4)){
        champCrouton.augmenteTravailleur(nourriture,4);
    }});
	
var batAchatChampMalt = document.getElementById("achatNivchampMalt");
batAchatChampMalt.addEventListener("click", function(){
    if(champMalt.achatLevel(1.8)){
        champMalt.augmenteTravailleur(malt,2);
    }});
	
var batAchatChampHoublon = document.getElementById("achatNivchampHoublon");
batAchatChampHoublon.addEventListener("click", function(){
    if(champHoublon.achatLevel(2.05)){
        champHoublon.augmenteTravailleur(houblon,2);
    }});
	
var batAchatChampOrge = document.getElementById("achatNivchampOrge");
batAchatChampOrge.addEventListener("click", function(){
    if(champOrge.achatLevel(1.65)){
        champOrge.augmenteTravailleur(orge,2);
    }});

	
//etapes brasserie//

var etapeMaltage = document.getElementById("maltage");
etapeMaltage.addEventListener("click",function(){maltage()});

var etapeBrassage = document.getElementById("brassage");
etapeBrassage.addEventListener("click",function(){brassage()});

var etapeAromatisation = document.getElementById("aromatisation");
etapeAromatisation.addEventListener("click",function(){aromatisation()});

var etapeFermentation = document.getElementById("fermentation");
etapeFermentation.addEventListener("click",function(){fermentation()});

var etapeConditionnement = document.getElementById("conditionnement");
etapeConditionnement.addEventListener("click",function(){conditionnement()});

//-- ressources-travailleurs --//

var ficheRessources = document.getElementById("ficheRessources");
var ficheTravailleurs = document.getElementById("ficheTravailleurs");

var ressources = document.getElementById("ressources");
ressources.addEventListener("click",function(){
    ficheRessources.style.cssText = "visibility : visible; display : inline_block;";
    ficheTravailleurs.style.cssText = "visibility : hidden; display : none;";
});

var travailleurs = document.getElementById("travailleurs");
travailleurs.addEventListener("click",function(){
    ficheRessources.style.cssText = "visibility : hidden; display : none;";
    ficheTravailleurs.style.cssText = "visibility : visible; display : inline_block;";
});

//-- carte --//

var carteVille = document.getElementById("carteVille");
var carteBrasserie = document.getElementById("carteBrasserie");
var cartePort = document.getElementById("cartePort");

var btnVille = document.getElementById("ville");
btnVille.addEventListener("click", function(){
    carteVille.style.cssText = "visibility : visible; display : inline-block;";
    carteBrasserie.style.cssText = "visibility : hidden; display : none;";
    cartePort.style.cssText = "visibility : hidden; display : none;";
});

var btnBrasserie = document.getElementById("brasserie");
btnBrasserie.addEventListener("click", function(){
    carteVille.style.cssText = "visibility : hidden; display : none;";
    carteBrasserie.style.cssText = "visibility : visible; display : inline-block;";
    cartePort.style.cssText = "visibility : hidden; display : none;";
});

var btnPort = document.getElementById("port");
btnPort.addEventListener("click", function(){
    carteVille.style.cssText = "visibility : hidden; display : none;";
    carteBrasserie.style.cssText = "visibility : hidden; display : none;";
    cartePort.style.cssText = "visibility : visible; display : inline-block;";
});

//-- batiments-conteneurs --//

var ficheConteneurs = document.getElementById("ficheConteneurs");

var conteneurs = document.getElementById("conteneurs");
conteneurs.addEventListener("click",function(){
    ficheConstructions.style.cssText = "visibility : hidden; display : none;";
    ficheConteneurs.style.cssText = "visibility : visible; display : inline-block;";
});

//-- batiments-consructions --//

var ficheConstructions = document.getElementById("ficheConstructions");

var constructions = document.getElementById("constructions");
constructions.addEventListener("click",function(){
    ficheConstructions.style.cssText = "visibility : visible; display : inline-block;";
    ficheConteneurs.style.cssText = "visibility : hidden; display : none;";
});