using UnityEngine;

public class Duck
{
    public int dId = 0;
    public int dLevel = 1;
    public float dExp = 0;
    public float expBanker = 0;
    public float expWoodcutter = 0;
    public float expWaterCollector = 0;
    public float expManaCollector = 0;
    public float expCroutonFarmer = 0;
    public float expBarleyFarmer = 0;
    public float expMaltFarmer = 0;
    public float expHopFarmer = 0;

    public int levelBanker = 0;
    public int levelWoodcutter = 0;
    public int levelWaterCollector = 0;
    public int levelManaCollector = 0;
    public int levelCroutonFarmer = 0;
    public int levelBarleyFarmer = 0;
    public int levelMaltFarmer = 0;
    public int levelHopFarmer = 0;

    public string assignedJob = "";

    public float life;
    public float strength;
    public float agility;
    public float endurance;
    public float inteligence;
    
    public Duck(int id)
    {
        dId = id;
        dLevel = 1;
        //TO DO : Utiliser les min/max du nid
        life = Random.Range(100, 200);
        strength = Random.Range(1, 10);
        agility = Random.Range(1, 10);
        endurance = Random.Range(1, 10);
        inteligence = Random.Range(1, 10);
    }
}
