import "../css/formulaire.css";
import "../css/default.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";


const LoginScreen = () => {
  const [signin, setSignin] = useState();
  const navigate = useNavigate();
  const [cookie,setCookie] = useCookies(['token']);
  const {setAuth} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    if(password.length>=4)
    { 
      const form = event.currentTarget;
      const formData = new FormData(form);
      const jsonData = Object.fromEntries(formData.entries());
      const body = JSON.stringify(jsonData);
      fetch("http://localhost:5006/appuser/login", {
        method: 'post',
        headers: {
            "content-type": "application/json",
        },
        body,
    })
      .then(response => response.json())
      .then(jsonData=>{
        console.log(jsonData);
        if (jsonData.completed){
          const age = 60*60*24;
          setCookie("token",jsonData.cookie,{maxAge:`${age}`});
          setAuth({role:jsonData.role, id:jsonData.id});
          navigate('/');
        }
      });
    }
    else{
      alert("mot de passe trop court");
    }
  }

  return (
    <>
       <div id="connect"> <Link to="/register"> <button className="BasicButton">S'inscrire</button></Link></div>
      <div className="authscreen">
        <div className="capsform">
          <div className="titleform">
        <img id="logo" src={process.env.PUBLIC_URL + '/img/site/logosquarewhite.png'}></img>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="fieldForm">
              <i class="icon-envelope"></i> 
              <input type="text" name="email" className="inputauth" id="inputEmail" aria-describedby="emailHelp"  placeholder="Votre adresse e-mail"/>
            </div>
            <div className="fieldForm">
            <i class="icon-key"></i>
              <input type="password" name="password" className="inputauth" id="inputPassword" placeholder="Votre mot de passe"/>
            </div>
            <div className="buttonform">
              <button type="submit" className="BasicButton">Se Connecter</button>
            </div>
            <div className="fieldForm">
              <div className="forgotpass">
              <Link to="/renewmail"> mot de passe oublié ?</Link>

              </div>           
            </div>
          </form>
        </div>
      </div>

    </>
  );
  };

export default LoginScreen;