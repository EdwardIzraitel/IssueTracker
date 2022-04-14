import React from "react";
import { Formik, Field, validateYupSchema } from "formik";
import styles from "./Register.module.scss";
import FormField from "../components/FormFields/FormField";
const Register = () => {
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
    <div className={styles.center_content}>
      <div className={styles.titleContainer}>
        <h1>Welcome to #####</h1>
        <div className={styles.register}>
          <h2>Register</h2>
        </div>

        <div className={styles.loginContainer}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              username: "",
              password: "",
            }}
            validateOnChange={false}
            validateOnBlur={false}
            // onSubmit={(values) => {
            //   validateUser(values);
            // }}
          >
            {({ values, handleSubmit, touched, errors }) => (
              <form onSubmit={handleSubmit} method="POST">
                <FormField
                  field="firstName"
                  fieldLabel="First Name"
                  values={values.firstName}
                  errors={errors.firstName}
                  touched={touched.firstName}
                />
                <FormField
                  field="lastName"
                  fieldLabel="Last Name"
                  values={values.lastName}
                  errors={errors.lastName}
                  touched={touched.lastName}
                />
                <FormField
                  field="username"
                  fieldLabel="Username"
                  values={values.username}
                  errors={errors.username}
                  touched={touched.username}
                />
                <FormField
                  field="password"
                  fieldLabel="Password"
                  values={values.password}
                  errors={errors.password}
                  touched={touched.password}
                />
                <div className={styles.password_error}>
                  <button
                    className={styles.login_button}
                    type="submit"
                    // disabled={user.isLoading}
                  >
                    Create Account
                  </button>
                  {/* {errorDisplay(user.error, true)} */}
                </div>
              </form>
            )}
          </Formik>
          {/* <div className={styles.additional_buttons}>
          <button className={styles.register_button}>Click to Register</button>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
