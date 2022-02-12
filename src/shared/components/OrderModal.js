import { Send } from "@mui/icons-material";
import {
  Grid,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
  Rating,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import { useOrderContext } from "../hooks/useOrderContext";
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

const OrderModal = ({ orderId, isForAdmin }) => {
  const classes = useStyles();
  const {
    auth: { userId },
  } = useContext(AuthContext);
  const { orders, orderDispatch, inventoryDispatch } = useOrderContext();
  const order = orders.find((item) => item.orderId === orderId);
  const [message, setMessage] = useState("");

  const statusHandler = (event) => {
    orderDispatch({
      type: "SET_ORDER_STATUS",
      payload: { orderId: order.orderId, status: event.target.value },
    });
  };

  const messageHandler = () => {
    orderDispatch({
      type: "ATTACH_MESSAGE",
      payload: {
        orderId: order.orderId,
        userId,
        message,
        datetime: new Date().toDateString(),
      },
    });
    setMessage("");
  };

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
      {isForAdmin && (
        <div className="order-account-summary">
          <div>
            <h3>{`Customer: ${order.user.firstname} ${order.user.lastname}`}</h3>
            <h3>{`Email: ${order.user.email}`}</h3>
            <h3>{`Contact No.: ${order.user.contactNo}`}</h3>
            <h3>{`Address: ${order.user.address}`}</h3>
          </div>
          <div>
            <RadioGroup
              row
              name="order-status"
              value={order.status}
              onChange={statusHandler}
            >
              <FormControlLabel
                value="Preparing"
                control={<Radio />}
                label="Preparing"
              />
              <FormControlLabel
                value="Packing"
                control={<Radio />}
                label="Packing"
              />
              <FormControlLabel
                value="Shipped"
                control={<Radio />}
                label="Shipped"
              />
              <FormControlLabel
                value="Completed"
                control={<Radio />}
                label="Completed"
              />
              <FormControlLabel
                value="Canceled"
                control={<Radio />}
                label="Canceled"
              />
            </RadioGroup>
          </div>
        </div>
      )}
      <div className="modal-content">
        <Grid container spacing={2} sx={{ height: "100%" }}>
          <Grid item xs={12} md={8} className={classes.subPanel}>
            <h2 style={{ margin: 0 }}>Order List</h2>
            <ul className={classes.modalListContainer}>
              {order.list.map((item) => (
                <li className="order-item">
                  <div className="order-item-content">
                    <img
                      src={item.uri}
                      alt="item_picture"
                      className="order-item-pic"
                    />
                    <h3>{item.name}</h3>
                    <h3>{`x ${item.quantity}`}</h3>
                    <h3>{`P ${item.price}`}</h3>
                  </div>
                  {order.status === "Completed" && !isForAdmin && (
                    <div style={{ alignSelf: "flex-end" }}>
                      <Rating
                        name="simple-controlled"
                        value={
                          item.ratings[order.user.userId] === null
                            ? 0
                            : item.ratings[order.user.userId]
                        }
                        onChange={(event, newValue) => {
                          inventoryDispatch({
                            type: "RATE",
                            payload: {
                              productId: item.productId,
                              userId: order.user.userId,
                              rating: newValue,
                            },
                          });
                        }}
                      />
                    </div>
                  )}
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
                <li className={`convo-item ${item.userId === userId ? 'convo-right' : 'convo-left'}`}>
                  <p>{item.message}</p>
                  <p style={{ fontSize: "0.7rem", alignSelf: "flex-end" }}>
                    {item.datetime}
                  </p>
                </li>
              ))}
            </ul>
            <div className="chat-area">
              <textarea
              value = {message}
                cols="40"
                rows="5"
                className="chat-field"
                onChange={(e) => setMessage(e.target.value)}
              />
              <IconButton aria-label="send" onClick={messageHandler}>
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
