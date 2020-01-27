using UnityEngine;
using System.Collections.Generic;

public class Save_Manager : MonoBehaviour
{
    //Ce script est sur la camera dans la scene

    //On prends la reference d'un objet de haut niveau sur lequelle est attache 
    //Le script de la classe Town afin d'acceder a ses valeurs
    public Town town;

    void Start()
    {
        //Si le slot local (0) du joueur n'est pas vide on charge ses donnees locales
        if (PlayerPrefs.GetInt("levelTown_" + 0) != 0) LoadTown();
    }

    void LoadTown()
    {
        int slot = 0;

        //Getting all Duck data into ducksInTownTemp tab
        int ducksInTown = PlayerPrefs.GetInt("ducksInTown_" + slot);

        print("There is " + ducksInTown + " ducks to load in Town");

        List<Duck> ducksInTownTemp = new List<Duck>();
        List<Duck> ducksInBankTemp = new List<Duck>();
        List<Duck> ducksInLumbermillTemp = new List<Duck>();
        List<Duck> ducksInWellTemp = new List<Duck>();
        List<Duck> ducksInManaWellTemp = new List<Duck>();
        List<Duck> ducksInCroutonFieldsTemp = new List<Duck>();
        List<Duck> ducksInBarleyFieldsTemp = new List<Duck>();
        List<Duck> ducksInMaltFieldsTemp = new List<Duck>();
        List<Duck> ducksInHopFieldsTemp = new List<Duck>();
        for (int i = 0; i < ducksInTown; i++)
        {
            Duck duckTemp = new Duck(0);
            duckTemp.dId = PlayerPrefs.GetInt("duck_" + i + "_dId_" + slot);
            duckTemp.dLevel = PlayerPrefs.GetInt("duck_" + i + "_dLevel_" + slot);
            duckTemp.dExp = PlayerPrefs.GetFloat("duck_" + i + "_dExp_" + slot);
            duckTemp.expBanker = PlayerPrefs.GetFloat("duck_" + i + "_expBanker_" + slot);
            duckTemp.expWoodcutter = PlayerPrefs.GetFloat("duck_" + i + "_expWoodcutter_" + slot);
            duckTemp.expWaterCollector = PlayerPrefs.GetFloat("duck_" + i + "_expWaterCollector_" + slot);
            duckTemp.expManaCollector = PlayerPrefs.GetFloat("duck_" + i + "_expManaCollector_" + slot);
            duckTemp.expCroutonFarmer = PlayerPrefs.GetFloat("duck_" + i + "_expCroutonFarmer_" + slot);
            duckTemp.expBarleyFarmer = PlayerPrefs.GetFloat("duck_" + i + "_expBarleyFarmer_" + slot);
            duckTemp.expMaltFarmer = PlayerPrefs.GetFloat("duck_" + i + "_expMaltFarmer_" + slot);
            duckTemp.expHopFarmer = PlayerPrefs.GetFloat("duck_" + i + "_expHopFarmer_" + slot);
            duckTemp.assignedJob = PlayerPrefs.GetString("duck_" + i + "_assignedJob_" + slot);
            duckTemp.life = PlayerPrefs.GetFloat("duck_" + i + "_life_" + slot);
            duckTemp.strength = PlayerPrefs.GetFloat("duck_" + i + "_strength_" + slot);
            duckTemp.agility = PlayerPrefs.GetFloat("duck_" + i + "_agility_" + slot);
            duckTemp.endurance = PlayerPrefs.GetFloat("duck_" + i + "_endurance_" + slot);
            duckTemp.inteligence = PlayerPrefs.GetFloat("duck_" + i + "_inteligence_" + slot);
            ducksInTownTemp.Add(duckTemp);

            print(duckTemp.life);
            //Copy of selected Duck to its assigned Building's worker list
            switch (duckTemp.assignedJob)
            {
                case "Bank":
                    ducksInBankTemp.Add(duckTemp);
                    break;
                case "Lumbermill":
                    ducksInLumbermillTemp.Add(duckTemp);
                    break;
                case "Well":
                    ducksInWellTemp.Add(duckTemp);
                    break;
                case "ManaWell":
                    ducksInManaWellTemp.Add(duckTemp);
                    break;
                case "CroutonFields":
                    ducksInCroutonFieldsTemp.Add(duckTemp);
                    break;
                case "BarleyFields":
                    ducksInBarleyFieldsTemp.Add(duckTemp);
                    break;
                case "MaltFields":
                    ducksInMaltFieldsTemp.Add(duckTemp);
                    break;
                case "HopFields":
                    ducksInHopFieldsTemp.Add(duckTemp);
                    break;
                default:
                    break;
            }
        }

        town.SetTown(
            //Getting Town saved data
            PlayerPrefs.GetInt("levelTown_" + slot),
            PlayerPrefs.GetInt("expTown_" + slot),

            //Getting Resource saved data
            PlayerPrefs.GetFloat("amountGolds_" + slot),
            PlayerPrefs.GetInt("levelGolds_" + slot),
            PlayerPrefs.GetFloat("amountWater_" + slot),
            PlayerPrefs.GetInt("levelWater_" + slot),
            PlayerPrefs.GetFloat("amountFood_" + slot),
            PlayerPrefs.GetInt("levelFood_" + slot),
            PlayerPrefs.GetFloat("amountWood_" + slot),
            PlayerPrefs.GetInt("levelWood_" + slot),

            //Getting Building saved data
            PlayerPrefs.GetInt("levelBank_" + slot),
            PlayerPrefs.GetInt("levelLumberMill_" + slot),
            PlayerPrefs.GetInt("levelWell_" + slot),
            PlayerPrefs.GetInt("levelManaWell_" + slot),
            PlayerPrefs.GetInt("levelCroutonFields_" + slot),
            PlayerPrefs.GetInt("levelBarleyFields_" + slot),
            PlayerPrefs.GetInt("levelMaltFields_" + slot),
            PlayerPrefs.GetInt("levelHopFields_" + slot),

            ducksInTownTemp, ducksInBankTemp, ducksInLumbermillTemp, 
            ducksInWellTemp, ducksInManaWellTemp, ducksInCroutonFieldsTemp, 
            ducksInBarleyFieldsTemp, ducksInMaltFieldsTemp, ducksInHopFieldsTemp);
    }

    //TO DO : Sauvegarder canard en ville
    public void SaveTown()
    {
        int slot = 0;

        //print("There is "+town.ducks.Count+" ducks in Town when saving");

        //Saving Town data
        PlayerPrefs.SetInt("levelTown_" + slot, town.tLevel);
        PlayerPrefs.SetInt("expTown_" + slot, town.tExp);

        //Saving Resource data
        PlayerPrefs.SetFloat("amountGolds_" + slot, town.golds.Amount);
        PlayerPrefs.SetInt("levelGolds_" + slot, town.golds.rLevel);
        PlayerPrefs.SetFloat("amountWater_" + slot, town.water.Amount);
        PlayerPrefs.SetInt("levelWater_" + slot, town.water.rLevel);
        PlayerPrefs.SetFloat("amountFood_" + slot, town.food.Amount);
        PlayerPrefs.SetInt("levelFood_" + slot, town.food.rLevel);
        PlayerPrefs.SetFloat("amountWood_" + slot, town.wood.Amount);
        PlayerPrefs.SetInt("levelWood_" + slot, town.wood.rLevel);

        // Saving Builgin data
        PlayerPrefs.SetInt("levelBank_" + slot, town.bank.bLevel);
        PlayerPrefs.SetInt("levelLumberMill_" + slot, town.lumbermill.bLevel);
        PlayerPrefs.SetInt("levelWell_" + slot, town.well.bLevel);
        PlayerPrefs.SetInt("levelManaWell_" + slot, town.manaWell.bLevel);
        PlayerPrefs.SetInt("levelCroutonFields_" + slot, town.croutonFields.bLevel);
        PlayerPrefs.SetInt("levelBarleyFields_" + slot, town.barleyFields.bLevel);
        PlayerPrefs.SetInt("levelMaltFields_" + slot, town.maltFields.bLevel);
        PlayerPrefs.SetInt("levelHopFields_" + slot, town.hopFields.bLevel);

        //Saving Duck data

        foreach(Duck duckTemp in town.ducks)
        {
            PlayerPrefs.SetInt("duck_" + duckTemp.dId + "_dId_" + slot, duckTemp.dId);
            PlayerPrefs.SetInt("duck_" + duckTemp.dId + "_levelDuck_" + slot, duckTemp.dLevel);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_dExp_" + slot, duckTemp.dExp);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expBanker_" + slot, duckTemp.expBanker);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expWoodcutter_" + slot, duckTemp.expWoodcutter);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expWaterCollector_" + slot, duckTemp.expWaterCollector);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expManaCollector_" + slot, duckTemp.expManaCollector);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expCroutonFarmer_" + slot, duckTemp.expCroutonFarmer);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expBarleyFarmer_" + slot, duckTemp.expBarleyFarmer);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expMaltFarmer_" + slot, duckTemp.expMaltFarmer);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expHopFarmer_" + slot, duckTemp.expHopFarmer);
            PlayerPrefs.SetString("duck_" + duckTemp.dId + "_assignedJob_" + slot, duckTemp.assignedJob);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_life_" + slot, duckTemp.life);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_strength_" + slot, duckTemp.strength);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_agility_" + slot, duckTemp.agility);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_endurance_" + slot, duckTemp.endurance);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_inteligence_" + slot, duckTemp.inteligence);
        }
        PlayerPrefs.SetInt("ducksInTown_" + slot, town.ducks.Count);

        //On enregistre les modifications
        PlayerPrefs.Save();
    }
}