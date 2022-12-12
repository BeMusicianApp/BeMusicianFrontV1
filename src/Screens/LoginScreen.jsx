import "../css/formulaire.css";
import "../css/default.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useContext } from "react";
import { useDispatch } from 'react-redux';
import { signIn } from "../redux-store/authenticationSlice";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { authenticate } from "../api/backend/account";
import { Field, Form, Formik, ErrorMessage } from "formik";

import Input from "../lib/form-and-error-components";
import * as Yup from 'yup';

import { URL_HOME } from "../constants/urls/urlFrontEnd";

const LoginScreen = () => {
  //const [signin, setSignin] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorLog, setErrorLog] = useState(false);
  const [cookie,setCookie] = useCookies(['token']);
  const handleSubmit = (values) => {
    console.log(values)
    authenticate(values)
            .then((res) => {
                if (res.status === 200 && res.data.token) {
                    dispatch(signIn(res.data.token));
                    console.log(res.data.token)
                    navigate(URL_HOME);
                }
            })
            .catch(()=>{
                setErrorLog(true)
            });
  }

  const defaultValuesLogin = {
    email: '',
    password: '',
  }

  const schemaFormLogin = Yup.object().shape({
    email: Yup.string().required('Email obligatoire'),
    password: Yup.string().required('Mot de passe obligatoire'),
  }) 

  return (
    <>
    <div className="text-center text-white mt-14">
    <div>
      Cette application est en développement, et sera disponible en bêta privée prochainement, vous voulez participer au dévelopement (en JS) ou simplement obtenir une clef ?
    </div>
    <div>
      vous pouvez me contacter via linkedin : <a href="https://www.linkedin.com/in/maxime-lebon-929581234/" target="_blank"> ici </a>
    </div>
    </div>
    <Formik
        initialValues={defaultValuesLogin}
        onSubmit={handleSubmit}
        validationSchema={schemaFormLogin}>
      <Form>
        <Field 
          type="text"
          name="email" 
          placeholder="Email"
          autoComplete="email" 
          component={Input}
          className=""
          noError
        />
        <ErrorMessage
          name="email"
          component="small"
          className="text-danger text-red-500"
        />
        <Field
          type="password"
          name="password"
          placeholder="Mot de passe"
          autoComplete="current-password"
          component={Input}
          className="rounded-none rounded-b-md"
          noError
        />
        <ErrorMessage
          name="password"
          component="small"
          className="text-danger text-red-500"
        />
            <div className="buttonform">
              <button type="submit" className="BasicButton">Se Connecter</button>
            </div>
      </Form>
    </Formik>
    </>
  );
  };

export default LoginScreen;