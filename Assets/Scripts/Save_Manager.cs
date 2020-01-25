using UnityEngine;

public class Save_Manager : MonoBehaviour
{
    //Ce script est sur la camera dans la scene

    //On prends la reference d'un objet de haut niveau sur lequelle est attache 
    //Le script de la classe Town afin d'acceder a ses valeurs
    public Town town;

    void Start()
    {
        //Si le slot local (0) du joueur n'est pas vide on charge ses donnees locales
        if (PlayerPrefs.GetInt("levelTown_" + 0) != 0) LoadTown();
    }

    void LoadTown()
    {
        int slot = 0;

        town.SetTown(
            //Getting Town saved data
            PlayerPrefs.GetInt("levelTown_" + slot),
            PlayerPrefs.GetInt("expTown_" + slot),

            //Getting Resource saved data
            PlayerPrefs.GetFloat("amountGolds_" + slot),
            PlayerPrefs.GetInt("levelGolds_" + slot),
            PlayerPrefs.GetFloat("amountWater_" + slot),
            PlayerPrefs.GetInt("levelWater_" + slot),
            PlayerPrefs.GetFloat("amountFood_" + slot),
            PlayerPrefs.GetInt("levelFood_" + slot),
            PlayerPrefs.GetFloat("amountWood_" + slot),
            PlayerPrefs.GetInt("levelWood_" + slot),

            //Getting Building saved data
            PlayerPrefs.GetInt("levelBank_" + slot),
            PlayerPrefs.GetInt("levelLumberMill_" + slot),
            PlayerPrefs.GetInt("levelWell_" + slot),
            PlayerPrefs.GetInt("levelManaWell_" + slot),
            PlayerPrefs.GetInt("levelCroutonFields_" + slot),
            PlayerPrefs.GetInt("levelBarleyFields_" + slot),
            PlayerPrefs.GetInt("levelMaltFields_" + slot),
            PlayerPrefs.GetInt("levelHopFields_" + slot));
    }

    public void SaveTown()
    {
        int slot = 0;

        //Saving Town data
        PlayerPrefs.SetInt("levelTown_" + slot, town.townLevel);
        PlayerPrefs.SetInt("expTown_" + slot, town.townExp);

        //Saving Resource data
        PlayerPrefs.SetFloat("amountGolds_" + slot, town.golds.rAmount);
        PlayerPrefs.SetInt("levelGolds_" + slot, town.golds.rLevel);
        PlayerPrefs.SetFloat("amountWater_" + slot, town.water.rAmount);
        PlayerPrefs.SetInt("levelWater_" + slot, town.water.rLevel);
        PlayerPrefs.SetFloat("amountFood_" + slot, town.food.rAmount);
        PlayerPrefs.SetInt("levelFood_" + slot, town.food.rLevel);
        PlayerPrefs.SetFloat("amountWood_" + slot, town.wood.rAmount);
        PlayerPrefs.SetInt("levelWood_" + slot, town.wood.rLevel);

        // Saving Builgin data
        PlayerPrefs.SetInt("levelBank_" + slot, town.bank.bLevel);
        PlayerPrefs.SetInt("levelLumberMill_" + slot, town.lumbermill.bLevel);
        PlayerPrefs.SetInt("levelWell_" + slot, town.well.bLevel);
        PlayerPrefs.SetInt("levelManaWell_" + slot, town.manaWell.bLevel);
        PlayerPrefs.SetInt("levelCroutonFields_" + slot, town.croutonFields.bLevel);
        PlayerPrefs.SetInt("levelBarleyFields_" + slot, town.barleyFields.bLevel);
        PlayerPrefs.SetInt("levelMaltFields_" + slot, town.maltFields.bLevel);
        PlayerPrefs.SetInt("levelHopFields_" + slot, town.hopFields.bLevel);

        //On enregistre les modifications
        PlayerPrefs.Save();
    }
}