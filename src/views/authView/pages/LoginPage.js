import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../../shared/contexts/AuthContextProvider";
import "./LoginPage.css";

const LoginPage = ({ setShowModal }) => {
  const { authDispatch } = useContext(AuthContext);
  const history = useHistory();

  return (
    <div className="login">
      <div className="brand-contaner">
        <h4 className="brand-name">UNI-ADJ</h4>
        <h6 className="brand-label">APPLIANCES TRADING</h6>
        <h4 className="brand-caption">
          Your next <span className="caption-highlight">home upgrade</span>{" "}
          awaits!
        </h4>
        <h2>Log In</h2>
        <form className="form">
          <input type="text" className="form-field" label="Email" />
          <input type="password" className="form-field" label="Password" />
        </form>
        <button
          onClick={() => {
            authDispatch({ type: "LOGIN", payload: 2 });
            setShowModal(false);
            history.push("/");
          }}
          className = 'app-button p-color full-width'
        >
          LOGIN
        </button>
        <p className="text-button">Forgot Password?</p>
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
