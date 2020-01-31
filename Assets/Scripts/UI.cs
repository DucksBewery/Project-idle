using UnityEngine;
using UnityEngine.UI;

public class UI : MonoBehaviour
{
    public Town town;

    public Text textWoodAmount;
    public Text textGoldAmount;
    public Text textWaterAmount;
    public Text textFoodAmount;

    public void RefreshResources()
    {
        textWoodAmount.text = "Bois : " + town.wood.Amount + " / " + town.wood.AmountMax;
        textGoldAmount.text = "Or : " + town.golds.Amount + " / " + town.golds.AmountMax;
        textWaterAmount.text = "Eau : " + town.water.Amount + " / " + town.water.AmountMax;
        textFoodAmount.text = "Nourriture : " + Mathf.Round(town.food.Amount*10f)/10f + " / " + town.food.AmountMax;
    }
}
