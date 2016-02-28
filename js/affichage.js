//-- ressources-travailleurs --//

var ficheressources = document.getElementById("ficheressources");
//var ficheTravailleurs = document.getElementById("ficheTravailleurs");

var ressources = document.getElementById("btnressources");
ressources.addEventListener("click",function(){
    ficheressources.style.cssText = "visibility : visible; display : inline_block;";
    fichetravailleurs.style.cssText = "visibility : hidden !imortant; display : none !imortant;";
});

//var travailleurs = document.getElementById("btntravailleurs");
//travailleurs.addEventListener("click",function(){
//    ficheRessources.style.cssText = "visibility : hidden !imortant; display : none !imortant;";
//    ficheTravailleurs.style.cssText = "visibility : visible; display : inline_block;";
//});

//-- carte --//

var carteVille = document.getElementById("carteville");
var carteBrasserie = document.getElementById("cartebrasserie");
var carteAutel = document.getElementById("carteautel");
//var cartePort = document.getElementById("cartePort");

var btnVille = document.getElementById("btnville");
btnVille.addEventListener("click", function(){
    carteVille.style.cssText = "visibility : visible; display : inline-block;";
    carteBrasserie.style.cssText = "visibility : hidden !imortant; display : none !imortant;";
    //cartePort.style.cssText = "visibility : hidden !imortant; display : none !imortant;";
    carteAutel.style.cssText = "visibility : hidden !imortant; display : none !imortant;";
});

var btnbrasserie = document.getElementById("btnbrasserie");
btnbrasserie.addEventListener("click", function(){
    carteVille.style.cssText = "visibility : hidden !imortant; display : none !imortant;";
    carteBrasserie.style.cssText = "visibility : visible; display : inline-block;";
    //cartePort.style.cssText = "visibility : hidden !imortant; display : none !imortant;";
    carteAutel.style.cssText = "visibility : hidden !imortant; display : none !imortant;";
});

var btnautel = document.getElementById("btnautel");
btnautel.addEventListener("click", function(){
    carteVille.style.cssText = "visibility : hidden !imortant; display : none !imortant;";
    carteAutel.style.cssText = "visibility : visible; display : inline-block;";
    //cartePort.style.cssText = "visibility : hidden !imortant; display : none !imortant;";
    carteBrasserie.style.cssText = "visibility : hidden !imortant; display : none !imortant;";
});

//var btnPort = document.getElementById("btnport");
//btnPort.addEventListener("click", function(){
//    carteVille.style.cssText = "visibility : hidden !imortant; display : none !imortant;";
//    carteBrasserie.style.cssText = "visibility : hidden !imortant; display : none !imortant;";
//    cartePort.style.cssText = "visibility : visible; display : inline-block;";
//});

//-- batiments-conteneurs --//

var ficheconteneurs = document.getElementById("ficheconteneurs");
var ficheconstructions = document.getElementById("ficheconstructions");

var conteneurs = document.getElementById("btnconteneurs");
conteneurs.addEventListener("click",function(){
    ficheconstructions.style.cssText = "visibility : hidden; display : none;";
    ficheconteneurs.style.cssText = "visibility : visible; display : inline-block;";
});

//-- batiments-consructions --//

var constructions = document.getElementById("btnconstructions");
constructions.addEventListener("click",function(){
    ficheconstructions.style.cssText = "visibility : visible; display : inline-block;";
    ficheconteneurs.style.cssText = "visibility : hidden; display : none;";
});

window.setInterval(function(){ //timer 1 seconde

	reserve.affichage();
	cave.affichage();
	coffre.affichage();
	approvisionnement.affichage();
	receptacle.affichage();
	habitation.affichage();
	nid.affichage();
	champMalt.affichage();
	champHoublon.affichage();
	champOrge.affichage();
	brasserie.affichage();
    autel.affichage();
	cimetiere.affichage();

}, 1000);