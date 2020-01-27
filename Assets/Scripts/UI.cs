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
        textWoodAmount.text = "Bois : " + town.wood.Amount + " / " + town.wood.AmountMax;
        textGoldAmount.text = "Or : " + town.golds.Amount + " / " + town.golds.AmountMax;
        textWaterAmount.text = "Eau : " + town.water.Amount + " / " + town.water.AmountMax;
        textFoodAmount.text = "Nourriture : " + town.food.Amount + " / " + town.food.AmountMax;
    }
}
