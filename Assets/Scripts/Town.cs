using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using System.Linq;

public class Town : MonoBehaviour
{
    //Ce script est sur la camera dans la scene

    //On prends la reference d'un objet de haut niveau sur lequelle est attache 
    //Le fichier de sauvegarde afin d'y enregistrer les donnees
    public Save_Manager loadedSave;
    public UI ui;

    

    //Town
    public int tLevel;
    public int tExp;
    public List<Duck> ducks = new List<Duck>();

    //Resources 
    public Resource golds;
    public Resource water;
    public Resource food;
    public Resource wood;
    public Resource mana;

    //TO DO : Manage buildings in buildings[]
    //Buildings
    private Building[] buildings = new Building[8];
    public Building bank;
    public Building lumbermill;
    public Building well;
    public Building manaWell;
    public Building croutonFields;
    public Building barleyFields;
    public Building maltFields;
    public Building hopFields;
    /*
    public building nest;
    public building well;
    public building fields;
    public building brewery;
    public building academy;
    public building barracks;
    public building armory;
    public building seaport;
    */
    //To know witch building's worker slot to target
    public Building targetBuilding;
    public int targetWorkerSlot = 0;

    //Components for Duck Selection View
    //List of all active Assign Duck cards
    public List<AssignedCard> displayedAssignedDuckCards = new List<AssignedCard>();
    //Assigned Duck cards display
    public GameObject assignedGrid;
    public GameObject assignedCardComponent;

    //Components for Duck Selection View
    //List of all active Duck cards
    public List<Card> displayedDuckCards = new List<Card>();
    //Currently assigned Duck
    public GameObject assignedDuckCard;
    private Duck targetAssignedDuck;
    //Target Duck to assign
    public GameObject targetDuckCard;
    private Duck targetDuckToAssign;
    //Duck Cards display
    public GameObject duckGrid;
    public GameObject duckCardComponent;

    //Components for Ressource Building view
    public GameObject buildingGrid;
    public GameObject buildingCardComponent;


    void Start()
    {
        buildings[0] = bank;
        buildings[1] = lumbermill;
        buildings[2] = well;
        buildings[3] = manaWell;
        buildings[4] = croutonFields;
        buildings[5] = barleyFields;
        buildings[6] = maltFields;
        buildings[7] = hopFields;
        StartCoroutine(Idle());
    }

    public void SetTown(int loadedTownLevel, int loadedTownExp, float loadedGoldsAmount, int loadedGoldsLevel,
                        float loadedWaterAmount, int loadedWaterLevel, float loadedFoodAmount, int loadedFoodLevel,
                        float loadedWoodAmount, int loadedWoodLevel, int loadedBankLevel, int loadedLumbermillLevel,
                        int loadedWellLevel, int loadedManaWellLevel, int loadedCroutonFieldsLevel, int loadedBarleyFieldsLevel,
                        int loadedMaltFieldsLevel, int loadedHopFieldsLevel, /*int loadedNestLevel, int loadedBreweryLevel,
                         * int loadedAcademyLevel, int loadedBarracksLevel, int loadedArmoryLevel, int loadedSeaportLevel)*/
                        List<Duck> loadedDucksInTown, List<Duck> loadedDucksInBank, List<Duck> loadedDucksInLumbermill,
                        List<Duck> loadedDucksInWell, List<Duck> loadedDucksInManaWell, List<Duck> loadedDucksInCroutonFields,
                        List<Duck> loadedDucksInBarleyFields, List<Duck> loadedDucksInMaltFields, List<Duck> loadedDucksInHopFields)
    {
        //Set town
        tLevel = loadedTownLevel;
        tExp = loadedTownExp;
        ducks = loadedDucksInTown;

        //Set resources
        golds.SetResource(loadedGoldsLevel, loadedGoldsAmount);
        water.SetResource(loadedWaterLevel, loadedWaterAmount);
        food.SetResource(loadedFoodLevel, loadedFoodAmount);
        wood.SetResource(loadedWoodLevel, loadedWoodAmount);

        //Set buildings
        bank.SetBuilding(loadedBankLevel, loadedDucksInBank);
        lumbermill.SetBuilding(loadedLumbermillLevel, loadedDucksInLumbermill);
        well.SetBuilding(loadedWellLevel, loadedDucksInWell);
        manaWell.SetBuilding(loadedManaWellLevel, loadedDucksInManaWell);
        croutonFields.SetBuilding(loadedCroutonFieldsLevel, loadedDucksInCroutonFields);
        barleyFields.SetBuilding(loadedBarleyFieldsLevel, loadedDucksInBarleyFields);
        maltFields.SetBuilding(loadedMaltFieldsLevel, loadedDucksInMaltFields);
        hopFields.SetBuilding(loadedHopFieldsLevel, loadedDucksInHopFields);

        /*
        nest.SetLevel(loadedNestLevel);
        brewery.SetLevel(loadedBreweryLevel);
        academy.SetLevel(loadedAcademyLevel);
        barracks.SetLevel(loadedBarracksLevel);
        armory.SetLevel(loadedArmoryLevel);
        seaport.SetLevel(loadedSeaportLevel);
        */

        ui.RefreshResources();
    }
    
    public void UpgradeBuilding(int buildingId)
    {
        if (golds.Amount >= buildings[buildingId].bPrice) buildings[buildingId].Upgrade();

        //Saving changes
        loadedSave.SaveTown();
    }

    public void UpgradeResource(Resource resource)
    {
        if (golds.Amount >= resource.rPrice) resource.Upgrade();

        //Saving changes
        loadedSave.SaveTown();
    }

    //TO DO : Recuperer infos de quelle case/quel building au toucher
    public void TargetBuildingAssignView(int targetBuildingToAssignTemp)
    {
        targetBuilding = buildings[targetBuildingToAssignTemp];
        DisplayAssignedDuckCards();
    }

    public void TargetSlot(int targetWorkerSlotToAssignTemp)
    {
        targetWorkerSlot = targetWorkerSlotToAssignTemp;
        DestroyDisplayedDuckCards();
        DisplayDuckCards();
    }

    public void TargetAssignedDuck(Duck tempDuck)
    {
        assignedDuckCard.GetComponent<Card>().SetDuckCard(null,null);
        targetDuckCard.GetComponent<Card>().SetDuckCard(null,null);
        targetAssignedDuck = tempDuck;
        assignedDuckCard.GetComponent<Card>().SetDuckCard(targetAssignedDuck, targetBuilding.bName);
    }

    public void TargetDuckToAssign(Duck tempDuck)
    {
        targetDuckToAssign = tempDuck;
        targetDuckCard.GetComponent<Card>().SetDuckCard(targetDuckToAssign, targetBuilding.bName);
    }

    public void AssignWorker()
    {
        assignedDuckCard.GetComponent<Card>().SetDuckCard(null, null);
        targetDuckCard.GetComponent<Card>().SetDuckCard(null, null);

       

            switch (targetDuckToAssign.assignedJob)
        {
            case "Bank":
                buildings[0].UnassignWorker(targetDuckToAssign);
                break;
            case "Lumbermill":
                buildings[1].UnassignWorker(targetDuckToAssign);
                break;
            case "Well":
                buildings[2].UnassignWorker(targetDuckToAssign);
                break;
            case "ManaWell":
                buildings[3].UnassignWorker(targetDuckToAssign);
                break;
            case "CroutonFields":
                buildings[4].UnassignWorker(targetDuckToAssign);
                break;
            case "BarleyFields":
                buildings[5].UnassignWorker(targetDuckToAssign);
                break;
            case "MaltFields":
                buildings[6].UnassignWorker(targetDuckToAssign);
                break;
            case "HopFields":
                buildings[7].UnassignWorker(targetDuckToAssign);
                break;
            default:
                break;
        }

        targetBuilding.AssignWorker(targetWorkerSlot, targetDuckToAssign);
        targetDuckToAssign = null;
        DestroyDisplayedAssignedDuckCards();
        DisplayAssignedDuckCards();
    }

    public void UnassignWorker(Duck targetWorker)
    {
        targetBuilding.AssignWorker(targetWorkerSlot, targetWorker);
    }

    public void CreateDuck()
    {
        //Duck newDuck = new Duck(ducks.Length);
        /*
        GameObject test = new GameObject();
        test.name = "Duck_n#" + ducks.Count;
        Duck newDuck = test.AddComponent<Duck>();
        newDuck.dId = ducks.Count;
        */
        Duck newDuck = new Duck(ducks.Count);

        print(newDuck.life);
        print(newDuck.endurance);
        print(newDuck.strength);
        print(newDuck.agility);

        ducks.Add(newDuck);
        loadedSave.SaveTown();
    }

    IEnumerator Idle()
    {
        while(true)
        {
            yield return new WaitForSeconds(1.0f);
            if (bank.workers.Length > 0)            golds.Increment((bank.workersCoefficient));
            if (well.workers.Length > 0)            water.Increment((well.workersCoefficient));
            if (croutonFields.workers.Length > 0)   food.Increment((croutonFields.workersCoefficient));
            if (lumbermill.workers.Length > 0)      wood.Increment((lumbermill.workersCoefficient));
            if (manaWell.workers.Length > 0)        mana.Increment((manaWell.workersCoefficient));
            ui.RefreshResources();

            //Saving changes
            loadedSave.SaveTown();
        }
    }

    public void DisplayBuildingCards()
    {
        for(int i=0; i<buildings.Length; i++)
        {
            //Setting card on scene
            GameObject newCard = Instantiate(buildingCardComponent, buildingGrid.transform);
            newCard.name = buildings[i].bName;

            //Adding Card script and selected Duck
            newCard.GetComponent<BuildingCard>().SetBuildingCard(buildings[i]);
        }
    }

    public void DisplayDuckCards()
    {
        print("there is "+ducks.Count+" ducks to display");
        foreach (Duck duck in ducks)
        {
            //Setting Card on scene
            GameObject newCard = Instantiate(duckCardComponent, duckGrid.transform);
            newCard.name = duck.dId.ToString();

            //Adding Card script and selected Duck
            newCard.GetComponent<Card>().SetDuckCard(duck, targetBuilding.name);
        }
    }

    public void DisplayAssignedDuckCards()
    {
        //TO DO : A modif pour afficher un les cards en fonction de leur position
        /*
        int i = 0;
        foreach (Duck duck in targetBuilding.workers.Where(itm => itm != null))
        {
            //Setting Card on scene
            GameObject newAssignedCard = Instantiate(assignedCardComponent, assignedCardGrid.transform);
            newAssignedCard.name = duck.dId.ToString();

            //Adding Card script and selected Duck
            newAssignedCard.GetComponent<AssignedCard>().duck = duck;
            newAssignedCard.GetComponent<AssignedCard>().targetSlot = i;
            displayedAssignedDuckCards.Add(newAssignedCard.GetComponent<AssignedCard>());

            i++;
        }*/
        
        for (int i=0; i<targetBuilding.workers.Length; i++)
        {
            if (targetBuilding.workers[i] != null)
            {
                //Setting Card on scene
                GameObject newAssignedCard = Instantiate(assignedCardComponent, assignedGrid.transform);
                newAssignedCard.name = i.ToString();

                //Adding Card script and selected Duck
                newAssignedCard.GetComponent<AssignedCard>().duck = targetBuilding.workers[i];
                displayedAssignedDuckCards.Add(newAssignedCard.GetComponent<AssignedCard>());
            }
            else
            {
                //Setting Card on scene
                GameObject newAssignedCard = Instantiate(assignedCardComponent, assignedGrid.transform);
                newAssignedCard.name = i.ToString();
                //Adding Card script and selected Duck
                displayedAssignedDuckCards.Add(newAssignedCard.GetComponent<AssignedCard>());
            }
        }
    }

    public void DestroyDisplayedBuildingCards()
    {
        foreach (BuildingCard child in buildingGrid.GetComponentsInChildren<BuildingCard>())
        {
            GameObject.Destroy(child.gameObject);
        }
    }

    public void DestroyDisplayedDuckCards()
    {
        foreach (Card child in duckGrid.GetComponentsInChildren<Card>())
        {
            GameObject.Destroy(child.gameObject);
        }
    }

    public void DestroyDisplayedAssignedDuckCards()
    {
        foreach (AssignedCard child in assignedGrid.GetComponentsInChildren<AssignedCard>())
        {
            GameObject.Destroy(child.gameObject);
        }
    }
}