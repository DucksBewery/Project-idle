//------------------- APPEL FONCTIONS AU CLICK ----------------------//

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

//achat niveau batiments//

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

//----------------------CHANGER D'ONGLET---------------------------//

//--ressources-travailleurs--//
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

//--carte--//
var carteVille = document.getElementById("carteVille");
var carteBrasserie = document.getElementById("carteBrasserie");
var cartePort = document.getElementById("cartePort");

var ville = document.getElementById("ville");
ville.addEventListener("click", function(){
    carteVille.style.cssText = "visibility : visible; display : inline-block;";
    carteBrasserie.style.cssText = "visibility : hidden; display : none;";
    cartePort.style.cssText = "visibility : hidden; display : none;";
});

var brasserie = document.getElementById("brasserie");
brasserie.addEventListener("click", function(){
    carteVille.style.cssText = "visibility : hidden; display : none;";
    carteBrasserie.style.cssText = "visibility : visible; display : inline-block;";
    cartePort.style.cssText = "visibility : hidden; display : none;";
});

var port = document.getElementById("port");
port.addEventListener("click", function(){
    carteVille.style.cssText = "visibility : hidden; display : none;";
    carteBrasserie.style.cssText = "visibility : hidden; display : none;";
    cartePort.style.cssText = "visibility : visible; display : inline-block;";
});

//--batiments-conteneurs--//
var ficheConstructions = document.getElementById("ficheConstructions");
var ficheConteneurs = document.getElementById("ficheConteneurs");

var constructions = document.getElementById("constructions");
constructions.addEventListener("click",function(){
    ficheConstructions.style.cssText = "visibility : visible; display : inline-block;";
    ficheConteneurs.style.cssText = "visibility : hidden; display : none;";
});

var conteneurs = document.getElementById("conteneurs");
conteneurs.addEventListener("click",function(){
    ficheConstructions.style.cssText = "visibility : hidden; display : none;";
    ficheConteneurs.style.cssText = "visibility : visible; display : inline-block;";
});