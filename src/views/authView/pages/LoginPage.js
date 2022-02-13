import React, { useContext } from "react";
import { AuthContext } from "../../../shared/contexts/AuthContextProvider";
import { UserContext } from "../../../shared/contexts/UserContextProvider";
import "./LoginPage.css";

const LoginPage = ({
  loginHandler,
  email,
  setEmail,
  password,
  setPassword,
  forgotPassword,
  setForgotPassword,
  incorrectCredentials,
  setIncorrectCredentials,
}) => {
  const { authDispatch } = useContext(AuthContext);
  const {
    users: { users },
  } = useContext(UserContext);

  const checkCredentials = (email, password) => {
    const result = users.find(
      (user) => user.email === email && user.password === password
    );
    if (result === undefined) {
      return null;
    } else {
      return result.userId;
    }
  };

  if (forgotPassword) {
    return <h1>No Reset, Too bad. ⛔🚧⛔</h1>;
  }
  return (
    <div className="login">
      <div className="brand-contaner">  
          <img src= '/uniadjlogo.png' className="secondlogo" alt='uni-adj logo'></img>
        <h4 className="brand-caption">
          Your next <span className="caption-highlight">home upgrade</span>{" "}
          awaits!
        </h4>
        <h2>Log In</h2>
        <form className="form">
          <label>
            Email
            <input
              type="text"
              className="form-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              className="form-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </form>
        {incorrectCredentials && <p className="error">Incorrect Credentials</p>}
        <button
          onClick={() => {
            const result = checkCredentials(email, password);
            if (result) {
              setIncorrectCredentials(false);
              loginHandler(result);
            } else {
              setIncorrectCredentials(true);
            }
          }}
          className="app-button p-color full-width"
        >
          LOGIN
        </button>
        <p className="text-button" onClick={setForgotPassword}>
          Forgot Password?
        </p>
        <p align="center">
          New to UNI-ADJ?
          <span
            className="caption-highlight clickable"
            onClick={() =>
              authDispatch({ type: "CHANGE_AUTH_SECTION", payload: "SIGNUP" })
            }
          >
            {" "}
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
