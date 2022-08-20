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
          <form onSubmit={handleSubmit}>
            <div className="fieldForm">
              <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
              <input type="text" name="nom" className="inputauth" id="inputNom" aria-describedby="NomHelp" />
            </div>
            <div className="fieldForm">
              <label htmlFor="exampleInputEmail2" className="form-label">Prénom</label>
              <input type="text" name="prenom" className="inputauth" id="inputPrenom" aria-describedby="prenomHelp" />
            </div>
            <div className="fieldForm">
              <label htmlFor="exampleInputEmail3" className="form-label">Pseudo</label>
              <input type="text" name="pseudo" className="inputauth" id="inputPseudo" aria-describedby="pseudoHelp" />
            </div>
            <div className="fieldForm">
              <label htmlFor="exampleInputEmail4" className="form-label">Email address</label>
              <input type="email" name="email" className="inputauth" id="InputEmail" aria-describedby="emailHelp" />
            </div>
            <div className="fieldForm">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" name="password" className="inputauth" id="InputPasswordReg1" />
            </div>
            <div className="fieldForm">
              <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
              <input type="password" name="password" className="inputauth" id="InputPasswordReg2" placeholder=""/>
            </div>
            <div className="buttonform">
              <Link to="/login"> <button className="submit">log in</button></Link>
              <button type="submit" className="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};
export default RegisterScreen;