using UnityEngine;
using System;
using System.Collections.Generic;
using System.Linq;

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
    public float bBonus;
    public float bBonusCoefficient;
    public int workersMax;
    public int workersMaxCoefficient;

    public Duck[] workers = new Duck[0];
    public float workersCoefficient;

    private void Start()
    {
        workersMax = bLevel * workersMaxCoefficient;
        workers = new Duck[workersMax];
        bPrice = bPriceBase + ((bLevel -1) * bPriceCoefficient);
        bBonus = 1 + ((bLevel - 1) * bBonusCoefficient);
    }

    //Set the building level
    public void SetBuilding(int loadedLevel, List<Duck> loadedworkers)
    {
        print(bName + ": " +loadedworkers.Count);
        bLevel = loadedLevel;

        
        //workers = loadedworkers.ToArray();

        //Formule a travailler
        workersMax = bLevel * workersMaxCoefficient;
        workers = new Duck[workersMax];
        bPrice = bPriceBase + ((bLevel - 1) * bPriceCoefficient);
        bBonus = 1 + ((bLevel - 1) * bBonusCoefficient);

        for (int i=0; i < loadedworkers.Count; i++)
        {
            workers[i] = loadedworkers[i];
            print(workers[i].strength);
        }
        CalculateCoeff();
    }

    // Upgrade the building
    public void Upgrade()
    {
        bLevel++;
        //Formules a travailler
        workersMax = bLevel * workersMaxCoefficient;
        Duck[] tempDuckList = workers;
        workers = new Duck[workersMax];
        workers = tempDuckList;

        bPrice = bPriceBase + ((bLevel - 1) * bPriceCoefficient);
        bBonus = 1 + ((bLevel - 1) * bBonusCoefficient);

    }

    public void AssignWorker(int targetSlot, Duck targetWorker)
    {
        if (workers[targetSlot] != null)
        {
            UnassignWorker(targetSlot);
            workers[targetSlot] = targetWorker;
            workers[targetSlot].assignedJob = bName;
        }
        else
        {
            workers[targetSlot] = targetWorker;
            workers[targetSlot].assignedJob = bName;
        }
        CalculateCoeff();
    }

    public void UnassignWorker(int targetSlot)
    {
        workers[targetSlot].assignedJob = "";
        workers[targetSlot] = null;
        CalculateCoeff();
    }

    public void CalculateCoeff()
    {
        float workersCoeffTemp = 0;
        switch (bName)
        {
            case "Bank":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.expBanker / 100);
                }
                break;
            case "Lumbermill":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.expWoodcutter / 100) + (1 * (worker.strength / 10));
                }
                break;
            case "Well":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.expWaterCollector / 100) + (1 * (worker.agility / 10));
                }
                break;
            case "ManaWell":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.expManaCollector / 100) + (1 * (worker.inteligence / 10));
                }
                break;
            case "CroutonFields":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.expCroutonFarmer / 100) + (1 * (worker.endurance / 10));
                }
                break;
            case "BarleyFields":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.expBarleyFarmer / 100) + (1 * (worker.endurance / 10));
                }
                break;
            case "MaltFields":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.expMaltFarmer / 100) + (1 * (worker.endurance / 10));
                }
                break;
            case "HopFields":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.expHopFarmer / 100) + (1 * (worker.endurance / 10));
                }
                break;
        }
        workersCoefficient = workersCoeffTemp  * bBonus;
    }
}