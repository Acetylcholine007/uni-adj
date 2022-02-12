import React, { useState } from "react";
import { Edit } from "@mui/icons-material";
import { Divider, IconButton, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./CheckoutPage.css";
import AppModal from "../../../shared/components/AppModal";
import EditAccountModal from "../components/EditAccountModal";
import { useUserContext } from "../../../shared/hooks/useUserContext";
import { useOrderContext } from "../../../shared/hooks/useOrderContext";
import { useContext } from "react";
import { OrderContext } from "../../../shared/contexts/OrderContextProvider";
import { useHistory } from "react-router-dom";

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

const CheckoutPage = () => {
  const [showEditAccount, setShowEditAccount] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const { user } = useUserContext();
  const { orderDispatch } = useContext(OrderContext);

  const orderHandler = () => {
    let dateNow = new Date();
    orderDispatch({
      type: "ADD_ORDER",
      payload: {
        userId: user.userId,
        date: dateNow.toLocaleDateString(),
        list: user.selectedItems.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
        status: "Preparing",
        convo: [],
      },
    });
    history.push("/orders");
  };

  if (user.selectedItems.length === 0) {
    return (
      <div>
        <h1>
          Select products first on your cart to checkout and file an order
        </h1>
      </div>
    );
  } else {
    return (
      <div className="checkout-container">
        <h2>Orders</h2>
        <div className="account-summary">
          <div>
            <h3>Delivery Address:</h3>
            <h4 className="text-indent">{user.address}</h4>
            <h4 className="text-indent">{user.email}</h4>
            <h4 className="text-indent">{user.contactNo}</h4>
          </div>
          <IconButton onClick={setShowEditAccount}>
            <Edit />
          </IconButton>
        </div>
        <table className="checkout-table">
          <thead className="checkout-table-header">
            <tr>
              <td colSpan={2}>ITEM</td>
              <td>QUANTITY</td>
              <td>UNIT PRICE</td>
              <td>AMOUNT</td>
            </tr>
          </thead>
          <tbody>
            {user.selectedItems.map((item) => (
              <tr className="checkout-stub">
                <td>
                  <img
                    src={item.uri}
                    alt="item_picture"
                    className="order-item-pic"
                  />
                </td>
                <td>
                  <h3>{item.name}</h3>
                </td>
                <td>
                  <h3>{`x ${item.quantity}`}</h3>
                </td>
                <td>
                  <h3>{`P ${item.price}`}</h3>
                </td>
                <td>
                  <h3>{`P ${item.price * item.quantity}`}</h3>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <ul className={classes.modalListContainer}>
          {user.selectedItems.map((item) => (
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
        </ul> */}
        <Divider />
        <Grid container>
          <Grid item xs={12} md={6}>
            <h3>Shipping Option: STANDARD</h3>
            <h3>Payment Option: Cash on Delivery</h3>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              alignItems: "flex-end",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3 style={{ margin: 0 }}>TOTAL:</h3>
            <h1 style={{ margin: 0 }}>{`P ${user.selectedItems
              .map((item) => item.quantity * item.price)
              .reduce((a, b) => a + b)}`}</h1>
          </Grid>
        </Grid>
        <button className="modal-button checkout-button" onClick={orderHandler}>
          Place Order
        </button>
        <AppModal showModal={showEditAccount} setShowModal={setShowEditAccount}>
          <EditAccountModal
            showModal={showEditAccount}
            setShowModal={setShowEditAccount}
          />
        </AppModal>
      </div>
    );
  }
};

export default CheckoutPage;
