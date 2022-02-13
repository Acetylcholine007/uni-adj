import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useCart } from "../../shared/hooks/useCart";
import { useUserContext } from "../../shared/hooks/useUserContext";
import CartCard from "./CartCard";
import "./CartModal.css";

const CartModal = ({ setShowCart, showCart }) => {
  const cartItems = useCart();
  const [selectedItems, setSelectedItems] = useState([]);
  const { user, userDispatch } = useUserContext();
  const history = useHistory();

  const checkoutHandler = () => {
    userDispatch({
      type: "SET_SELECTED_ITEMS",
      payload: { userId: user.userId, selectedItems },
    });
    setShowCart(false);
    history.push("/account/checkout");
  };

  useEffect(() => {
    setSelectedItems([]);
  }, [user, showCart]);

  return (
    <div className="cart-modal">
      <div className="modal-header">
        <div className="modal-brand">
          <img src="/uniadjlogo.png" className="cartlogo" alt="UNI-ADJ logo" />
        </div>
        <h1 className="header-title">Your Cart</h1>
      </div>
      <div className="cart-content">
        <Grid container spacing={4}>
          {cartItems.map((item) => (
            <Grid item xs={6} md={4} lg={3} key={item.product.productId}>
              <CartCard
                item={item}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="modal-footer">
        <p>Selected: 1</p>
        <button className="modal-button" onClick={checkoutHandler}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartModal;
