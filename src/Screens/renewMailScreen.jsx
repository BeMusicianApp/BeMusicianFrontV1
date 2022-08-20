import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RenewMailScreen = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const jsonData = Object.fromEntries(formData.entries());
        const body = JSON.stringify(jsonData);
        console.log(body);
        fetch("http://localhost:5006/appuser/renewmail", {
            method: "post",
          headers: {
            "content-type": "application/json",
          },
          body,
        })           
    }

    return (
        <div className="authscreen">
        <form onSubmit={handleSubmit}>
        <div className="fieldForm">
            <label htmlFor="exampleInputEmail4" className="form-label">Email address</label>
            <input type="email" name="email" className="inputauth" id="InputEmail" aria-describedby="emailHelp" />
          </div>
        <div className="buttonform">
          <button type="submit" className="submit">submit</button>       
        </div>
      </form>
      </div>
    );
};
export default RenewMailScreen;