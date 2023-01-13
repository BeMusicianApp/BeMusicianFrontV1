import "../css/formulaire.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../helpers/string.helpers";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import Input from "../lib/form-and-error-components";
import { register } from "../api/backend/account";



const RegisterScreen = ({ submit, errorLog }) => {
  const navigate = useNavigate();
    const handleRegister=(values)=>{
      register(values)
    };

  const defaulValuesRegister = {
    nom: '',
    prenom:'',
    pseudo:'',
    password: '',
    confirmpassword:'',
    email:'',
    rememberMe: false,
};
const schemaFormRegister = Yup.object().shape({
  nom: Yup.string().min(2, "Nom trop court").max(30, "Nom trop long").required('Prénom obligatoire'),
  prenom: Yup.string().min(2, "Prénom trop court").max(30, "Prénom trop long").required('Nom obligatoire'),
  pseudo: Yup.string().min(2, "Pseudo trop court").max(30, "Pseudo trop long").required('Nom obligatoire'),
  email: Yup.string().email('email invalide').required('e-mail obligatoire'),
  password: Yup.string().min(8, 'minimum 8 caractères').required('Mot de passe obligatoire'),
  confirmPassword: Yup.string().min(8, 'minimum 8 caractères').required('Mot de passe obligatoire'),
});

  return (
    <Formik
        initialValues={defaulValuesRegister}
        onSubmit={handleRegister}
        validationSchema={schemaFormRegister}
        >
          <Form className="mt-8 space-y-6 w-96 rounded justify-center pt-8 pb-8">
          <Field
            type="text"
            name="nom"
            placeholder="Nom"
            autoComplete="nom"
            component={Input}
            className="rounded-md"
            noError
          />
          <ErrorMessage
            name="nom"
            component="small"
            className="text-red-500"
          />
          <Field
            type="text"
            name="prenom"
            placeholder="Prenom"
            autoComplete="Prenom"
            component={Input}
            className="rounded-md"
            noError
          />
          <ErrorMessage
            name="prenom"
            component="small"
            className="text-red-500"
          />
          <Field
            type="text"
            name="pseudo"
            placeholder="Pseudo"
            autoComplete="Pseudo"
            component={Input}
            className="rounded-md"
            noError
          />
          <ErrorMessage
            name="pseudo"
            component="small"
            className="text-red-500"
          />
          <Field
            type="email"
            name="email"
            placeholder="E-mail"
            autoComplete="email"
            component={Input}
            className="rounded-md"
            noError
          />
          <ErrorMessage
            name="email"
            component="small"
            className="text-red-500"
          />
             <Field
            type="password"
            name="password"
            placeholder="Mot de pass"
            autoComplete="password"
            component={Input}
            className="rounded-md"
            noError
          />
          <ErrorMessage
            name="password"
            component="small"
            className="text-red-500"
          />
             <Field
            type="password"
            name="confirmPassword"
            placeholder="confirmer votre mot de passe"
            autoComplete="password"
            component={Input}
            className="rounded-md"
            noError
          />
          <ErrorMessage
            name="confirmPassword"
            component="small"
            className="text-red-500"
          />
            <button
              type="submit"
              className="btn text-dark-pink group relative mt-4"
            >
            S'inscrire
            </button>
          </Form>
        </Formik>
  )
};

export default RegisterScreen;