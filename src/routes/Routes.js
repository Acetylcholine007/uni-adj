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
import CheckoutPage from "../views/accountView/pages/CheckoutPage";

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
      <Route exact path="/account/checkout" key='2'>
        <CheckoutPage />
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
      <Route exact path="/catalogs/:catId/:query" key='5'>
        <CatalogViewer />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/catalogs/:catId/:query/:productId" key='6'>
        <ProductViewer />
      </Route>
    ),
    accessLevel: 1,
  },
  {
    route: (
      <Route exact path="/inventory" key='7'>
        <InventoryPage />
      </Route>
    ),
    accessLevel: 3,
  },
  {
    route: (
      <Route exact path="/orders" key='8'>
        <OrdersPage />
      </Route>
    ),
    accessLevel: 3,
  },
  {
    route: (
      <Route path="*" key='9'>
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
