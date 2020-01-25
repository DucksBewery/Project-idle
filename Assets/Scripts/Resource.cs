using UnityEngine;
using System;

[Serializable]

public class Resource : MonoBehaviour
{
    //Ce script est sur un GameObject vide sur la scene

    //Proprietes des ressources
    public string rName;
    public int rAmount;
    public int rAmountCoefficient;
    public int rAmountMax;
    public int rAmountMaxCoefficient;

    public void SetRessource(int loadedAmount, int loadedAmountMax)
    {
        rAmount = loadedAmount;
        rAmountMax = loadedAmountMax;
    }

    // Upgrade the resource max amount
    public void Upgrade()
    {
        // Formule à revoir
        rAmountMax++;
    }

    // Increment the resource amount
    public void Increment(int coef)
    {
        // Formule à revoir
        rAmount += 1 * coef;
    }
}