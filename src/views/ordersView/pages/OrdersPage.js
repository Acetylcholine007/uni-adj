import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "../components/OrderCard";
import "./OrdersPage.css";

const orders = [
  {
    user: "Wendell",
    date: "1/8/2022",
    list: [{ name: "Samsung Refrigerator", quantity: 1, price: 50000 }],
    status: "Shipped",
  },
  {
    user: "Ivy",
    date: "1/8/2022",
    list: [{ name: "Japan Surplus Smart TV", quantity: 1, price: 120000 }],
    status: "Shipped",
  },
  {
    user: "Rahino",
    date: "1/8/2022",
    list: [{ name: "Iwata Air Cooler", quantity: 2, price: 30000 }],
    status: "Shipped",
  },
  {
    user: "John",
    date: "1/8/2022",
    list: [
      { name: "LG LM57 43 Inch FHD TV", quantity: 1, price: 110000 },
      { name: "Samsung Side by Side Refrigerator", quantity: 1, price: 110000 },
    ],
    status: "On Delivery",
  },
  {
    user: "Sofia",
    date: "1/8/2022",
    list: [{ name: "3D LPG Gas Stove Burner", quantity: 2, price: 670 }],
    status: "Shipped",
  },
  {
    user: "Marrise",
    date: "1/8/2022",
    list: [{ name: "Electric Fan Capacitor", quantity: 5, price: 250 }],
    status: "Placed",
  },
];

const OrdersPage = () => {
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
