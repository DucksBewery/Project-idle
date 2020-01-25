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
    public Building lumbermill;

    private Building[] buildings = new Building[1];  

    void Start()
    {
        buildings[0] = lumbermill;
        StartCoroutine(Produce());
    }

    IEnumerator Produce()
    {
        while(true)
        {
            yield return new WaitForSeconds(1.0f);
            wood.Increment(lumbermill.bLevel);
            ui.RefreshResources();
        }
    }

    public void UpgradeBuilding(int buildingId)
    {
        buildings[buildingId].Upgrade(golds.rAmount);
        //On sauvegarde la montee en niveau !
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

    public void SetTown(int loadedTownLevel, int loadedExp, int loadedGoldsAmount, int loadedWaterAmount, int loadedFoodAmount,
                        int loadedWoodAmount)
    /*int loadedNestLevel, int loadedLumbermillLevel, int loadedWellLevel,
    int loadedFieldsLevel, int loadedBreweryLevel, int loadedAcademyLevel,
    int loadedBarracksLevel, int loadedArmoryLevel, int loadedSeaportLevel)*/
    {
        townLevel = loadedTownLevel;
        townExp = loadedExp;
        golds.SetRessource(1, loadedGoldsAmount);
        water.SetRessource(loadedWaterAmount, 50);
        food.SetRessource(loadedFoodAmount, 50);
        wood.SetRessource(loadedWoodAmount, 50);

        /*
        nest.SetLevel(loadedNestLevel);
        lumbermill.SetLevel(loadedLumbermillLevel);
        well.SetLevel(loadedWellLevel);
        fields.SetLevel(loadedFieldsLevel);
        brewery.SetLevel(loadedBreweryLevel);
        academy.SetLevel(loadedAcademyLevel);
        barracks.SetLevel(loadedBarracksLevel);
        armory.SetLevel(loadedArmoryLevel);
        seaport.SetLevel(loadedSeaportLevel);
        */
    }
}