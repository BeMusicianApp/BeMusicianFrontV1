import { Link } from "react-router-dom";
import { useContext } from "react";
import "../css/header.css";
import "../musicfont/styles.css";
import { createElement } from "react";
import * as URL from '../constants/urls/urlFrontEnd'

const Header = () => {

    function popUpLogOut(){
        const popUp = document.createElement("div");
        popUp.style.width = 100;
        popUp.style.height = 100;
        popUp.textContent = "êtes vous sur de vouloir vous déconnecter ?"
        alert(popUp);
    }

    return (
            <div className="navigation">
                    <nav className="contentLogo">
                  
                        <Link to={URL.URL_HOME} className="logo"> <img id="logoHeader" src={process.env.PUBLIC_URL + '/img/site/logosquarewhite.png'}></img></Link>
             
                        </nav>
                        <nav className="mainNav">
                  
                            <Link to={URL.URL_GUITARE}  id="musiqueChoice"><div className="navitem"><i className="icon-note-beamed"></i></div></Link>
                       
                            {/* <Link to={URL.URL_PROFILE} className="navitem" id="profil"><i className="icon-user"></i></Link>               
                 
                            <Link to={URL.URL_CREATION} className="navitem" id="create"><i className="icon-plus"></i></Link>                */}
                         
                            {/* <Link to={URL.URL_INSTRUMENT} className="navitem" id="choixinstrument">admin</Link> */}
                                         
                            {/* <Link to={URL.URL_LOGIN} className="navitem" id="logout"><i className="icon-sign-out" onClick={popUpLogOut}></i></Link>                */}
                   
                  </nav>       
            </div>
    );
};
export default Header;