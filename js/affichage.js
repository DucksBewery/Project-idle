//-- ressources-travailleurs --//

var ficheRessources = document.getElementById("ficheRessources");
//var ficheTravailleurs = document.getElementById("ficheTravailleurs");

var ressources = document.getElementById("btnressources");
ressources.addEventListener("click",function(){
    ficheRessources.style.cssText = "visibility : visible; display : inline_block;";
    ficheTravailleurs.style.cssText = "visibility : hidden; display : none;";
});

//var travailleurs = document.getElementById("btntravailleurs");
//travailleurs.addEventListener("click",function(){
//    ficheRessources.style.cssText = "visibility : hidden; display : none;";
//    ficheTravailleurs.style.cssText = "visibility : visible; display : inline_block;";
//});

//-- carte --//

//var carteVille = document.getElementById("carteVille");
var carteBrasserie = document.getElementById("carteBrasserie");
//var cartePort = document.getElementById("cartePort");

//var btnVille = document.getElementById("btnville");
//btnVille.addEventListener("click", function(){
//    carteVille.style.cssText = "visibility : visible; display : inline-block;";
//    carteBrasserie.style.cssText = "visibility : hidden; display : none;";
//    cartePort.style.cssText = "visibility : hidden; display : none;";
//});

var btnBrasserie = document.getElementById("btnbrasserie");
btnBrasserie.addEventListener("click", function(){
    carteVille.style.cssText = "visibility : hidden; display : none;";
    carteBrasserie.style.cssText = "visibility : visible; display : inline-block;";
    cartePort.style.cssText = "visibility : hidden; display : none;";
});

//var btnPort = document.getElementById("btnport");
//btnPort.addEventListener("click", function(){
//    carteVille.style.cssText = "visibility : hidden; display : none;";
//    carteBrasserie.style.cssText = "visibility : hidden; display : none;";
//    cartePort.style.cssText = "visibility : visible; display : inline-block;";
//});

//-- batiments-conteneurs --//

var ficheConteneurs = document.getElementById("ficheConteneurs");
var ficheConstructions = document.getElementById("ficheConstructions");

var conteneurs = document.getElementById("btnconteneurs");
conteneurs.addEventListener("click",function(){
    ficheConstructions.style.cssText = "visibility : hidden; display : none;";
    ficheConteneurs.style.cssText = "visibility : visible; display : inline-block;";
});

//-- batiments-consructions --//

var constructions = document.getElementById("btnconstructions");
constructions.addEventListener("click",function(){
    ficheConstructions.style.cssText = "visibility : visible; display : inline-block;";
    ficheConteneurs.style.cssText = "visibility : hidden; display : none;";
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
	brasserie.afficheBatSpe();

}, 1000);