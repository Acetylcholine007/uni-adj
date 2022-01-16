import { NotificationsActive, Search, ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useUserContext } from "../../shared/hooks/useUserContext";
import "./AppNavBar.css";

const AppNavBar = ({ setShowModal }) => {
  const {user} = useUserContext();

  return (
    <div className="navbar">
      <div className="brand">
        <h1 className="brand-name">UNI-ADJ</h1>
        <h3 className="brand-label">APPLIANCES TRADING</h3>
      </div>
      <div className="search">
        <input type="text" className="search-field" />
        <button className="search-button">
          <Search />
        </button>
      </div>
      <span>
        <IconButton aria-label="cart">
          <ShoppingCart />
        </IconButton>
        <IconButton aria-label="notifications">
          <NotificationsActive />
        </IconButton>
      </span>
      {user && (
        <div className="account" onClick={setShowModal}>
          <div className="avatar-background">
            <img src={user.profileUri} alt="background" className="avatar" />
            <h4 className="profile-label">{user.username}</h4>
          </div>
          <p className="signout">NOT YOU? SIGN OUT</p>
        </div>
      )}
      {!user && (
        <div className="account" onClick={setShowModal}>
          <button className = 'app-button red'>AUTHENTICATE</button>
        </div>
      )}
    </div>
  );
};

export default AppNavBar;
