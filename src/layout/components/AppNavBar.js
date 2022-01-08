import { NotificationsActive, Search, ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import "./AppNavBar.css";

const AppNavBar = () => {
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
      <div className="account">
        <div className="avatar-background">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/1200px-Ambersweet_oranges.jpg"
            alt="background"
            className="avatar"
          />
          <h4 className="profile-label">John</h4>
        </div>
        <p className="signout">NOT YOU? SIGN OUT</p>
      </div>
    </div>
  );
};

export default AppNavBar;
