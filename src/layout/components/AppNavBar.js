import { NotificationsActive, Search, ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../shared/hooks/useUserContext";
import "./AppNavBar.css";

const AppNavBar = ({ setShowModal, setShowCart }) => {
  const { user, authDispatch } = useUserContext();
  const history = useHistory();

  return (
    <div className="navbar">
      <div className="brand">
        <img src= "/uniadjlogo.png" className="logo"/>
      </div>
      <div className="search">
        <input type="text" className="search-field" />
        <button className="search-button">
          <Search />
        </button>
      </div>
      <span>
        <IconButton aria-label="cart" onClick={setShowCart}>
          <ShoppingCart />
        </IconButton>
        <IconButton aria-label="notifications">
          <NotificationsActive />
        </IconButton>
      </span>
      {user && (
        <div className="account">
          <div
            className="avatar-background"
            onClick={() => history.push("/account")}
          >
            <img src={user.profileUri} alt="background" className="avatar" />
            <h4 className="profile-label">{user.username}</h4>
          </div>
          <p
            className="signout"
            onClick={() => {
              history.push('/');
              authDispatch({ type: "LOGOUT" })
            }}
          >
            NOT YOU? SIGN OUT
          </p>
        </div>
      )}
      {!user && (
        <div className="account">
          <button className="app-button red" onClick={setShowModal}>
            AUTHENTICATE
          </button>
        </div>
      )}
    </div>
  );
};

export default AppNavBar;
