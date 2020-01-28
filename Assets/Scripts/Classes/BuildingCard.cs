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

    // Start is called before the first frame update
    void Start()
    {
        menu = FindObjectOfType<Menu_Manager>();
        town = FindObjectOfType<Town>();
    }

    // Update is called once per frame
    public void SetBuildingCard(Building tempBuilding)
    {
        building = tempBuilding;
        UIName.text = building.bName;
        UILevel.text = building.bLevel.ToString();
        UIWorkersCoefficient.text = building.workersCoefficient.ToString();
    }

    public void GoToAssignView()
    {
        menu.GoToRessourceBuildingAssignView();
        town.targetBuilding = building;
        town.DisplayAssignedDuckCards();
    }
    public void GoToUpgradeView()
    {
        
    }

    public void RefreshBuildingUI()
    {
        UIName.text = building.bName;
        UILevel.text = building.bLevel.ToString();
        UIWorkersCoefficient.text = building.workersCoefficient.ToString();
    }
}
