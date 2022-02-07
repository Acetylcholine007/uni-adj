import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Routes from "../../routes/Routes";
import AppModal from "../../shared/components/AppModal";
import { AuthContext } from "../../shared/contexts/AuthContextProvider";
import { UserContext } from "../../shared/contexts/UserContextProvider";
import LoginPage from "../../views/authView/pages/LoginPage";
import SignupPage from "../../views/authView/pages/SignupPage";
import AppDrawer from "../components/AppDrawer";
import AppFooter from "../components/AppFooter";
import AppNavBar from "../components/AppNavBar";
import CartModal from "../components/CartModal";

import "./Layout.css";

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    address: "",
    contactNo: "",
    email: "",
    password: "",
    profileUri: "",
    accountType: 2,
    orders: [],
    cart: [],
  });
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const {
    auth: { authSection, isLoggedIn },
    authDispatch,
  } = useContext(AuthContext);
  const {
    users: { users },
    userDispatch,
  } = useContext(UserContext);
  const history = useHistory();

  const loginHandler = (userId) => {
    authDispatch({
      type: "LOGIN",
      payload: userId,
    });
    showModalHandler();
    history.push("/");
  };

  const signinHandler = () => {
    const userId = (parseInt(users.slice(-1)[0].userId) + 1).toString();
    userDispatch({
      type: "ADD",
      payload: { userId, ...userInfo },
    });
    authDispatch({
      type: "LOGIN",
      payload: userId,
    });
    showModalHandler();
    history.push("/");
  };

  const showModalHandler = (state) => {
    setShowModal(state);
    setEmail("");
    setPassword("");
    setUserInfo({
      firstname: "",
      lastname: "",
      address: "",
      contactNo: "",
      email: "",
      password: "",
      profileUri: "",
      accountType: 2,
      orders: [],
      cart: [],
    });
    setIncorrectCredentials(false);
    setForgotPassword(false);
  };

  const authSelector = (authType) => {
    switch (authType) {
      case "SIGNUP":
        return (
          <SignupPage
            signinHandler={signinHandler}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            userExist={userExist}
            setUserExist={setUserExist}
          />
        );
      case "LOGIN":
        return (
          <LoginPage
            loginHandler={loginHandler}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            forgotPassword={forgotPassword}
            setForgotPassword={setForgotPassword}
            incorrectCredentials={incorrectCredentials}
            setIncorrectCredentials={setIncorrectCredentials}
          />
        );
      default:
        return <h1>Invalid auth type</h1>;
    }
  };

  return (
    <div className="main-container">
      <AppDrawer />
      <div className="content-container">
        <AppNavBar setShowModal={setShowModal} setShowCart={setShowCart} />
        <Routes />
        <AppFooter />
      </div>
      <AppModal showModal={showModal} setShowModal={showModalHandler}>
        {authSelector(authSection)}
      </AppModal>
      {isLoggedIn && (
        <AppModal showModal={showCart} setShowModal={setShowCart}>
          <CartModal />
        </AppModal>
      )}
    </div>
  );
};

export default Layout;
