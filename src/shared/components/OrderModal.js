import { Send } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import "./OrderModal.css";

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

const OrderModal = ({ order, isForAdmin }) => {
  const classes = useStyles();

  return (
    <div className="cart-modal">
      <div className="modal-header">
        <div className="modal-brand">
          <h2 className="modal-brand-name">UNI-ADJ</h2>
          <h6 className="modal-brand-label">APPLIANCES TRADING</h6>
        </div>
        <h1 className="header-title">{`Order ID: ${order.orderId}`}</h1>
        <h1 className="header-title">{`Status: ${order.status}`}</h1>
      </div>
      {isForAdmin && <div className='user-info-header'>
        <h3>{`Customer: ${order.user.firstname} ${order.user.lastname}`}</h3>
        <h3>{`Email: ${order.user.email}`}</h3>
        <h3>{`Contact No.: ${order.user.contactNo}`}</h3>
        <h3>{`Address: ${order.user.address}`}</h3>
      </div>}
      <div className="modal-content">
        <Grid
          container
          spacing={2}
          sx={{ height: "100%" }}
        >
          <Grid item xs={12} md={8} className={classes.subPanel}>
            <h2 style={{ margin: 0 }}>Order List</h2>
            <ul className={classes.modalListContainer}>
              {order.list.map((item) => (
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
              <h1>{`P ${order.list
                .map((item) => item.quantity * item.price)
                .reduce((a, b) => a + b)}`}</h1>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.subPanel}>
            <h2 style={{ margin: 0 }}>Conversation</h2>
            <ul
              className={`${classes.modalListContainer} ${classes.subPanelBorder}`}
            >
              {order.convo.map((item) => (
                <li className="convo-item">
                  <p>{item.message}</p>
                </li>
              ))}
            </ul>
            <div className="chat-area">
              <input type="text" className="chat-field" />
              <IconButton aria-label="send">
                <Send />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OrderModal;
