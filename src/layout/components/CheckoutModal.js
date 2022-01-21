import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import "./CheckoutModal.css";

const useStyles = makeStyles((theme) => ({
  subPanel: {
    [theme.breakpoints.up("md")]: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    height: "initial",
    display: "block",
  },
  modalListContainer: {
    display: "block",
    padding: "0.5rem",
    [theme.breakpoints.up("md")]: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
    },
  },
  subPanelBorder: {
    border: "1px solid #C0C0C0",
    borderRadius: "0.5rem",
  },
}));

const CheckoutModal = ({ selectedItems, setIsCheckout, orderHandler }) => {
  const classes = useStyles();

  return (
    <>
      <div className="modal-content">
        <Grid container spacing={2} sx={{ height: "100%", margin: 0, width: '100%'}}>
          <Grid xs={12} md={8} className={classes.subPanel}>
            <h2 style={{ margin: 0 }}>Order List</h2>
            <ul className={classes.modalListContainer}>
              {selectedItems.map((item) => (
                <li className="order-item">
                  <img
                    src={item.uri}
                    alt="item_picture"
                    className="order-item-pic"
                  />
                  <h3>{item.name}</h3>
                  <h3>{`x ${item.quantity}`}</h3>
                  <h3>{`P ${item.price}`}</h3>
                </li>
              ))}
            </ul>
            <div className="tally-area">
              <h1>TOTAL:</h1>
              <h1>{`P ${selectedItems
                .map((item) => item.quantity * item.price)
                .reduce((a, b) => a + b)}`}</h1>
            </div>
          </Grid>
          <Grid xs={12} md={4} className={classes.subPanel}>
            <h2 style={{ margin: 0 }}>Payment Information</h2>
            <h3>Shipping Options: </h3>
            <h3>Shipping Address: </h3>
            <h3>Estimated Arrival: </h3>
          </Grid>
        </Grid>
      </div>
      <div className="modal-footer">
        <button className="modal-button" onClick={() => setIsCheckout(false)}>
          Back
        </button>
        <button className="modal-button" onClick={orderHandler}>
          Place Order
        </button>
      </div>
    </>
  );
};

export default CheckoutModal;
