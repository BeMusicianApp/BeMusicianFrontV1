import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import "../css/header.css";
import "../musicfont/styles.css";

const Header = () => {
    const { auth } = useContext(AuthContext);
    return (
            <div className="navigation">
                    <nav className="contentLogo">
                        {auth.role === 1 && (
                        <Link to="/" className="logo"><img id="logo" src={process.env.PUBLIC_URL + '/img/site/logosquarewhite.png'}></img></Link>
                        )}
                        </nav>
                        <nav className="mainNav">
                        {auth.role === 1 && (
                            <Link to="/guitare"  id="musiqueChoice"><div className="navitem"><i class="icon-note-beamed"></i></div></Link>
                        )}
                        {auth.role === 1 && (
                            <Link to="/profil" className="navitem" id="profil"><i class="icon-user"></i></Link>               
                        )}
                        {auth.role === 2 && (
                            <Link to="/admin" className="navitem" id="choixinstrument">admin</Link>
                        )}
                            {auth.role === 1 && (
                            <Link to="/logout" className="navitem" id="logout"><i class="icon-sign-out"></i></Link>               
                        )}
                  </nav>       
            </div>
    );
};

export default Header;