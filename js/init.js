//--VARIABLES GLOBALES--//
//--- ressources ---//
var canard = new Ressource("canard","canardMax",0,5,0);
var eau = new Ressource("eau","eauMax",0,5000,0);
var bois = new Ressource("bois","boisMax",0,10000,0);
var nourriture = new Ressource("nourriture","nourritureMax",0,5000,0);
var malt = new Ressource("malt","maltMax",0,3000,0);
var houblon = new Ressource("houblon","houblonMax",0,500,0);
var grain = new Ressource("grain","grainMax",0,500,0);
var biere = new Ressource("biere","biereMax",0,1000,0);
var or = new Ressource("or","orMax",0,5000,0);
var orge = new Ressource("orge","orgeMax",0,5000,0);
var ame = new Ressource("ame","ameMax",0,500,0);
var levure = new Ressource("levure","levureMax",0,500,0);
var canardMort = new Ressource("canardMort","canardMortMax",0,5,0);
//--- structures ---//
var puit = new Structure("puit",3,0);
var depot = new Structure("depot",3,0);
var reserve = new Structure("reserve",5,0);
var cave = new Structure("cave",1,0);
var coffre = new Structure("coffre",1,0);
var approvionnement = new Structure("approvisionnement",7,0);
var receptacle = new Structure("receptacle",7,0);
var habitation = new Structure("habitation",2,0);
//--- brasserie ---//
var maltBrass = 2;
var orgeBrass = 3;
var houblonBrass = 2;
var levureBrass = 1;
var grainBrass = 1;
var biereBrass = 1;
var eauBrass1 = 4;
var eauBrass2 = 9;
var eauBrass3 = 5;
var tempsBrass1 = 1;
var tempsBrass2 = 1;
var tempsBrass3 = 1;
var tempsBrass4 = 1;
var tempsBrass5 = 1;
var tabComplete = {"completeBrass1":false,"completeBrass2":false,"completeBrass3":false,"completeBrass4":false,"completeBrass5":false};

var canTot = 0;