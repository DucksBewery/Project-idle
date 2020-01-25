using UnityEngine;

public class Save_Manager : MonoBehaviour
{
    //Ce script est sur la camera dans la scene

    //On prends la reference de la camera sur laquelle est attache 
    //Le script de la classe town afin d'acceder a ses valeurs
    public Town town;

    void Start()
    {
        //Si le slot local (0) du joueur n'est pas vide on charge ses donnees locales
        if (PlayerPrefs.GetInt("townLevel_" + 0) != 0) LoadTown();
    }

    void LoadTown()
    {
        int slot = 0;

        town.SetTown(
            //La ville et son experience
            PlayerPrefs.GetInt("townLevel_" + slot),
            PlayerPrefs.GetInt("townExp_" + slot),

            //Les ressources
            PlayerPrefs.GetInt("amountGolds_" + slot),
            PlayerPrefs.GetInt("amountWater_" + slot),
            PlayerPrefs.GetInt("amountFood_" + slot),
            PlayerPrefs.GetInt("amountWood_" + slot));
    }

    public void SaveTown()
    {
        int slot = 0;

        //La ville et son experience
        PlayerPrefs.SetInt("townLevel_" + slot, town.townLevel);
        PlayerPrefs.SetInt("townExp_" + slot, town.townExp);

        //Les ressources
        PlayerPrefs.SetInt("amountGolds_" + slot, town.golds.rAmount);
        PlayerPrefs.SetInt("amountWater_" + slot, town.water.rAmount);
        PlayerPrefs.SetInt("amountFood_" + slot, town.food.rAmount);
        PlayerPrefs.SetInt("amountWood_" + slot, town.wood.rAmount);

        //On enregistre les modifications
        PlayerPrefs.Save();
    }
}