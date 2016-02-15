//--- CONSTRUCTEUR ---//
var Structure = function(nom,prix,niveau){
    this.nom = nom;
    this.prix = prix;
    this.niveau = niveau;
};

//--- ACHAT NIVEAU ---//
// augmente le niveau du batiment et le cout du prochain niveau
// param: coefficeint d'augmentation
// return: true si la condition est respectée
Structure.prototype.achatLevel = function(coefBat){
    if (bois.quantite > this.prix) {
        bois.quantite = bois.quantite - this.prix;
        this.niveau = this.niveau + 1;
        this.prix = (this.prix * coefBat);
        document.getElementById("achatNiv"+this.nom).innerHTML = "lvl : " + this.niveau;
        document.getElementById("prix"+this.nom).innerHTML = "bois : " + this.prix.toFixed();
        return true;
    }
};

//-- AFFICHER BATIMENT SPECIAL --//
// affiche la carte du batiment special quand il est achete (au moins au niveau 1)
// param: -
// return: -
Structure.prototype.afficheBatSpe = function(){
  if(this.niveau > 0){
      document.getElementById("btnbrasserie").style.cssText = "visibility : visible; display: inline-block";
      document.getElementById("carteBrasserie").style.cssText = "visibility : visible; display: inline-block";
  } else{
      document.getElementById("btnbrasserie").style.cssText = "visibility : hidden; display: none";
      document.getElementById("carteBrasserie").style.cssText = "visibility : hidden; display: none";
  }
};

//-- AFFICHER ACHAT BATIMENT --//
// affiche les batiments achetables en grisé puis en noir
// param: -
// return: -
Structure.prototype.affichage = function(){
		if(this.niveau == 0){
			document.getElementById(this.nom).style.cssText = "visibility : hidden; display : none;";
			if(bois.quantite > (this.prix * 0.75)){
				document.getElementById(this.nom).style.cssText = "visibility : visible; color : grey; display : table-row;";
				if(bois.quantite > this.prix || this.niveau > 0){
					document.getElementById(this.nom).style.cssText = "visibility : visible; color : black; display : table-row;";
				}
			}
		}else{
			document.getElementById(this.nom).style.cssText = "visibility : visible; color : black; display : table-row;";
		}
};

//--- AUGMENTE RESSOURCE MAX ---//
// augmente le stock maximum de la ressource
// param: la ressource et son coefficient d'augmentation
// return: -
Structure.prototype.augmenteStock = function(resMax,coefRes){
    resMax.quantiteMax = resMax.quantiteMax * coefRes;
    document.getElementById(resMax.nom+"Max").innerHTML = resMax.quantiteMax.toFixed();
};

//--- AUGMENTE TRAVAILLEUR MAX ---//
// augmente le nombre de travailleurs maximum que l'on peut affecter à une ressource
// param: quels travailleurs sont augmentés et le coefficient d'augmentation
// return: -
Structure.prototype.augmenteTravailleur = function(travMax,coefTrav){
    travMax.canardAffectMax = travMax.canardAffectMax + coefTrav;
    document.getElementById("canard"+travMax.nom+"Max").innerHTML = travMax.canardAffectMax.toFixed();
};