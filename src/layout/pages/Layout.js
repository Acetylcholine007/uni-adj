import React, { useContext, useState } from "react";
import Routes from "../../routes/Routes";
import AppModal from "../../shared/components/AppModal";
import { AuthContext } from "../../shared/contexts/AuthContextProvider";
import LoginPage from "../../views/authView/pages/LoginPage";
import SignupPage from "../../views/authView/pages/SignupPage";
import AppDrawer from "../components/AppDrawer";
import AppNavBar from "../components/AppNavBar";
import CartModal from "../components/CartModal";

import "./Layout.css";

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const {
    auth: { authSection },
  } = useContext(AuthContext);

  const authSelector = (authType) => {
    switch (authType) {
      case "SIGNUP":
        return <SignupPage setShowModal={setShowModal} />;
      case "LOGIN":
        return <LoginPage setShowModal={setShowModal} />;
      default:
        return <h1>Invalid auth type</h1>;
    }
  };

  return (
    <div className="main-container">
      <AppDrawer />
      <div className="content-container">
        <AppNavBar setShowModal={setShowModal} setShowCart={setShowCart}/>
        <Routes />
      </div>
      <AppModal showModal={showModal} setShowModal={setShowModal}>
        {authSelector(authSection)}
      </AppModal>
      <AppModal showModal={showCart} setShowModal={setShowCart}>
        <CartModal />
      </AppModal>
    </div>
  );
};

export default Layout;
