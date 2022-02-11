import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCart } from "../../shared/hooks/useCart";
import { useUserContext } from "../../shared/hooks/useUserContext";
import CartCard from "./CartCard";
import "./CartModal.css";
import CheckoutModal from "./CheckoutModal";

const CartModal = ({setShowCart}) => {
  const cartItems = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const { user, userDispatch } = useUserContext();
  const history = useHistory();

  const orderHandler = () => {};

  // const selectedItems = [
  //   {
  //     productId: "1",
  //     name: "Samsung Inverter Refrigerator",
  //     description: "Product description",
  //     price: 50000,
  //     ratings: {
  //       1: 4,
  //       2: 3,
  //     },
  //     badge: {
  //       label: "NEW!",
  //       color: "red",
  //     },
  //     uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
  //     stocks: 10,
  //     promo: "HOT",
  //     comment: [
  //       {
  //         userId: "1",
  //         message: "Good",
  //       },
  //       {
  //         userId: "2",
  //         message: "Good",
  //       },
  //     ],
  //     brand: "1",
  //     tags: [
  //       "kitchen",
  //       "bathroom",
  //       "outdoors",
  //       "bedroom",
  //       "livingroom",
  //       "utility",
  //     ],
  //     quantity: 1,
  //   },
  // ];

  const checkoutHandler = () => {
    userDispatch({
      type: "SET_SELECTED_ITEMS",
      payload: {userId: user.userId, selectedItems},
    });
    setShowCart(false);
    history.push('/account/checkout');
    // setIsCheckout(true);
  };

  return (
    <div className="cart-modal">
      <div className="modal-header">
        <div className="modal-brand">
          <h2 className="modal-brand-name">UNI-ADJ</h2>
          <h6 className="modal-brand-label">APPLIANCES TRADING</h6>
        </div>
        <h1 className="header-title">Your Cart</h1>
      </div>
      {isCheckout ? (
        <CheckoutModal
          selectedItems={selectedItems}
          setIsCheckout={setIsCheckout}
          orderHandler={orderHandler}
        />
      ) : (
        <>
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
            <button
              className="modal-button"
              onClick={checkoutHandler}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
