import {
  ChevronLeft,
  Home,
  Inbox,
  Inventory2,
  MenuOutlined,
  Person,
  ShoppingBasket,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useHistory, useLocation } from "react-router";
import { useUserContext } from "../../shared/hooks/useUserContext";
import "./AppDrawer.css";

const links = [
  { icon: <Home />, label: "Home", route: "/home", accessLevel: 1 },
  { icon: <Inbox />, label: "Catalog", route: "/catalogs", accessLevel: 1 },
  {
    icon: <Inventory2 />,
    label: "Inventory",
    route: "/inventory",
    accessLevel: 3,
  },
  {
    icon: <ShoppingBasket />,
    label: "Orders",
    route: "/orders",
    accessLevel: 3,
  },
  { icon: <Person />, label: "Account", route: "/account", accessLevel: 2 },
];

const AppDrawer = ({ expandDrawer, setExpandDrawer }) => {
  const history = useHistory();
  const location = useLocation();
  const { accountType } = useUserContext();

  const activeChecker = (path) => {
    let newPath = location.pathname;
    if (newPath === "/") {
      newPath = "/home";
    }
    return newPath.includes(path);
  };

  return (
    <div className="drawer">
      <div className="header">
        <IconButton
          className="drawer-toggler"
          onClick={() => setExpandDrawer(!expandDrawer)}
        >
          {expandDrawer ? <ChevronLeft /> : <MenuOutlined />}
        </IconButton>
      </div>
      <ul className="links">
        {links
          .filter((route) => route.accessLevel <= accountType)
          .map((link) => (
            <li
              className={`linkItem ${
                activeChecker(link.route) ? "active-link" : ""
              }`}
              onClick={() => history.push(link.route)}
              key={link.label}
            >
              {link.icon} {expandDrawer ? link.label : ""}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AppDrawer;
