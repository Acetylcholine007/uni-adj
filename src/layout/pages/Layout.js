import React from "react";
import Routes from "../../routes/Routes";
import AppDrawer from "../components/AppDrawer";
import AppNavBar from "../components/AppNavBar";

import './Layout.css';

const Layout = () => {
  return (
    <div className='main-container'>
      <AppDrawer />
      <div className='content-container'>
        <AppNavBar/>
        <Routes permissionLevel={1}/>
      </div>
    </div>
  );
};

export default Layout;
