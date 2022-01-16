import { Grid } from "@mui/material";
import React from "react";
import { useOrderContext } from "../../../shared/hooks/useOrderContext";
import OrderCard from "../components/OrderCard";
import "./OrdersPage.css";

const OrdersPage = () => {
  const {orders} = useOrderContext();

  return (
    <div>
      <h1>Orders:</h1>
      <Grid container spacing={3}>
        {orders.map((order) => (
          <Grid item xs={12} md={4}>
            <OrderCard order={order} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrdersPage;
