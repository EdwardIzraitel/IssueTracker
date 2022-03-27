import React,{useState} from "react";
import styles from "./Login.module.scss";
import { Formik, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [submitError,setSubmitError] = useState("");
  const validateUser = async (values) => {
    const loginFormData = new FormData();
    loginFormData.append("username", values.username);
    loginFormData.append("password", values.password);
    // setSubmitError("SS")
    await axios
      .post("http://127.0.0.1:8000/api/login", loginFormData)
      .then((res) => {
        console.log(res); //.data
      })
      .catch((error) => {
        // setSubmitError("SS")
        console.log(error.response);
      });
  };

  const validate = (value) => {
    let errorMessage;
    if (!/^[A-Z0-9]{3,}$/i.test(value)) {
      errorMessage = "Must be at least 3 characters long";
    }
    return errorMessage;
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
                      {errors.username && touched.username ? (
                        <span>{errors.username}</span>
                      ) : (
                      <span>&#8203;</span>
                    )}
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
                    {errors.password && touched.password ? (
                      <span>test</span>
                    ) : (
                      <span>&#8203;</span>
                    )}
                  </div>
                </div>
                <div className={styles.password_error}>
                  <button type="submit">Submit</button>
                  {(!submitError)?<span>&#8203;</span>:<span>Wrong username or password</span>}
                </div>
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
