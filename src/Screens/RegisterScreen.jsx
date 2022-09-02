import "../css/formulaire.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../helpers/string.helpers";
import { useNavigate } from "react-router-dom";
//import { AuthContext } from "../contexts/AuthContext";

const RegisterScreen = () => {
  const [signin, setSignin] = useState();
  const navigate = useNavigate();

  
  const handleSubmit = (event) => {
    event.preventDefault();

    let password1 = document.getElementById("InputPasswordReg1").value
    let password2 = document.getElementById("InputPasswordReg2").value

    if (password1 === password2) {
      const form = event.currentTarget;
      const formData = new FormData(form);
      const jsonData = Object.fromEntries(formData.entries());
      const body = JSON.stringify(jsonData);
      fetch("http://localhost:5006/appuser/register", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body,
      })
        .then((resp) => resp.text())
        .then((text) => {
          const data = text.toJson();
          if (data.result) {
            document.cookie = `auth=${data.token};max-age=${60 * 60 * 24}`;
          }
          else {
            document.cookie = `auth=null;max-age=0`;
          }
        });
      navigate('/login');
    }
  }

  return (
    <>
      <div className="authscreen">
        <div className="capsform">
        <div className="titleform">
          <h1>Enregistrement</h1>
        </div>
          <form onSubmit={handleSubmit}>
            <div className="fieldForm">
              <input type="text" name="nom" className="inputauth" id="inputNom" aria-describedby="NomHelp" placeholder="Votre Nom" />
            </div>
            <div className="fieldForm">
              <input type="text" name="prenom" className="inputauth" id="inputPrenom" aria-describedby="prenomHelp" placeholder="Votre Prénom" />
            </div>
            <div className="fieldForm">
              <input type="text" name="pseudo" className="inputauth" id="inputPseudo" aria-describedby="pseudoHelp" placeholder="Votre Pseudo"/>
            </div>
            <div className="fieldForm">
              <input type="email" name="email" className="inputauth" id="InputEmail" aria-describedby="emailHelp" placeholder="Votre adresse e-mail"/>
            </div>
            <div className="fieldForm">
              <input type="password" name="password" className="inputauth" id="InputPasswordReg1" placeholder="Votre mot de passe"/>
            </div>
            <div className="fieldForm">
              <input type="password" name="password" className="inputauth" id="InputPasswordReg2" placeholder="Repeter votre mot de passe"/>
            </div>
            <div className="buttonform">
              <button type="submit" className="BasicButton">S'inscrire</button>
            </div>
          </form>
        </div>
             <div id="connect"> <Link to="/login"> <button className="BasicButton">Se connecter</button></Link></div>
      </div>
    </>
  )
};
export default RegisterScreen;