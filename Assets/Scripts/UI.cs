using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UI : MonoBehaviour
{
    public Town town;

    public Text textWoodAmount;
    public Text textGoldAmount;
    public Text textWaterAmount;
    public Text textFoodAmount;

    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
    }

    public void RefreshResources()
    {
        textWoodAmount.text = "Bois : " + town.wood.rAmount + " / " + town.wood.rAmountMax;
        textGoldAmount.text = "Or : " + town.golds.rAmount + " / " + town.golds.rAmountMax;
        textWaterAmount.text = "Eau : " + town.water.rAmount + " / " + town.water.rAmountMax;
        textFoodAmount.text = "Nourriture : " + town.food.rAmount + " / " + town.food.rAmountMax;
    }
}
