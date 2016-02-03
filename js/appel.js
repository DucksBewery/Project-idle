//-- APPEL FONCTIONS AU CLICK --//

//incrémenter une ressource//

var clickEau = document.getElementById("eauClick");
clickEau.addEventListener("click", function(){eauClick(1)});

var clickBois = document.getElementById("boisClick");
clickBois.addEventListener("click", function(){boisClick(1)});

var clickNourriture = document.getElementById("nourritureClick");
clickNourriture.addEventListener("click", function(){nourritureClick(1)});

//affecter des cannards//

var canardAffect1 = document.getElementById("affectCanard1");
canardAffect1.addEventListener("click", function(){affectCanard(1)});

var canardAffect2 = document.getElementById("affectCanard2");
canardAffect2.addEventListener("click", function(){affectCanard(2)});

var canardAffect3 = document.getElementById("affectCanard3");
canardAffect3.addEventListener("click", function(){affectCanard(3)});

var canardAffect4 = document.getElementById("affectCanard4");
canardAffect4.addEventListener("click", function(){affectCanard(4)});

var canardAffect5 = document.getElementById("affectCanard5");
canardAffect5.addEventListener("click", function(){affectCanard(5)});

var canardAffect6 = document.getElementById("affectCanard6");
canardAffect6.addEventListener("click", function(){affectCanard(6)});

var canardAffect7 = document.getElementById("affectCanard7");
canardAffect7.addEventListener("click", function(){affectCanard(7)});

//retirer des canards//

var canardRet1 = document.getElementById("retCanard1");
canardRet1.addEventListener("click", function(){retCanard(1)});

var canardRet2 = document.getElementById("retCanard2");
canardRet2.addEventListener("click", function(){retCanard(2)});

var canardRet3 = document.getElementById("retCanard3");
canardRet3.addEventListener("click", function(){retCanard(3)});

var canardRet4 = document.getElementById("retCanard4");
canardRet4.addEventListener("click", function(){retCanard(4)});

var canardRet5 = document.getElementById("retCanard5");
canardRet5.addEventListener("click", function(){retCanard(5)});

var canardRet6 = document.getElementById("retCanard6");
canardRet6.addEventListener("click", function(){retCanard(6)});

var canardRet7 = document.getElementById("retCanard7");
canardRet7.addEventListener("click", function(){retCanard(7)});

//achat niveau batiments//

var batAchat1 = document.getElementById("achatNivBat1");
batAchat1.addEventListener("click", function(){achatLevel(1)});

var batAchat2 = document.getElementById("achatNivBat2");
batAchat2.addEventListener("click", function(){achatLevel(2)});

var batAchat3 = document.getElementById("achatNivBat3");
batAchat3.addEventListener("click", function(){achatLevel(3)});

var batAchat4 = document.getElementById("achatNivBat4");
batAchat4.addEventListener("click", function(){achatLevel(4)});

var batAchat5 = document.getElementById("achatNivBat5");
batAchat5.addEventListener("click", function(){achatLevel(5)});

var batAchat6 = document.getElementById("achatNivBat6");
batAchat6.addEventListener("click", function(){achatLevel(6)});

var batAchat7 = document.getElementById("achatNivBat7");
batAchat7.addEventListener("click", function(){achatLevel(7)});

var batAchat8 = document.getElementById("achatNivBat8");
batAchat8.addEventListener("click", function(){achatLevel(8)});

//var batAchat9 = document.getElementById("achatNivBat9");
//batAchat9.addEventListener("click", function(){achatLevel(9)});
//
//var batAchat10 = document.getElementById("achatNivBat10");
//batAchat10.addEventListener("click", function(){achatLevel(10)});

//etapes brasserie//

var etapeMaltage = document.getElementById("maltage");
etapeMaltage.addEventListener("click",function(){maltage(1)});

var etapeBrassage = document.getElementById("brassage");
etapeBrassage.addEventListener("click",function(){brassage(1)});

var etapeAromatisation = document.getElementById("aromatisation");
etapeAromatisation.addEventListener("click",function(){aromatisation(1)});

var etapeFermentation = document.getElementById("fermentation");
etapeFermentation.addEventListener("click",function(){fermentation(1)});