//--VARIABLES GLOBALES--//
//--- ressources ---//
var canard = new Ressource("canard","canardMax",5,0);
<<<<<<< HEAD
var eau = new Ressource("eau","eauMax",5000,2);
var bois = new Ressource("bois","boisMax",10000,3);
var nourriture = new Ressource("nourriture","nourritureMax",5000,4);
var malt = new Ressource("malt","maltMax",4500,0);
=======
var eau = new Ressource("eau","eauMax",5000,0);
var bois = new Ressource("bois","boisMax",10000,0);
var nourriture = new Ressource("nourriture","nourritureMax",5000,2);
var malt = new Ressource("malt","maltMax",3000,0);
>>>>>>> origin/master
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
<<<<<<< HEAD
var citerne = new Structure("citerne",3000,0);
=======
var puit = new Structure("puit",3000,0);
>>>>>>> origin/master
var depot = new Structure("depot",3500,0);
var reserve = new Structure("reserve",5000,0);
var cave = new Structure("cave",12500,0);
var coffre = new Structure("coffre",150000,0);
var approvionnement = new Structure("approvisionnement",7500,0);
var receptacle = new Structure("receptacle",7500,0);
var habitation = new Structure("habitation",2500,0);
//constructions//
<<<<<<< HEAD
var nid = new Structure("puit",300,0);
var puit = new Structure("moulin",270,0);
var camp = new Structure("camp",300,0);
var champCrouton = new Structure("champCrouton",320,0);
=======
var nid = new Structure("nid",300,0);
var moulin = new Structure("moulin",500,0);
var camp = new Structure("camp",250,0);
var champCrouton = new Structure("champCrouton",300,1);
>>>>>>> origin/master
var champMalt = new Structure("champMalt",1500,0);
var champHoublon = new Structure("champHoublon",2000,0);
var champOrge = new Structure("champOrge",2300,0);
var brasserie = new Structure("brasserie",2,0);
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