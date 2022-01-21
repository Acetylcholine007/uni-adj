import { Grid } from "@mui/material";
import React, { useState } from "react";
import AppModal from "../../../shared/components/AppModal";
import OrderModal from "../../../shared/components/OrderModal";
import { useOrderContext } from "../../../shared/hooks/useOrderContext";
import OrderCard from "../components/OrderCard";
import "./OrdersPage.css";

const OrdersPage = () => {
  const {orders} = useOrderContext();
  const [showModal, setShowModal] = useState(false);
  const [targetOrder, setTargetOrder] = useState(null);

  return (
    <div>
      <h1>Orders:</h1>
      <Grid container spacing={3}>
        {orders.map((order) => (
          <Grid item xs={12} md={4}>
            <OrderCard order={order} setShowModal={setShowModal} setTargetOrder={setTargetOrder}/>
          </Grid>
        ))}
      </Grid>
      {targetOrder && <AppModal showModal={showModal} setShowModal={setShowModal}>
        <OrderModal order={targetOrder} isForAdmin/>
      </AppModal>}
    </div>
  );
};

export default OrdersPage;
