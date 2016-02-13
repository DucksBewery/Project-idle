//--- CONSTRUCTEUR ---//
var Ressource = function(nom,nomMax,quantiteMax,canardAffectMax){
    this.nom = nom;
    this.nomMax = nomMax;
    this.quantite = 0;
    this.quantiteMax = quantiteMax;
    this.canardAffect = 0;
    this.canardAffectMax = canardAffectMax;
};

//--- INCREMENTER ---//
// incrementer ressource
// param: de combien on augmente la ressource
// return: -
Ressource.prototype.incremente = function(number){
    this.quantite = this.quantite + number;
    if(this.nom == "canard"){
        document.getElementById(this.nom).innerHTML = this.quantite.toFixed();
    } else {
        document.getElementById(this.nom).innerHTML = this.quantite.toFixed(1);
    }
    document.getElementById(this.nomMax).innerHTML = this.quantiteMax.toFixed();
    if(this.quantite > this.quantiteMax){
        this.quantite = this.quantiteMax;
        if(this.nom == "canard"){
            document.getElementById(this.nom).innerHTML = this.quantite.toFixed();
        }else{
            document.getElementById(this.nom).innerHTML = this.quantite.toFixed(1);
        }
    }
    kill();
};

//--- AFFECTER DES TRAVAILLEURS ---//
// augmente le nombre de canards affectés à la ressource
// param: le nombre de canards deja affectes a la ressource
// return: -
Ressource.prototype.affectCanard = function(coef){
    if(canard.quantite > 0 && this.canardAffect < this.canardAffectMax) {
        canard.quantite = canard.quantite - 1;
        this.canardAffect = this.canardAffect + 1;
        
    }
	document.getElementById("canard"+this.nom).innerHTML = this.canardAffect.toFixed();
    document.getElementById("canard"+this.nom+"Max").innerHTML = this.canardAffectMax.toFixed();
	document.getElementById(canard.nom).innerHTML = canard.quantite.toFixed();
    document.getElementById(this.nom+"Sec").innerHTML = (this.canardAffect * coef).toFixed(2);
    kill();
};

//--- RETIRER DES TRAVAILLEURS ---//
// diminue le nombre de travailleurs affectes a la ressource
// param: -
// return: -
Ressource.prototype.retCanard = function(coef){
    if(this.canardAffect >= 0 && canard.quantite != canard.quantiteMax) {
        canard.quantite = canard.quantite + 1;
        this.canardAffect = this.canardAffect - 1;
    } else {
		this.canardAffect = 0;
	}
	document.getElementById("canard"+this.nom).innerHTML = this.canardAffect.toFixed();
	document.getElementById("canard"+this.nom+"Max").innerHTML = this.canardAffectMax.toFixed();
    document.getElementById(canard.nom).innerHTML = canard.quantite.toFixed();
    document.getElementById(this.nom+"Sec").innerHTML = (this.canardAffect * coef).toFixed(2);
    kill();
};