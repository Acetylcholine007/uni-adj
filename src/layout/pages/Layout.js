import React, { useContext, useState } from "react";
import Routes from "../../routes/Routes";
import AppModal from "../../shared/components/AppModal";
import { AuthContext } from "../../shared/contexts/AuthContextProvider";
import LoginPage from "../../views/authView/pages/LoginPage";
import SignupPage from "../../views/authView/pages/SignupPage";
import AppDrawer from "../components/AppDrawer";
import AppNavBar from "../components/AppNavBar";

import './Layout.css';

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    auth: { accountType, authSection },
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
    <div className='main-container'>
      <AppDrawer />
      <div className='content-container'>
        <AppNavBar setShowModal={setShowModal}/>
        <Routes permissionLevel={1}/>
      </div>
      <AppModal showModal={showModal} setShowModal={setShowModal}>
        {authSelector(authSection)}
      </AppModal>
    </div>
  );
};

export default Layout;
