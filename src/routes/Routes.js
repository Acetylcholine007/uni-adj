import React from "react";
import { Route, Switch } from "react-router";
import AccountPage from "../views/accountView/pages/AccountPage";
import CatalogPage from "../views/catalogView/pages/CatalogPage";
import CatalogViewer from "../views/catalogView/pages/CatalogViewer";
import ProductViewer from "../views/catalogView/pages/ProductViewer";
import HomePage from "../views/homeView/pages/HomePage";
import InventoryPage from "../views/inventoryView/pages/InventoryPage";
import OrdersPage from "../views/ordersView/pages/OrdersPage";

const routes = [
  {
    route: (
      <Route exact path="/">
        <HomePage />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/home">
        <HomePage />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/account">
        <AccountPage />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/catalogs">
        <CatalogPage />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/catalogs/:catId">
        <CatalogViewer />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/catalogs/:catId/:productId">
        <ProductViewer />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/inventory">
        <InventoryPage />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/orders">
        <OrdersPage />
      </Route>
    ),
    accessLevel: 1,
  },
];

const Routes = ({ permissionLevel }) => {
  return (
    <Switch>
      {routes
        .filter((route) => route.accessLevel <= permissionLevel)
        .map((route) => route.route)}
    </Switch>
  );
};

export default Routes;
