import { Home, Inbox, Inventory2, Person, ShoppingBasket } from "@mui/icons-material";
import React from "react";
import { useHistory, useLocation } from "react-router";
import "./AppDrawer.css";

const links = [
  { icon: <Home />, label: "Home", route: "/home" },
  { icon: <Inbox />, label: "Catalog", route: "/catalogs" },
  { icon: <Inventory2 />, label: "Inventory", route: "/inventory" },
  { icon: <ShoppingBasket />, label: "Orders", route: "/orders" },
  { icon: <Person />, label: "Account", route: "/account" },
];

const AppDrawer = () => {
  const history = useHistory();
  const location = useLocation();

  const activeChecker = (path) => {
    let newPath = location.pathname;
    if (newPath === "/") {
      newPath = "/home";
    }
    return newPath.includes(path);
  };

  return (
    <div className="drawer">
      <div className="header"></div>
      <ul className="links">
        {links.map((link) => (
          <li
            className={`linkItem ${activeChecker(link.route) ? "active" : ""}`}
            onClick={() => history.push(link.route)}
          >
            {link.icon} {link.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppDrawer;
