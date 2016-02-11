//--- CONSTRUCTEUR ---//
var Ressource = function(nom,nomMax,quantite,quantiteMax,nbCanardAffect){
    this.nom = nom;
    this.nomMax = nomMax;
    this.quantite = quantite;
    this.quantiteMax = quantiteMax;
    this.nbCanardAffect = nbCanardAffect;
};

//--- INCREMENTER ---//
// incrementer ressource
// param: quelle ressource on augmente et de combien on l'augmente
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
    if(canard.quantite > 0) {
        canard.quantite = canard.quantite - 1;
        this.nbCanardAffect = this.nbCanardAffect + 1;
        document.getElementById("canard"+this.nom).innerHTML = this.nbCanardAffect.toFixed();
        document.getElementById(canard.nom).innerHTML = canard.quantite.toFixed();
        document.getElementById(this.nom+"Sec").innerHTML = (this.nbCanardAffect * coef).toFixed(1);
    }
    kill();
};

//--- RETIRER DES TRAVAILLEURS ---//
// diminue le nombre de travailleurs affectes a la ressource
// param: -
// return: -
Ressource.prototype.retCanard = function(coef){
    if(this.nbCanardAffect >= 1 && canard.quantite != canard.quantiteMax) {
        canard.quantite = canard.quantite + 1;
        this.nbCanardAffect = this.nbCanardAffect - 1;
        document.getElementById("canard"+this.nom).innerHTML = this.nbCanardAffect.toFixed();
        document.getElementById(canard.nom).innerHTML = canard.quantite.toFixed();
        document.getElementById(this.nom+"Sec").innerHTML = (this.nbCanardAffect * coef).toFixed(2);
    }
    kill();
};