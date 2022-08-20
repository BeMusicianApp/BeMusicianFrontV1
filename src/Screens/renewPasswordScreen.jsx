import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RenewPassWordScreen = () => {
  const navigate = useNavigate();
  const[searchParams]= useSearchParams();
  const token = searchParams.get("t");

    const handleSubmit = (event) => {
      event.preventDefault();
      let password1 = document.getElementById("inputpass1").value
      let password2 = document.getElementById("inputpass2").value

      if(password1 == password2)
      {
        const form = event.currentTarget;
        const formData = new FormData(form);
        const jsonData = Object.fromEntries(formData.entries());
        const body = JSON.stringify(jsonData);
        console.log(body)
        fetch("http://localhost:5006/appuser/renewpass", {
          method: 'post',
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify({token, password1}),
      })
      .then((resp) => resp.text())
      .then((text) => {
          const data = text.toJson();
          if(data.result){
              document.cookie = `auth=${data.token};max-age=${60*60*24}`;
          }
          else{
              document.cookie = `auth=null;max-age=0`;
          }
          console.log("fetchvalid");
          navigate('/login'); 
          
      });
      }    
    }
    return (
        <div className="authscreen">
        <form onSubmit={handleSubmit}>
        <div className="fieldForm">
          <label htmlFor="renewPass1" className="form-label">Nouveau Password</label>
          <input type="password" name="password"className="inputauth" id="inputpass1" aria-describedby="emailHelp" />
        </div>
        <div className="fieldForm">
          <label htmlFor="renewPass2" className="form-label">confirmer Password</label>
          <input type="password" name="password" className="inputauth" id="inputpass2" />
        </div>
        <div className="buttonform">
          <button type="submit" className="submit">submit</button>       
        </div>
      </form>
      </div>
    );
};
export default RenewPassWordScreen;