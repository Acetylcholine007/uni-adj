import { NotificationsActive, Search, ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../shared/hooks/useUserContext";
import "./AppNavBar.css";

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingLeft: "1rem",
    boxSizing: "border-box",
    flexWrap: "nowrap",
    marginBottom: "1rem",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
    },
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    cursor: "pointer",
    order: 1,
    flexBasis: "auto",
    [theme.breakpoints.down("md")]: {
      order: 1,
      flexBasis: "80%",
    },
  },
  search: {
    height: "2rem",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 0,
    [theme.breakpoints.down("md")]: {
      width: "25.75rem",
      paddingLeft: "1.5rem",
    },
  },
  searchSection: {
    height: "2rem",
    width: "40%",
    display: "flex",
    flexDirection: "row",
    order: 2,
    flexBasis: "auto",
    [theme.breakpoints.down("md")]: {
      order: 3,
      flexBasis: "80%",
      width: "100%",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    order: 3,
    flexBasis: "auto",
    [theme.breakpoints.down("md")]: {
      order: 4,
      flexBasis: "20%",
    },
  },
  account: {
    order: 4,
    flexBasis: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      order: 2,
      flexBasis: "20%",
    },
  },
}));

const AppNavBar = ({
  setShowModal,
  setShowCart,
  setShowAuth,
  setShowNotif,
}) => {
  const [query, setQuery] = useState("");
  const { userId, user, authDispatch } = useUserContext();
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const searchHandler = () => {
    const route = location.pathname.split("/");
    if (route.indexOf("catalogs") !== -1 && route.length >= 3) {
      history.push(`/catalogs/${route[2]}/${query}`);
    } else if (route.indexOf("catalogs") !== -1 && route.length < 3) {
      history.push(`/catalogs/all/${query}`);
    } else {
      history.push(`/catalogs/all/${query}`);
    }
    setQuery("");
  };

  return (
    <div className={classes.navbar}>
      <div className="brand" onClick={() => history.push("/")}>
        <img src="/uniadjlogo.png" className="logo" alt="uni-adj logo" />
      </div>
      <div className={classes.searchSection}>
        <div className={classes.search}>
          <input
            value={query}
            type="text"
            className="search-field"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") searchHandler();
            }}
          />
          <button className="search-button" onClick={searchHandler}>
            <Search />
          </button>
        </div>
      </div>
      <span className={classes.buttons}>
        <IconButton
          aria-label="cart"
          onClick={() =>
            userId !== null ? setShowCart(true) : setShowAuth(true)
          }
        >
          <ShoppingCart />
        </IconButton>
        <IconButton
          aria-label="notifications"
          onClick={() =>
            userId !== null ? setShowNotif(true) : setShowAuth(true)
          }
        >
          <NotificationsActive />
        </IconButton>
      </span>
      {user && (
        <div className={classes.account}>
          <div
            className="avatar-background"
            onClick={() => history.push("/account")}
          >
            <img src={user.profileUri} alt="background" className="avatar" />
            <h4 className="profile-label">{user.username}</h4>
          </div>
          <button
            className="authenticate-button"
            onClick={() => {
              history.push("/");
              authDispatch({ type: "LOGOUT" });
            }}
          >
            SIGN OUT
          </button>
        </div>
      )}
      {!user && (
        <div className={classes.account}>
          <div
            className="avatar-background"
            onClick={() => history.push("/account")}
          >
            <img src='https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png' alt="background" className="avatar" />
            <h4 className="profile-label">Guess</h4>
          </div>
          <button className="authenticate-button" onClick={setShowModal}>
            AUTHENTICATE
          </button>
        </div>
      )}
    </div>
  );
};

export default AppNavBar;
