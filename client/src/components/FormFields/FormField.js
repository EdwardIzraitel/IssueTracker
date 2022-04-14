import React from "react";
import { Field } from "formik";
import styles from "./FormField.module.scss";
const FormField = (props) => {
  const validate = (value) => {
    let errorMessage;
    if (!/^[A-Z0-9]{2,}$/i.test(value)) {
      errorMessage = "Must be at least 2 characters long";
    }
    return errorMessage;
  };

  const errorDisplay = (error, touched) => {
    return error && touched ? <span>{error}</span> : <span>&#8203;</span>;
  };

  return (
    <div className={styles.form_row}>
      <label htmlFor={props.field} style={{ display: "block" }}>
        {props.fieldLabel}
      </label>
      <div className={styles.password_error}>
        <Field
          type={props.field}
          name={props.field}
          value={props.values}
          validate={validate}
        />
        {errorDisplay(props.errors, props.touched)}
      </div>
    </div>
  );
};

export default FormField;
