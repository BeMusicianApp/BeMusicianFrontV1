import { Link } from "react-router-dom";
import "../css/default.css";
import "../css/NotFoundScreen.css";

const NotFoundScreen = () =>{
    return (
        <div id="ContentNotfoundScreen">
            <div>
            <h1>On veut aller plus vite que la musique ?</h1>
            </div>
                <div id='ContentItemNotFoundScreen'>
                <div className="itemNotFoundScreen">
                    <div className="TextDefault">
                        Pas encore de compte ?
                    </div>
                <Link to="/register"><button className='BasicButton'>S'incrire</button></Link>
                </div>
                <div className="itemNotFoundScreen">
                    <div className="TextDefault">
                        Tu es déjà inscrit ?
                    </div>
                <Link to="/login"><button className='BasicButton'>Se connecter</button></Link>
                </div>
                <div className="itemNotFoundScreen">
                    <div className="TextDefault">
                        Aucune idée de ce que je fais là ?
                    </div >
                    <Link to="/"><button className='BasicButton'>Retour Page d'acceuil</button></Link>
                </div>
            </div>
        </div>
    );
};
export default NotFoundScreen