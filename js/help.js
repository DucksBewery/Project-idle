function help(){
    var text = "BIENVENUE DANS THE DUCKS'BREWERY !!!" +
    "\n\nDans ce jeu vous incarnez un canard avide de pouvoir, d'argent et d'alcool !" +
    "\nOBJECTIF: devenir le plus riche canard de l'univers en vendant de la bière !" +
    "\n\nMais pour cela, il faudra mettre la main à la pate. Vous commencez avec 3 ressources : " +
    "EAU, BOIS et NOURRITURE. A l'aide de ces ressources, vous pourrez développer votre ville et votre économie." +
        "Par le biais de divers batiments, vous pourrez augementer vos stocks et affecter des canards travailleurs qui" +
        "vous feront gagner des ressources automatiquement.\n\nATTENTION si vous n'avez plus de nourriture vos canards mouront !";
    window.alert(text);
}

$(document).ready(function() {
    help();
});

document.getElementById("help").addEventListener("click",function(){help()});