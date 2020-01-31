using UnityEngine;
using System;

[Serializable]

public class Resource : MonoBehaviour
{
    //Ce script est sur un GameObject vide sur la scene

    //Proprietes des ressources
    public string rName;
    public int rLevel;
    public float Amount;
    public int AmountMax;
    public int AmountMaxCoefficient;
    public int rPrice;
    public int rPriceBase;
    public int rPriceCoefficient;
    public float rBonus;
    public float rBonusCoefficient;
    public float rBaseIncrement;

    private void Start()
    {
        rPrice = rPriceBase + ((rLevel - 1) * rPriceCoefficient);
        AmountMax = rLevel * AmountMaxCoefficient;
        rBonus = 1 + ((rLevel - 1) * rBonusCoefficient);
    }

    public void SetResource(int loadedLevel, float loadedAmount)
    {
        rLevel = loadedLevel;
        Amount = loadedAmount;
        rPrice = rPriceBase + ((rLevel - 1) * rPriceCoefficient);
        AmountMax = rLevel * AmountMaxCoefficient;
        rBonus = 1 + ((rLevel - 1) * rBonusCoefficient);
    }

    // Upgrade the resource max amount
    public void Upgrade()
    {
        rLevel++;
        // Formule à revoir
        rPrice = rPriceBase + ((rLevel - 1) * rPriceCoefficient);
        AmountMax = rLevel * AmountMaxCoefficient;
        rBonus = 1 + ((rLevel - 1) * rBonusCoefficient);
    }

    // Increment the resource amount
    public void Increment(float coef)
    {
        if (Amount < AmountMax) CheckMax(Amount += coef * rBonus);// Formule à revoir
    }

    private void CheckMax(float value)
    {
        if (Mathf.Round(value) >= AmountMax) Amount = AmountMax;
    }
}