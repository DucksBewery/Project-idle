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