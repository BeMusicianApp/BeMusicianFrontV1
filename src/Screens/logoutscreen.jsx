import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const LogoutScreen = () => {

const navigate = useNavigate();


    // useEffect(() =>{
    //     setTimeout(()=>{
    //         setAuth ({role:0});
    //         navigate("/login");
    //     },1000);
    // }) 
    const {auth, setAuth} = useContext(AuthContext);
    function deconnexion(){
        const cookieStr = 'token=vide ; max-age=0';
        document.cookie = cookieStr;
        setTimeout(()=>{
            setAuth ({role:0});
            navigate("/login");
        },0);        
    }
    function retourAcceuil(){
        navigate("/")
    }

    return (
        <div id="logOutContent">
           <div id="logOutText"> C'est votre dernier mot ? </div>
        <div>
        <button id="resterConnecter" onClick={retourAcceuil}> Oula non je reste ! </button>
        <button id="deconnexion" onClick={deconnexion}> Oui jean pierre ! </button>
        </div>
        </div>
    );
}

export default LogoutScreen;
