import React from "react";
import { Route, Switch } from "react-router";
import DefaultPage from "../shared/pages/DefaultPage";
import AccountPage from "../views/accountView/pages/AccountPage";
import CatalogPage from "../views/catalogView/pages/CatalogPage";
import CatalogViewer from "../views/catalogView/pages/CatalogViewer";
import ProductViewer from "../views/catalogView/pages/ProductViewer";
import HomePage from "../views/homeView/pages/HomePage";
import InventoryPage from "../views/inventoryView/pages/InventoryPage";
import OrdersPage from "../views/ordersView/pages/OrdersPage";
import { useUserContext } from "../shared/hooks/useUserContext";

const routes = [
  {
    route: (
      <Route exact path="/" key='0'>
        <HomePage />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/home" key='1'>
        <HomePage />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/account" key='2'>
        <AccountPage />
      </Route>
    ),
    accessLevel: 2,
  },
  {
    route: (
      <Route exact path="/catalogs" key='3'>
        <CatalogPage />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/catalogs/:catId" key='4'>
        <CatalogViewer />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/catalogs/:catId/:productId" key='5'>
        <ProductViewer />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/inventory" key='6'>
        <InventoryPage />
      </Route>
    ),
    accessLevel: 3,
  },
  {
    route: (
      <Route exact path="/orders" key='7'>
        <OrdersPage />
      </Route>
    ),
    accessLevel: 3,
  },
  {
    route: (
      <Route path="*" key='8'>
        <DefaultPage />
      </Route>
    ),
    accessLevel: 1,
  },
];

const Routes = () => {
  const {user, accountType} = useUserContext();

  return (
    <Switch>
      {routes
        .filter((route) => route.accessLevel <= accountType)
        .map((route) => route.route)}
    </Switch>
  );
};

export default Routes;
