using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Card : MonoBehaviour
{
    public Duck duck;
    private Town town;

    public Text UILevel;
    public Text UILife;
    public Text UIStrength;
    public Text UIEndurance;
    public Text UIAgility;
    public Text UIInteligence;
    public Text UITargetJobName;
    public Text UITargetJobLevel;
    public Text UITargetJobExp;
    public Text UITargetJobCoeff;
    public Text UIActualJobName;
    public Text UIActualJobLevel;
    public Text UIActualJobExp;
    public Text UIActualJobCoeff;

    private void Awake()
    {
        town = FindObjectOfType<Town>();
    }

    public void AssignWorker()
    {
        if(duck != null) town.TargetDuckToAssign(duck);
        else town.TargetDuckToAssign(null);
    }

    public void SetDuckCard(Duck tempDuck, string tempBuildingName)
    {
        duck = tempDuck;
        if(duck != null)
        {
            UILevel.text = duck.dLevel.ToString();
            UILife.text = duck.life.ToString();
            UIStrength.text = duck.strength.ToString();
            UIEndurance.text = duck.endurance.ToString();
            UIAgility.text = duck.agility.ToString();
            UIInteligence.text = duck.inteligence.ToString();

            //Switch to get target job info
            if (UITargetJobName != null)
            {
                switch (tempBuildingName)
                {
                    case "Bank":
                        UITargetJobName.text = tempBuildingName;
                        UITargetJobLevel.text = duck.levelBanker.ToString();
                        UITargetJobExp.text = duck.expBanker + "%";
                        UITargetJobCoeff.text = 1 + (1 * duck.levelBanker) + "/s";
                        break;
                    case "Lumbermill":
                        UITargetJobName.text = tempBuildingName;
                        UITargetJobLevel.text = duck.levelWoodcutter.ToString();
                        UITargetJobExp.text = "(" + duck.expWoodcutter + "%)";
                        UITargetJobCoeff.text = (1 + (1 * duck.levelWoodcutter) + 1 * (duck.strength / 10)) + "/s";
                        break;
                    case "Well":
                        UITargetJobName.text = tempBuildingName;
                        UITargetJobLevel.text = duck.levelWaterCollector.ToString();
                        UITargetJobExp.text = duck.expWaterCollector + "%";
                        UITargetJobCoeff.text = (1 + (1 * duck.levelWaterCollector) + 1 * (duck.agility / 10)) + "/s";
                        break;
                    case "ManaWell":
                        UITargetJobName.text = tempBuildingName;
                        UITargetJobLevel.text = duck.levelManaCollector.ToString();
                        UITargetJobExp.text = duck.expManaCollector + "%";
                        UITargetJobCoeff.text = (1 + (1 * duck.levelManaCollector) + 1 * (duck.inteligence / 10)) + "/s";
                        break;
                    case "CroutonFields":
                        UITargetJobName.text = tempBuildingName;
                        UITargetJobLevel.text = duck.levelCroutonFarmer.ToString();
                        UITargetJobExp.text = duck.expCroutonFarmer + "%";
                        UITargetJobCoeff.text = (1 + (1 * duck.levelCroutonFarmer) + 1 * (duck.endurance / 10)) + "/s";
                        break;
                    case "BarleyFields":
                        UITargetJobName.text = tempBuildingName;
                        UITargetJobLevel.text = duck.levelBarleyFarmer.ToString();
                        UITargetJobExp.text = duck.expBarleyFarmer + "%";
                        UITargetJobCoeff.text = (1 + (1 * duck.levelBarleyFarmer) + 1 * (duck.endurance / 10)) + "/s";
                        break;
                    case "MaltFields":
                        UITargetJobName.text = tempBuildingName;
                        UITargetJobLevel.text = duck.levelMaltFarmer.ToString();
                        UITargetJobExp.text = duck.expMaltFarmer + "%";
                        UITargetJobCoeff.text = (1 + (1 * duck.levelMaltFarmer) + 1 * (duck.endurance / 10)) + "/s";
                        break;
                    case "HopFields":
                        UITargetJobName.text = tempBuildingName;
                        UITargetJobLevel.text = duck.levelHopFarmer.ToString();
                        UITargetJobExp.text = duck.expHopFarmer + "%";
                        UITargetJobCoeff.text = (1 + (1 * duck.levelHopFarmer) + 1 * (duck.endurance / 10)) + "/s";
                        break;
                    default:
                        UITargetJobName.text = "";
                        UITargetJobLevel.text = "0";
                        UITargetJobExp.text = "0%";
                        UITargetJobCoeff.text = "0/s";
                        break;
                }
            }

            //Switch to get actual job info
            if (UIActualJobName != null)
            {
                switch (duck.assignedJob)
                {
                    case "Bank":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelBanker.ToString();
                        UIActualJobExp.text = duck.expBanker + "%";
                        UIActualJobCoeff.text = 1 + (1 * duck.levelBanker) + "/s";
                        break;
                    case "Lumbermill":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelWoodcutter.ToString();
                        UIActualJobExp.text = duck.expWoodcutter + "%";
                        UIActualJobCoeff.text = (1 + (1 * duck.levelWoodcutter) + 1 * (duck.strength / 10)) + "/s";
                        break;
                    case "Well":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelWaterCollector.ToString();
                        UIActualJobExp.text = duck.expWaterCollector + "%";
                        UIActualJobCoeff.text = (1 + (1 * duck.levelWaterCollector) + 1 * (duck.agility / 10)) + "/s";
                        break;
                    case "ManaWell":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelManaCollector.ToString();
                        UIActualJobExp.text = duck.expManaCollector + "%";
                        UIActualJobCoeff.text = (1 + (1 * duck.levelManaCollector) + 1 * (duck.inteligence / 10)) + "/s";
                        break;
                    case "CroutonFields":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelCroutonFarmer.ToString();
                        UIActualJobExp.text = duck.expCroutonFarmer + "%";
                        UIActualJobCoeff.text = (1 + (1 * duck.levelCroutonFarmer) + 1 * (duck.endurance / 10)) + "/s";
                        break;
                    case "BarleyFields":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelBarleyFarmer.ToString();
                        UIActualJobExp.text = duck.expBarleyFarmer + "%";
                        UIActualJobCoeff.text = (1 + (1 * duck.levelBarleyFarmer) + 1 * (duck.endurance / 10)) + "/s";
                        break;
                    case "MaltFields":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelMaltFarmer.ToString();
                        UIActualJobExp.text = duck.expMaltFarmer + "%";
                        UIActualJobCoeff.text = (1 + (1 * duck.levelMaltFarmer) + 1 * (duck.endurance / 10)) + "/s";
                        break;
                    case "HopFields":
                        UIActualJobName.text = duck.assignedJob.ToString();
                        UIActualJobLevel.text = duck.levelHopFarmer.ToString();
                        UIActualJobExp.text = duck.expHopFarmer + "%";
                        UIActualJobCoeff.text = (1 + (1 * duck.levelHopFarmer) + 1 * (duck.endurance / 10)) + "/s";
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
        else
        {
            UILevel.text = null;
            UILife.text = null;
            UIStrength.text = null;
            UIEndurance.text = null;
            UIAgility.text = null;
            UIInteligence.text = null;
            if (UITargetJobName != null)
            {
                UITargetJobName.text = "SELECT DUCK";
                UITargetJobLevel.text = null;
                UITargetJobExp.text = null;
                UITargetJobCoeff.text = "0/s";
            }
            if (UIActualJobName != null)
            {
                UIActualJobName.text = "SELECT DUCK";
                UIActualJobLevel.text = null;
                UIActualJobExp.text = null;
                UIActualJobCoeff.text = "0/s";
            }
        }
    }
}
