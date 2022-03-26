import React from "react";
import styles from "./Login.module.scss";
import { Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const validateUser = async (values) => {
    const loginFormData = new FormData();
    loginFormData.append("username", values.username);
    loginFormData.append("password", values.password);

    await axios
      .post("http://127.0.0.1:8000/api/login", loginFormData)
      .then((res) => {
        console.log(res); //.data
      })
      .catch((error) => {
        console.log(error.message);
        alert(error);
      });
  };

  return (
    <div className={styles.center}>
      <div className={styles.titleContainer}>
        <h1>Welcome to #####</h1>
        <div className={styles.login}>
          <h2>Log in</h2>
        </div>
        <div className={styles.loginContainer}>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values) => {
              validateUser(values);
            }}
          >
            {({ values, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className={styles.form_row}>
                  <label htmlFor="username" style={{ display: "block" }}>
                    Username:
                  </label>
                  <Field
                    type="username"
                    name="username"
                    value={values.username}
                  />
                  <ErrorMessage name="username" component="div" />
                </div>
                <div className={styles.form_row}>
                  <label htmlFor="password">Password:</label>
                  <Field
                    type="password"
                    name="password"
                    value={values.password}
                  />
                  <ErrorMessage name="password" component="div" />
                </div>
                <button type="submit">Submit</button>
                <p>Click to Register</p>
                <div className={styles.dummyAccounts}>
                  <p>Dummy User</p>
                  <p>Dummy Admin</p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
