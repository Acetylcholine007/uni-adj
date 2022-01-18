import { Grid } from "@mui/material";
import React from "react";
import { useCart } from "../../shared/hooks/useCart";
import CartCard from "./CartCard";
import "./CartModal.css";

const CartModal = () => {
  const cartItems = useCart();

  return (
    <div className="cart-modal">
      <div className="modal-header">
        <div className="modal-brand">
          <h2 className="modal-brand-name">UNI-ADJ</h2>
          <h6 className="modal-brand-label">APPLIANCES TRADING</h6>
        </div>
        <h1 className="header-title">Your Cart</h1>
      </div>
      <div className="cart-content">
        <Grid container spacing={4}>
          {cartItems.map((item) => (
            <Grid
              item
              xs={6}
              md={4}
              lg={3}
              key={item.product.productId}
            >
              <CartCard item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="modal-footer">
        <p>Selected: 1</p>
        <button className="modal-button">Checkout</button>
      </div>
    </div>
  );
};

export default CartModal;
