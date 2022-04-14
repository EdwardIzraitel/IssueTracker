import React, { useEffect } from "react";
import styles from "./Login.module.scss";
import { Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userState } from "../app/features/user.auth.js/userSlicer";
import { login } from "../app/features/user.auth.js/userSlicer";

//@TODO
// 1. remove hover affect when loading and change to loading
const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(userState);
  const navigate = useNavigate();

  const validateUser = (values) => {
    dispatch(login({ username: values.username, password: values.password }));
  };

  const validate = (value) => {
    let errorMessage;
    if (!/^[A-Z0-9]{3,}$/i.test(value)) {
      errorMessage = "Must be at least 3 characters long";
    }
    return errorMessage;
  };

  const errorDisplay = (error, touched) => {
    return error && touched ? <span>{error}</span> : <span>&#8203;</span>;
  };

  useEffect(() => {
    if (user.loggedIn) navigate("/");
  }, [user.loggedIn]);

  return (
    <div className={styles.center_content}>
      <div className={styles.titleContainer}>
        <h1>Welcome to #####</h1>
        <div className={styles.login}>
          <h2>Log in</h2>
        </div>
        <div className={styles.loginContainer}>
          <Formik
            initialValues={{ username: "", password: "" }}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values) => {
              validateUser(values);
            }}
          >
            {({ values, handleSubmit, touched, errors }) => (
              <form onSubmit={handleSubmit} method="POST">
                <div className={styles.form_row}>
                  <label htmlFor="username" style={{ display: "block" }}>
                    Username:
                  </label>
                  <div className={styles.password_error}>
                    <Field
                      type="username"
                      name="username"
                      value={values.username}
                      validate={validate}
                    />
                    {errorDisplay(errors.username, touched.username)}
                  </div>
                </div>
                <div className={styles.form_row}>
                  <label htmlFor="password">Password:</label>
                  <div className={styles.password_error}>
                    <Field
                      type="password"
                      name="password"
                      value={values.password}
                      validate={validate}
                    />
                    {errorDisplay(errors.password, touched.password)}
                  </div>
                </div>
                <div className={styles.password_error}>
                  <button
                    className={styles.login_button}
                    type="submit"
                    disabled={user.isLoading}
                  >
                    Submit
                  </button>
                  {errorDisplay(user.error, true)}
                </div>
              </form>
            )}
          </Formik>
          <div className={styles.additional_buttons}>
            <button className={styles.register_button}>
              Click to Register
            </button>
          </div>
          <div className={styles.dummyAccounts}>
            <button className={styles.dummy_button}>Dummy User</button>
            <button className={styles.dummy_button}>Dummy Admin</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
