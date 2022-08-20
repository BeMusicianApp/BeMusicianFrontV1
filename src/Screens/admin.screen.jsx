import { Link } from "react-router-dom"

const AdminScreen = () => {
    //  select* mes musiques existante liste partition
    //  ajout partition
    //  affiche la partition
    //  la modifier
    //  CRUD
    return (
        <div>
          <div className="managemusique" id="creationmusique">
            Creation d'une nouvelle musique
          </div>
          <div className="managemusique" id="modifiermusique">
            modifier une musique
          </div>
          <form>
            <select>musique
            <option>musique</option>
            </select>
            <select name="accord" title="accord">accord
            <option>accord</option>
            </select>
            <button>modify</button>
            <button>delete</button>
            <button>insert</button><select>line</select>
          </form>
          <div className="managemusique" id="insererdesaccords">
            modifier une musique
          </div>
          <div className="managemusique" id="modifiermusique">
            modifier une musique
          </div>
          <div className="managemusique" id="supprimermusique">
            supprimer une musique
          </div>
        </div>
    );
};
export default AdminScreen;