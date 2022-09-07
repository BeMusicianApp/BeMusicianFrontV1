import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import "../css/header.css";
import "../musicfont/styles.css";
import { createElement } from "react";

const Header = () => {
    const { auth } = useContext(AuthContext);

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
                        {auth.role === 1 && (
                        <Link to="/" className="logo"><img id="logoHeader" src={process.env.PUBLIC_URL + '/img/site/logosquarewhite.png'}></img></Link>
                        )}
                        </nav>
                        <nav className="mainNav">
                        {auth.role === 1 && (
                            <Link to="/guitare"  id="musiqueChoice"><div className="navitem"><i class="icon-note-beamed"></i></div></Link>
                        )}
                        {auth.role === 1 && (
                            <Link to="/profil" className="navitem" id="profil"><i class="icon-user"></i></Link>               
                        )}
                        {auth.role === 1 && (
                            <Link to="/creation" className="navitem" id="create"><i class="icon-plus"></i></Link>               
                        )}
                        {auth.role === 2 && (
                            <Link to="/admin" className="navitem" id="choixinstrument">admin</Link>
                        )}
                            {auth.role === 1 && (
                            <Link to="/logout" className="navitem" id="logout"><i class="icon-sign-out" onclick={popUpLogOut}></i></Link>               
                        )}
                  </nav>       
            </div>
    );
};

export default Header;