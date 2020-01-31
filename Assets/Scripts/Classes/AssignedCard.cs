using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class AssignedCard : MonoBehaviour
{
    public Duck duck;
    private Town town;
    private Menu_Manager menu;

    public Text UILevel;
    public Text UILife;
    public Text UIStrength;
    public Text UIEndurance;
    public Text UIAgility;
    public Text UIInteligence;
    public Text UIActualJobName;
    public Text UIActualJobLevel;
    public Text UIActualJobExp;
    public Text UIActualJobCoeff;

    private void Start()
    {
        town = FindObjectOfType<Town>();
        menu = FindObjectOfType<Menu_Manager>();
        if (duck != null)
        {
            UILevel.text = duck.dLevel.ToString();
            UILife.text = duck.life.ToString();
            UIStrength.text = duck.strength.ToString();
            UIEndurance.text = duck.endurance.ToString();
            UIAgility.text = duck.agility.ToString();
            UIInteligence.text = duck.inteligence.ToString();
            //Switch to get actual job info
            if (UIActualJobName != null)
            {
                switch (duck.assignedJob)
                {
                    case "Bank":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelBanker.ToString();
                        UIActualJobExp.text = duck.expBanker + "%";
                        UIActualJobCoeff.text = town.golds.rBaseIncrement + (1 * duck.levelBanker) + "/s";
                        break;
                    case "Lumbermill":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelWoodcutter.ToString();
                        UIActualJobExp.text = duck.expWoodcutter + "%";
                        UIActualJobCoeff.text = (town.wood.rBaseIncrement + (1 * duck.levelWoodcutter) + 1 * (duck.strength / 10)) + "/s";
                        break;
                    case "Well":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelWaterCollector.ToString();
                        UIActualJobExp.text = duck.expWaterCollector + "%";
                        UIActualJobCoeff.text = (town.water.rBaseIncrement + (1 * duck.levelWaterCollector) + 1 * (duck.agility / 10)) + "/s";
                        break;
                    case "ManaWell":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelManaCollector.ToString();
                        UIActualJobExp.text = duck.expManaCollector + "%";
                        UIActualJobCoeff.text = (town.mana.rBaseIncrement + (1 * duck.levelManaCollector) + 1 * (duck.inteligence / 10)) + "/s";
                        break;
                    case "CroutonFields":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelCroutonFarmer.ToString();
                        UIActualJobExp.text = duck.expCroutonFarmer + "%";
                        UIActualJobCoeff.text = (town.food.rBaseIncrement + (1 * duck.levelCroutonFarmer) + 1 * (duck.endurance / 10)) + "/s";
                        break;
                    case "BarleyFields":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelBarleyFarmer.ToString();
                        UIActualJobExp.text = duck.expBarleyFarmer + "%";
                        UIActualJobCoeff.text = (town.barley.rBaseIncrement + (1 * duck.levelBarleyFarmer) + 1 * (duck.endurance / 10)) + "/s";
                        break;
                    case "MaltFields":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelMaltFarmer.ToString();
                        UIActualJobExp.text = duck.expMaltFarmer + "%";
                        UIActualJobCoeff.text = (town.malt.rBaseIncrement + (1 * duck.levelMaltFarmer) + 1 * (duck.endurance / 10)) + "/s";
                        break;
                    case "HopFields":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelHopFarmer.ToString();
                        UIActualJobExp.text = duck.expHopFarmer + "%";
                        UIActualJobCoeff.text = (town.hop.rBaseIncrement + (1 * duck.levelHopFarmer) + 1 * (duck.endurance / 10)) + "/s";
                        break;
                    default:
                        UIActualJobName.text = "No Job";
                        UIActualJobLevel.text = "0";
                        UIActualJobExp.text = "0%";
                        UIActualJobCoeff.text = "0/s";
                        break;
                }
            }
        }
    }

    public void TargetSlot()
    {
        menu.GoToResourceBuildingsDuckSelectionView();
        town.TargetSlot(Int32.Parse(gameObject.name));
        if(duck != null) town.TargetAssignedDuck(duck);
    }
}
