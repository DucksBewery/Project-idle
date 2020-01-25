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
    public float bBonus;
    public float bBonusCoefficient;

    private void Start()
    {
        bPrice = bPriceBase + ((bLevel -1) * bPriceCoefficient);
        bBonus = 1 + ((bLevel - 1) * bBonusCoefficient);
    }

    //Set the building level
    public void SetBuilding(int loadedLevel)
    {
        bLevel = loadedLevel;

        //Formule a travailler
        bPrice = bPriceBase + ((bLevel - 1) * bPriceCoefficient);
    }

    // Upgrade the building
    public void Upgrade()
    {
        bLevel++;
        bWorkersMax++;
        //Formules a travailler
        bPrice = bPriceBase + ((bLevel - 1) * bPriceCoefficient);
        bBonus = 1 + ((bLevel - 1) * bBonusCoefficient);

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