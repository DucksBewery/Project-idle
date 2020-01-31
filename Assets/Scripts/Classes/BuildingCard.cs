using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class BuildingCard : MonoBehaviour
{
    private Building building;
    private Menu_Manager menu;
    private Town town;

    public Text UIName;
    public Text UILevel;
    public Text UIWorkersCoefficient;
    public Text UIAmount;
    public Text UIAmountMax;

    void Start()
    {
        menu = FindObjectOfType<Menu_Manager>();
        town = FindObjectOfType<Town>();
    }

    public void SetBuildingCard(Building tempBuilding, Town tempTown)
    {
        print("There is "+ tempBuilding.workers.Length + " in the "+tempBuilding.bName);
        building = tempBuilding;
        UIName.text = building.bName;
        UILevel.text = " lvl."+building.bLevel.ToString();
        UIWorkersCoefficient.text = building.workersCoefficient.ToString()+"/s";
        RefreshAmount(tempTown);
    }

    public void GoToAssignView()
    {
        menu.GoToRessourceBuildingAssignView();
        town.targetBuilding = building;
        town.DisplayAssignedDuckCards();
    }

    public void GoToUpgradeView()
    {
        menu.GoToResourceBuildingsUpgradeView();
        town.targetBuilding = building;
    }

    public void RefreshBuildingUI()
    {
        UIName.text = building.bName;
        UILevel.text = building.bLevel.ToString();
        UIWorkersCoefficient.text = building.workersCoefficient.ToString();
    }

    public void RefreshAmount(Town tempTown)
    {
        switch (UIName.text)
        {
            case "Bank":
                UIAmount.text = (Mathf.Round(tempTown.golds.Amount * 100f) / 100f).ToString();
                UIAmountMax.text = "/" + tempTown.golds.AmountMax.ToString();
                break;
            case "Lumbermill":
                UIAmount.text = (Mathf.Round(tempTown.wood.Amount * 100f) / 100f).ToString();
                UIAmountMax.text = "/" + tempTown.wood.AmountMax.ToString();
                break;
            case "Well":
                UIAmount.text = (Mathf.Round(tempTown.water.Amount * 100f) / 100f).ToString();
                UIAmountMax.text = "/" + tempTown.water.AmountMax.ToString();
                break;
            case "ManaWell":
                UIAmount.text = (Mathf.Round(tempTown.mana.Amount * 100f) / 100f).ToString();
                UIAmountMax.text = "/" + tempTown.mana.AmountMax.ToString();
                break;
            case "CroutonFields":
                UIAmount.text = (Mathf.Round(tempTown.food.Amount * 100f) / 100f).ToString();
                UIAmountMax.text = "/" + tempTown.food.AmountMax.ToString();
                break;
            case "BarleyFields":
                UIAmount.text = (Mathf.Round(tempTown.barley.Amount * 100f) / 100f).ToString();
                UIAmountMax.text = "/" + tempTown.barley.AmountMax.ToString();
                break;
            case "MaltFields":
                UIAmount.text = (Mathf.Round(tempTown.malt.Amount * 100f) / 100f).ToString();
                UIAmountMax.text = "/" + tempTown.malt.AmountMax.ToString();
                break;
            case "HopFields":
                UIAmount.text = (Mathf.Round(tempTown.hop.Amount * 100f) / 100f).ToString();
                UIAmountMax.text = "/" + tempTown.hop.AmountMax.ToString();
                break;
        }
    }
}
