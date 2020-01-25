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

    }
}