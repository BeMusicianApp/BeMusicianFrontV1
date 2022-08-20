import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const LogoutScreen = () => {

const navigate = useNavigate();
const {auth, setAuth} = useContext(AuthContext);
const cookieStr = 'token=vide ; max-age=0';
document.cookie = cookieStr;

useEffect(() =>{
    setTimeout(()=>{
        setAuth ({role:0});
        navigate("/login");
    },1000);
}) 
    return (
        <h1>Deconnexion ... </h1>
    );
}

export default LogoutScreen;
