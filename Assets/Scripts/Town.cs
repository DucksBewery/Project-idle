using UnityEngine;
using System;
using System.Collections;

public class Town : MonoBehaviour
{
    //Ce script est sur la camera dans la scene

    //On prends la reference d'un objet de haut niveau sur lequelle est attache 
    //Le fichier de sauvegarde afin d'y enregistrer les donnees
    public Save_Manager loadedSave;
    public UI ui;

    public int townLevel;
    public int townExp;

    public Resource golds;
    public Resource water;
    public Resource food;
    public Resource wood;
    public Resource mana;

    public Building bank;
    public Building lumbermill;
    public Building well;
    public Building manaWell;
    public Building croutonFields;
    public Building barleyFields;
    public Building maltFields;
    public Building hopFields;

    private Building[] buildings = new Building[1];  

    void Start()
    {
        buildings[0] = lumbermill;
        StartCoroutine(Idle());
    }

    IEnumerator Idle()
    {
        while(true)
        {
            yield return new WaitForSeconds(1.0f);
            golds.Increment((bank.bWorkers * bank.bBonus));
            water.Increment((well.bWorkers * well.bBonus));
            food.Increment((croutonFields.bWorkers * croutonFields.bBonus));
            wood.Increment((lumbermill.bWorkers * lumbermill.bBonus));
            mana.Increment((manaWell.bWorkers * manaWell.bBonus));
            ui.RefreshResources();

            //Saving changes
            //loadedSave.SaveTown();
        }
    }

    public void UpgradeBuilding(int buildingId)
    {
        if (golds.rAmount >= buildings[buildingId].bPrice) buildings[buildingId].Upgrade();

        //Saving changes
        loadedSave.SaveTown();
    }

    /*
    public building nest;
    public building lumbermill;
    public building well;
    public building fields;
    public building brewery;
    public building academy;
    public building barracks;
    public building armory;
    public building seaport;
    */

    public void UpgradeResource(Resource resource)
    {
        if (golds.rAmount >= resource.rPrice) resource.Upgrade();

        //Saving changes
        loadedSave.SaveTown();
    }

    public void SetTown(int loadedTownLevel, int loadedTownExp,
                        float loadedGoldsAmount, int loadedGoldsLevel,
                        float loadedWaterAmount, int loadedWaterLevel,
                        float loadedFoodAmount, int loadedFoodLevel,
                        float loadedWoodAmount, int loadedWoodLevel,
                        int loadedBankLevel, int loadedLumbermillLevel,
                        int loadedWellLevel, int loadedManaWellLevel,
                        int loadedCroutonFieldsLevel, int loadedBarleyFieldsLevel,
                        int loadedMaltFieldsLevel, int loadedHopFieldsLevel)
                        /*int loadedNestLevel, int loadedBreweryLevel,
                         * int loadedAcademyLevel, int loadedBarracksLevel, 
                         * int loadedArmoryLevel, int loadedSeaportLevel)*/
    {
        //Set town
        townLevel = loadedTownLevel;
        townExp = loadedTownExp;

        //Set resources
        golds.SetResource(loadedGoldsLevel, loadedGoldsAmount);
        water.SetResource(loadedWaterLevel, loadedWaterAmount);
        food.SetResource(loadedFoodLevel, loadedFoodAmount);
        wood.SetResource(loadedWoodLevel, loadedWoodAmount);

        //Set buildings
        bank.SetBuilding(loadedBankLevel);
        lumbermill.SetBuilding(loadedLumbermillLevel);
        well.SetBuilding(loadedWellLevel);
        manaWell.SetBuilding(loadedManaWellLevel);
        croutonFields.SetBuilding(loadedCroutonFieldsLevel);
        barleyFields.SetBuilding(loadedBarleyFieldsLevel);
        maltFields.SetBuilding(loadedMaltFieldsLevel);
        hopFields.SetBuilding(loadedHopFieldsLevel);

        /*
        //les batiments speciaux
        nest.SetLevel(loadedNestLevel);
        brewery.SetLevel(loadedBreweryLevel);
        academy.SetLevel(loadedAcademyLevel);
        barracks.SetLevel(loadedBarracksLevel);
        armory.SetLevel(loadedArmoryLevel);
        seaport.SetLevel(loadedSeaportLevel);
        */

        ui.RefreshResources();

<<<<<<< Updated upstream
=======
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
        DisplayAssignedCards();
    }

    public void TargetSlot(int targetWorkerSlotToAssignTemp)
    {
        print(targetWorkerSlotToAssignTemp);
        targetWorkerSlot = targetWorkerSlotToAssignTemp;
    }

    public void AssignWorker(Duck targetWorker)
    {
        targetBuilding.AssignWorker(targetWorkerSlot, targetWorker);
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

    public void DisplayCards()
    {
        print("test");
        print(ducks.Count);
        foreach (Duck duck in ducks)
        {
            //Setting Card on scene
            GameObject newCard = Instantiate(cardComponent, cardGrid.transform);
            newCard.name = duck.dId.ToString();

            //Adding Card script and selected Duck
            newCard.GetComponent<Card>().duck = duck;
            displayedDuckCards.Add(newCard.GetComponent<Card>());
        }
    }

    public void DisplayAssignedCards()
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
                GameObject newAssignedCard = Instantiate(assignedCardComponent, assignedCardGrid.transform);
                newAssignedCard.name = i.ToString();

                //Adding Card script and selected Duck
                newAssignedCard.GetComponent<AssignedCard>().duck = targetBuilding.workers[i];
                displayedAssignedDuckCards.Add(newAssignedCard.GetComponent<AssignedCard>());
            }
            else
            {
                //Setting Card on scene
                GameObject newAssignedCard = Instantiate(assignedCardComponent, assignedCardGrid.transform);
                newAssignedCard.name = i.ToString();
                //Adding Card script and selected Duck
                displayedAssignedDuckCards.Add(newAssignedCard.GetComponent<AssignedCard>());
            }
        }
    }

    public void DestroyDisplayedCards()
    {
        foreach (Card child in cardGrid.GetComponentsInChildren<Card>())
        {
            GameObject.Destroy(child.gameObject);
        }
    }

    public void DestroyDisplayedAssignedCards()
    {
        foreach (AssignedCard child in assignedCardGrid.GetComponentsInChildren<AssignedCard>())
        {
            GameObject.Destroy(child.gameObject);
        }
>>>>>>> Stashed changes
    }
}