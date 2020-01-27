using UnityEngine;

public class Menu_Manager : MonoBehaviour
{
    public GameObject Town;
    public GameObject BuildingsOverview;
    public GameObject ResourceBuildingsView;
    public GameObject ResourceBuildingsAssignView;
    public GameObject ResourceBuildingsDuckSelectionView;
    public GameObject SpecialBuildingsView;
    public GameObject Overview;

    private void DisableAll()
    {
        Town.SetActive(false);
        BuildingsOverview.SetActive(false);
        ResourceBuildingsView.SetActive(false);
        ResourceBuildingsAssignView.SetActive(false);
        SpecialBuildingsView.SetActive(false);
        Overview.SetActive(false);
        ResourceBuildingsDuckSelectionView.SetActive(false);
    }

    public void GoToTown()
    {
        DisableAll();
        FindObjectOfType<Town>().DestroyDisplayedCards();
        FindObjectOfType<Town>().DestroyDisplayedAssignedCards();
        Town.SetActive(true);       
    }

    public void GoToBuildings()
    {
        DisableAll();
        BuildingsOverview.SetActive(true);
        FindObjectOfType<Town>().DestroyDisplayedCards();
        FindObjectOfType<Town>().DestroyDisplayedAssignedCards();
        GoToResouceBuildingsView();
    }

    public void GoToResouceBuildingsView()
    {
        SpecialBuildingsView.SetActive(false);
        ResourceBuildingsView.SetActive(true);
    }

    public void GoToRessourceBuildingAssignView()
    {
        ResourceBuildingsAssignView.SetActive(true);
    }
    public void CloseRessourceBuildingAssignView()
    {
        ResourceBuildingsAssignView.SetActive(false);
    }

    public void GoToResourceBuildingsDuckSelectionView()
    {
        ResourceBuildingsDuckSelectionView.SetActive(true);
    }
    public void CloseResourceBuildingsDuckSelectionView()
    {
        ResourceBuildingsDuckSelectionView.SetActive(false);
    }

    public void GoToSpecialBuildingsView()
    {
        ResourceBuildingsView.SetActive(false);
        SpecialBuildingsView.SetActive(true);
    }

    public void GoToOverview()
    {
        DisableAll();
        FindObjectOfType<Town>().DestroyDisplayedCards();
        FindObjectOfType<Town>().DestroyDisplayedAssignedCards();
        Overview.SetActive(true);
    }
}
