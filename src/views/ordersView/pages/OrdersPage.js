import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppModal from "../../../shared/components/AppModal";
import OrderModal from "../../../shared/components/OrderModal";
import { useOrderContext } from "../../../shared/hooks/useOrderContext";
import OrderCard from "../components/OrderCard";
import "./OrdersPage.css";

const OrdersPage = () => {
  const { orders } = useOrderContext();
  const [showModal, setShowModal] = useState(false);
  const [targetOrder, setTargetOrder] = useState(null);

  useEffect(() => {}, [orders]);

  return (
    <div className="title-order">
      <h1 className="orders-header">Orders</h1>
      <div className="order-grid">
        <Grid container spacing={3}>
          {orders.map((order) => (
            <Grid
              item
              xs={12}
              md={4}
              lg={3}
              sx={{ width: "100%", boxSizing: "border-box" }}
            >
              <OrderCard
                order={order}
                setShowModal={setShowModal}
                setTargetOrder={setTargetOrder}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      {targetOrder && (
        <AppModal showModal={showModal} setShowModal={setShowModal}>
          <OrderModal orderId={targetOrder} isForAdmin />
        </AppModal>
      )}
    </div>
  );
};

export default OrdersPage;
