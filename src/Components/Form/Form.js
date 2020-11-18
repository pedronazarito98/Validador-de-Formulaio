import React from "react";
import { ErrorMessage, Formik, Form as FormikForm, Field } from "formik";
import PropTypes from "prop-types";
import * as yup from "yup";
import "./Form.css";

const validations = yup.object().shape({
  name: yup
    .string()
    .required("Informe o nome")
    .min(5, "O nome deve conter mais de 5 letras")
    .max(100, "Nome muito grande"),
  user: yup.string().email("Email Inválido").required("Informe seu email"),

  password: yup
    .string()
    .min(8, "Mínimo de 8 caracteres")
    .required("Digite sua senha"),

  cpf: yup
    .number()
    .max(11, "Número de caracteres excedido")
    .required("Digite seu CPF"),
});

const Form = ({ initialValues, handleSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validations}
  >
    <FormikForm className="Form">
      <h1 className="Form-Welcome">Grupo Zelo</h1>
      <h2 className="Form-Info">
        Digite seu Usuário e Senha para acessar o Sistema
      </h2>
      <div className="Form-Group">
        <Field
          className="Form-Field"
          name="name"
          placeholder="Nome"
          type="text"
        />
        <ErrorMessage className="Form-Error" component="span" name="name" />
      </div>
      <div className="Form-Group">
        <Field
          className="Form-Field"
          name="user"
          placeholder="Email do Usuário"
          type="text"
        />
        <ErrorMessage className="Form-Error" component="span" name="user" />
      </div>
      <div className="Form-Group">
        <Field
          className="Form-Field"
          name="password"
          placeholder="Senha"
          type="password"
        />
        <ErrorMessage className="Form-Error" component="span" name="password" />
      </div>
      <div className="Form-Group">
        <Field
          className="Form-Field"
          name="cpf"
          placeholder="CPF"
          type="text"
        />
        <ErrorMessage className="Form-Error" component="span" name="cpf" />
      </div>
      <button className="Form-Btn" type="submit">
        {" "}
        Login
      </button>
    </FormikForm>
  </Formik>
);
Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;

// Yup valida as informações de acordo com os parametros passados em {validations}
// Formik simplica, e passa a responsabilidade de {onchange e etc } para ele
