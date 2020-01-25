using UnityEngine;
using UnityEngine.UI;
using System;

[Serializable]

public class Building : MonoBehaviour
{
    //Ce script est sur un GameObject vide sur la scene

    //Proprietes des buildings
    public string bName;
    public int bLevel;
    public int bPrice;
    public int bPriceBase;
    public int bPriceCoefficient;
    public int bWorkers;
    public int bWorkersMax;
    public Text textLumbermillLevel;

    //Set the building level
    public void SetBuilding(int loadedLevel)
    {
        bLevel = loadedLevel;

        //Formule a travailler
        bPrice = bPriceBase + bLevel * bPriceCoefficient;
    }

    // Upgrade the building
    public void Upgrade(int possessedGolds)
    {
        if (possessedGolds >= bPrice)
        {
            bLevel++;
            //Formules a travailler
            bPrice = bPriceBase + bLevel * bPriceCoefficient;
            bWorkersMax++;

            textLumbermillLevel.text = "Lumbermill lvl " + bLevel;
        }
    }

    public void AssignWorker()
    {
        bWorkers++;
    }

    public void UnassignWorker()
    {
        bWorkers--;
    }
}