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
    //public Text UITargetJob;
    //public Text UIActualJob;

    private void Start()
    {
        UILevel.text = duck.dLevel.ToString();
        UILife.text = duck.life.ToString(); ;
        UIStrength.text = duck.strength.ToString(); ;
        UIEndurance.text = duck.endurance.ToString(); ;
        UIAgility.text = duck.agility.ToString(); ;
        UIInteligence.text = duck.inteligence.ToString(); ;
        //UITargetJob.text = duck.ToString(); ;
        //UIActualJob.text = duck.dLevel.ToString();
        town = FindObjectOfType<Town>();
    }

    public void AssignWorker()
    {
        print("Duck stats : LVL_"+duck.dLevel+" STR_"+duck.strength+"AGI_"+duck.agility+"END_"+duck.endurance+"INTEL_"+duck.inteligence);
        town.AssignWorker(duck);
    }
}
