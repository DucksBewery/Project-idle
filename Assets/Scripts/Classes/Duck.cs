﻿using UnityEngine;

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
    public string assignedJob = "";

    public float life;
    public float strength;
    public float agility;
    public float endurance;
    public float inteligence;

    public void Start()
    {
    }

    public Duck(int id)
    {
        dId = id;
        //TO DO : Utiliser les min/max du nid
        life = Random.Range(100, 200);
        strength = Random.Range(1, 10);
        agility = Random.Range(1, 10);
        endurance = Random.Range(1, 10);
        inteligence = Random.Range(1, 10);
    }
}
