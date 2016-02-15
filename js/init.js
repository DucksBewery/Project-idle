//--VARIABLES GLOBALES--//
//--- ressources ---//
var canard = new Ressource("canard","canardMax",5,0);
var eau = new Ressource("eau","eauMax",5000,2);
var bois = new Ressource("bois","boisMax",10000,2);
var nourriture = new Ressource("nourriture","nourritureMax",5000,2);
var malt = new Ressource("malt","maltMax",4500,0);
var houblon = new Ressource("houblon","houblonMax",500,0);
var grain = new Ressource("grain","grainMax",500,0);
var biere = new Ressource("biere","biereMax",1000,0);
var or = new Ressource("or","orMax",5000,0);
var orge = new Ressource("orge","orgeMax",5000,0);
var ame = new Ressource("ame","ameMax",500,0);
var levure = new Ressource("levure","levureMax",500,0);
var canardMort = new Ressource("canardMort","canardMortMax",5,0);
//--- structures ---//
//conteneurs//
var citerne = new Structure("citerne",3000,0);
var depot = new Structure("depot",3500,0);
var reserve = new Structure("reserve",5000,0);
var cave = new Structure("cave",12500,0);
var coffre = new Structure("coffre",150000,0);
var approvisionnement = new Structure("approvisionnement",7500,0);
var receptacle = new Structure("receptacle",7500,0);
var habitation = new Structure("habitation",2500,0);
//constructions//
var nid = new Structure("nid",300,0);
var puit = new Structure("puit",250,0);
var camp = new Structure("camp",200,0);
var champCrouton = new Structure("champCrouton",300,0);
var champMalt = new Structure("champMalt",1500,0);
var champHoublon = new Structure("champHoublon",2000,0);
var champOrge = new Structure("champOrge",2300,0);
var brasserie = new Structure("brasserie",20000,0);
//--- brasserie ---//
var maltBrass = 2000;
var orgeBrass = 3000;
var houblonBrass = 2000;
var levureBrass = 1000;
var grainBrass = 1000;
var biereBrass = 1000;
var eauBrass1 = 4000;
var eauBrass2 = 9000;
var eauBrass3 = 5000;
var tempsBrass1 = 150;
var tempsBrass2 = 300;
var tempsBrass3 = 240;
var tempsBrass4 = 900;
var tempsBrass5 = 10;
var tabComplete = {"completeBrass1":false,"completeBrass2":false,"completeBrass3":false,"completeBrass4":false,"completeBrass5":false};

var canTot = 0;
var timerCanard = 3000;