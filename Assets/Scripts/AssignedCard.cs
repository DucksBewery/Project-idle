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
    //public Text UIActualJob;

    private void Start()
    {
        if (duck != null)
        {
            UILevel.text = duck.dLevel.ToString();
            UILife.text = duck.life.ToString();
            UIStrength.text = duck.strength.ToString();
            UIEndurance.text = duck.endurance.ToString();
            UIAgility.text = duck.agility.ToString();
            UIInteligence.text = duck.inteligence.ToString();
            //UITargetJob.text = duck.ToString(); ;
            //UIActualJob.text = duck.dLevel.ToString();
        }
        town = FindObjectOfType<Town>();
        menu = FindObjectOfType<Menu_Manager>();
    }

    public void TargetSlot()
    {
        menu.GoToResourceBuildingsDuckSelectionView();
        town.TargetSlot(Int32.Parse(gameObject.name));
        if(duck != null) town.TargetAssignedDuck(duck);
        town.DisplayCards();
    }
}
