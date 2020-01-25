using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Menu_Manager : MonoBehaviour
{
    public GameObject Town;
    public GameObject Buildings;
    public GameObject Overview;

    private void DisableAll()
    {
        Town.SetActive(false);
        Buildings.SetActive(false);
        Overview.SetActive(false);
    }

    public void GoToTown()
    {
        DisableAll();
        Town.SetActive(true);       
    }

    public void GoToBuildings()
    {
        DisableAll();
        Buildings.SetActive(true);
    }

    public void GoToOverview()
    {
        DisableAll();
        Overview.SetActive(true);
    }
}
