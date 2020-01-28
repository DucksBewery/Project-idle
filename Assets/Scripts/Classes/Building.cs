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
        if(targetWorker != null)
        {
            if (workers[targetSlot] != null)
            {
                //First, unasign any duck in this target slot
                UnassignWorker(targetSlot);

                //Second, look if this duck is already assigned
                for (int i = 0; i < workers.Length; i++)
                {
                    if (workers[i] != null)
                    {
                        //If so, unassign this duck from its previous slot
                        if (workers[i].dId == targetWorker.dId)
                        {
                            UnassignWorker(i);
                            break;
                        }
                    }
                }
                //Then add the target duck to the target slot
                workers[targetSlot] = targetWorker;
                workers[targetSlot].assignedJob = bName;
            }
            else
            {
                //Second, look if this duck is already assigned
                for (int i = 0; i < workers.Length; i++)
                {
                    if(workers[i] != null)
                    {
                        //If so, unassign this duck from its previous slot
                        if (workers[i].dId == targetWorker.dId)
                        {
                            UnassignWorker(i);
                            break;
                        }
                    }
                }
                //Then add the target duck to the target slot
                workers[targetSlot] = targetWorker;
                workers[targetSlot].assignedJob = bName;
            }
            CalculateCoeff();
        }
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
                    workersCoeffTemp += 1 + (1 * worker.levelBanker);
                }
                break;
            case "Lumbermill":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.levelWoodcutter) + (1 * (worker.strength / 10));
                }
                break;
            case "Well":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.levelWaterCollector) + (1 * (worker.agility / 10));
                }
                break;
            case "ManaWell":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.levelManaCollector) + (1 * (worker.inteligence / 10));
                }
                break;
            case "CroutonFields":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.levelCroutonFarmer) + (1 * (worker.endurance / 10));
                }
                break;
            case "BarleyFields":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.levelBarleyFarmer) + (1 * (worker.endurance / 10));
                }
                break;
            case "MaltFields":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.levelMaltFarmer) + (1 * (worker.endurance / 10));
                }
                break;
            case "HopFields":
                foreach (Duck worker in workers.Where(itm => itm != null))
                {
                    workersCoeffTemp += 1 + (1 * worker.levelHopFarmer) + (1 * (worker.endurance / 10));
                }
                break;
        }
        workersCoefficient = workersCoeffTemp  * bBonus;
    }
}