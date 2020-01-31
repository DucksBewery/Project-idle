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
        List<Duck> ducksInTownTemp = new List<Duck>();
        List<Duck> ducksInBankTemp = new List<Duck>();
        List<Duck> ducksInLumbermillTemp = new List<Duck>();
        List<Duck> ducksInWellTemp = new List<Duck>();
        List<Duck> ducksInManaWellTemp = new List<Duck>();
        List<Duck> ducksInCroutonFieldsTemp = new List<Duck>();
        List<Duck> ducksInBarleyFieldsTemp = new List<Duck>();
        List<Duck> ducksInMaltFieldsTemp = new List<Duck>();
        List<Duck> ducksInHopFieldsTemp = new List<Duck>();

        //Setting Duck data
        for (int i = 0; i < ducksInTown; i++)
        {
            Duck duckTemp = new Duck(0);
            duckTemp.dId = PlayerPrefs.GetInt("duck_" + i + "_dId_" + slot);
            duckTemp.dLevel = PlayerPrefs.GetInt("duck_" + i + "_levelDuck_" + slot);
            duckTemp.dExp = PlayerPrefs.GetFloat("duck_" + i + "_dExp_" + slot);
            duckTemp.life = PlayerPrefs.GetFloat("duck_" + i + "_life_" + slot);
            duckTemp.strength = PlayerPrefs.GetFloat("duck_" + i + "_strength_" + slot);
            duckTemp.agility = PlayerPrefs.GetFloat("duck_" + i + "_agility_" + slot);
            duckTemp.endurance = PlayerPrefs.GetFloat("duck_" + i + "_endurance_" + slot);
            duckTemp.inteligence = PlayerPrefs.GetFloat("duck_" + i + "_inteligence_" + slot);
            duckTemp.expBanker = PlayerPrefs.GetFloat("duck_" + i + "_expBanker_" + slot);
            duckTemp.expWoodcutter = PlayerPrefs.GetFloat("duck_" + i + "_expWoodcutter_" + slot);
            duckTemp.expWaterCollector = PlayerPrefs.GetFloat("duck_" + i + "_expWaterCollector_" + slot);
            duckTemp.expManaCollector = PlayerPrefs.GetFloat("duck_" + i + "_expManaCollector_" + slot);
            duckTemp.expCroutonFarmer = PlayerPrefs.GetFloat("duck_" + i + "_expCroutonFarmer_" + slot);
            duckTemp.expBarleyFarmer = PlayerPrefs.GetFloat("duck_" + i + "_expBarleyFarmer_" + slot);
            duckTemp.expMaltFarmer = PlayerPrefs.GetFloat("duck_" + i + "_expMaltFarmer_" + slot);
            duckTemp.expHopFarmer = PlayerPrefs.GetFloat("duck_" + i + "_expHopFarmer_" + slot);
            duckTemp.levelBanker = PlayerPrefs.GetInt("duck_" + i + "_levelBanker_" + slot);
            duckTemp.levelWoodcutter = PlayerPrefs.GetInt("duck_" + i + "_levelWoodcutter_" + slot);
            duckTemp.levelWaterCollector = PlayerPrefs.GetInt("duck_" + i + "_levelWaterCollector_" + slot);
            duckTemp.levelManaCollector = PlayerPrefs.GetInt("duck_" + i + "_levelManaCollector_" + slot);
            duckTemp.levelCroutonFarmer = PlayerPrefs.GetInt("duck_" + i + "_levelCroutonFarmer_" + slot);
            duckTemp.levelBarleyFarmer = PlayerPrefs.GetInt("duck_" + i + "_levelBarleyFarmer_" + slot);
            duckTemp.levelMaltFarmer = PlayerPrefs.GetInt("duck_" + i + "_levelMaltFarmer_" + slot);
            duckTemp.levelHopFarmer = PlayerPrefs.GetInt("duck_" + i + "_levelHopFarmer_" + slot);
            duckTemp.assignedJob = PlayerPrefs.GetString("duck_" + i + "_assignedJob_" + slot);
            ducksInTownTemp.Add(duckTemp);

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
            PlayerPrefs.GetFloat("amountWood_" + slot),
            PlayerPrefs.GetInt("levelWood_" + slot),
            PlayerPrefs.GetFloat("amountWater_" + slot),
            PlayerPrefs.GetInt("levelWater_" + slot),
            PlayerPrefs.GetFloat("amountMana_" + slot),
            PlayerPrefs.GetInt("levelMana_" + slot),
            PlayerPrefs.GetFloat("amountFood_" + slot),
            PlayerPrefs.GetInt("levelFood_" + slot),
            PlayerPrefs.GetFloat("amountBarley_" + slot),
            PlayerPrefs.GetInt("levelBarley_" + slot),
            PlayerPrefs.GetFloat("amountMalt_" + slot),
            PlayerPrefs.GetInt("levelMalt_" + slot),
            PlayerPrefs.GetFloat("amountHop_" + slot),
            PlayerPrefs.GetInt("levelHop_" + slot),

            //Getting Building saved data
            PlayerPrefs.GetInt("levelBank_" + slot),
            PlayerPrefs.GetInt("levelLumberMill_" + slot),
            PlayerPrefs.GetInt("levelWell_" + slot),
            PlayerPrefs.GetInt("levelManaWell_" + slot),
            PlayerPrefs.GetInt("levelCroutonFields_" + slot),
            PlayerPrefs.GetInt("levelBarleyFields_" + slot),
            PlayerPrefs.GetInt("levelMaltFields_" + slot),
            PlayerPrefs.GetInt("levelHopFields_" + slot),

            //Getting all Building's worker lists
            ducksInTownTemp, ducksInBankTemp, ducksInLumbermillTemp, 
            ducksInWellTemp, ducksInManaWellTemp, ducksInCroutonFieldsTemp, 
            ducksInBarleyFieldsTemp, ducksInMaltFieldsTemp, ducksInHopFieldsTemp);
    }

    public void SaveTown()
    {
        int slot = 0;

        //Saving Town data
        PlayerPrefs.SetInt("levelTown_" + slot, town.tLevel);
        PlayerPrefs.SetInt("expTown_" + slot, town.tExp);

        //Saving Resource data
        PlayerPrefs.SetFloat("amountGolds_" + slot, town.golds.Amount);
        PlayerPrefs.SetInt("levelGolds_" + slot, town.golds.rLevel);
        PlayerPrefs.SetFloat("amountWood_" + slot, town.wood.Amount);
        PlayerPrefs.SetInt("levelWood_" + slot, town.wood.rLevel);
        PlayerPrefs.SetFloat("amountWater_" + slot, town.water.Amount);
        PlayerPrefs.SetInt("levelWater_" + slot, town.water.rLevel);
        PlayerPrefs.SetFloat("amountMana_" + slot, town.mana.Amount);
        PlayerPrefs.SetInt("levelMana_" + slot, town.mana.rLevel);
        PlayerPrefs.SetFloat("amountFood_" + slot, town.food.Amount);
        PlayerPrefs.SetInt("levelFood_" + slot, town.food.rLevel);
        PlayerPrefs.SetFloat("amountBarley_" + slot, town.barley.Amount);
        PlayerPrefs.SetInt("levelBarley_" + slot, town.barley.rLevel);
        PlayerPrefs.SetFloat("amountMalt_" + slot, town.malt.Amount);
        PlayerPrefs.SetInt("levelMalt_" + slot, town.malt.rLevel);
        PlayerPrefs.SetFloat("amountHop_" + slot, town.hop.Amount);
        PlayerPrefs.SetInt("levelHop_" + slot, town.hop.rLevel);

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
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_life_" + slot, duckTemp.life);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_strength_" + slot, duckTemp.strength);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_agility_" + slot, duckTemp.agility);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_endurance_" + slot, duckTemp.endurance);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_inteligence_" + slot, duckTemp.inteligence);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expBanker_" + slot, duckTemp.expBanker);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expWoodcutter_" + slot, duckTemp.expWoodcutter);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expWaterCollector_" + slot, duckTemp.expWaterCollector);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expManaCollector_" + slot, duckTemp.expManaCollector);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expCroutonFarmer_" + slot, duckTemp.expCroutonFarmer);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expBarleyFarmer_" + slot, duckTemp.expBarleyFarmer);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expMaltFarmer_" + slot, duckTemp.expMaltFarmer);
            PlayerPrefs.SetFloat("duck_" + duckTemp.dId + "_expHopFarmer_" + slot, duckTemp.expHopFarmer);
            PlayerPrefs.SetInt("duck_" + duckTemp.dId + "_levelBanker_" + slot, duckTemp.levelBanker);
            PlayerPrefs.SetInt("duck_" + duckTemp.dId + "_levelWoodcutter_" + slot, duckTemp.levelWoodcutter);
            PlayerPrefs.SetInt("duck_" + duckTemp.dId + "_levelWaterCollector_" + slot, duckTemp.levelWaterCollector);
            PlayerPrefs.SetInt("duck_" + duckTemp.dId + "_levelManaCollector_" + slot, duckTemp.levelManaCollector);
            PlayerPrefs.SetInt("duck_" + duckTemp.dId + "_levelCroutonFarmer_" + slot, duckTemp.levelCroutonFarmer);
            PlayerPrefs.SetInt("duck_" + duckTemp.dId + "_levelBarleyFarmer_" + slot, duckTemp.levelBarleyFarmer);
            PlayerPrefs.SetInt("duck_" + duckTemp.dId + "_levelMaltFarmer_" + slot, duckTemp.levelMaltFarmer);
            PlayerPrefs.SetInt("duck_" + duckTemp.dId + "_levelHopFarmer_" + slot, duckTemp.levelHopFarmer);
            PlayerPrefs.SetString("duck_" + duckTemp.dId + "_assignedJob_" + slot, duckTemp.assignedJob);
        }
        PlayerPrefs.SetInt("ducksInTown_" + slot, town.ducks.Count);

        //Saving modifications
        PlayerPrefs.Save();
    }
}