import React, { useContext } from "react";
import { AuthContext } from "../../../shared/contexts/AuthContextProvider";
import { UserContext } from "../../../shared/contexts/UserContextProvider";
import "./SignupPage.css";

const SignupPage = ({
  signinHandler,
  userInfo,
  setUserInfo,
  userExist,
  setUserExist,
}) => {
  const { authDispatch } = useContext(AuthContext);
  const {
    users: { users },
  } = useContext(UserContext);

  const checkUnique = (email) => {
    const result = users.find((user) => user.email === email);
    if (result === undefined) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="signup">
      <div className="brand-contaner">
        <h4 className="brand-name">UNI-ADJ</h4>
        <h6 className="brand-label">APPLIANCES TRADING</h6>
        <h4 className="brand-caption">
          Your next <span className="caption-highlight">home upgrade</span>{" "}
          awaits!
        </h4>
        <h2>Sign Up</h2>
        <form className="form">
          <label>
            First name 
            <input
              type="text"
              className="form-field"
              value={userInfo.firstname}
              onChange={(e) =>
                setUserInfo({ ...userInfo, firstname: e.target.value })
              }
            />
          </label>
          <label>
            Last name 
            <input
              type="text"
              className="form-field"
              value={userInfo.lastname}
              onChange={(e) =>
                setUserInfo({ ...userInfo, lastname: e.target.value })
              }
            />
          </label>
          <label>
            Address 
            <input
              type="text"
              className="form-field"
              value={userInfo.address}
              onChange={(e) =>
                setUserInfo({ ...userInfo, address: e.target.value })
              }
            />
          </label>
          <label>
            Contact No 
            <input
              type="text"
              className="form-field"
              value={userInfo.contactNo}
              onChange={(e) =>
                setUserInfo({ ...userInfo, contactNo: e.target.value })
              }
            />
          </label>
          <label>
            Email 
            <input
              type="text"
              className="form-field"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
          </label>
          <label>
            Username 
            <input
              type="text"
              className="form-field"
              value={userInfo.username}
              onChange={(e) =>
                setUserInfo({ ...userInfo, username: e.target.value })
              }
            />
          </label>
          <label>
            Password 
            <input
              type="password"
              className="form-field"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
            />
          </label>
          <label>
            Profile URI 
            <input
              type="text"
              className="form-field"
              value={userInfo.profileUri}
              onChange={(e) =>
                setUserInfo({ ...userInfo, profileUri: e.target.value })
              }
            />
          </label>
        </form>
        {userExist && <p className="error">Email already exists</p>}
        <button
          onClick={() => {
            const result = checkUnique(userInfo.email);
            if (result) {
              setUserExist(false);
              signinHandler();
            } else {
              setUserExist(true);
            }
          }}
          className="app-button p-color full-width"
        >
          SIGN UP
        </button>
        <p align="center">
          Already have account?
          <span
            className="caption-highlight clickable"
            onClick={() =>
              authDispatch({ type: "CHANGE_AUTH_SECTION", payload: "LOGIN" })
            }
          >
            {" "}
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
