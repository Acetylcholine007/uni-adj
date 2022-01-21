import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import "./EditAccountModal.css";

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
}));

const EditAccountModal = () => {
  const classes = useStyles();

  return (
    <div className="cart-modal">
      <div className="modal-header">
        <div className="modal-brand">
          <h2 className="modal-brand-name">UNI-ADJ</h2>
          <h6 className="modal-brand-label">APPLIANCES TRADING</h6>
        </div>
        <h1 className="header-title">Edit Account</h1>
      </div>
      <div className="cart-content">
        <Grid
          container
          spacing={2}
          sx={{ height: "100%", margin: 0, width: "100%" }}
        >
          <Grid item xs={12} md={6} className={classes.subPanel}>
            <h1 style={{margin: 0}}>Edit Information</h1>
            <div className = 'row'>
              <h2>First Name: </h2>
              <input type="text" />
            </div>
            <div className = 'row'>
              <h2>Last Name: </h2>
              <input type="text" />
            </div>
            <div className = 'row'>
              <h2>Username: </h2>
              <input type="text" />
            </div>
            <div className = 'row'>
              <h2>Address: </h2>
              <input type="text" />
            </div>
            <div className = 'row'>
              <h2>Contact Number: </h2>
              <input type="text" />
            </div>
            <button className="app-button">SAVE CHANGES</button>
          </Grid>
          <Grid item xs={12} md={6} className={classes.subPanel}>
            <h1 style={{margin: 0}}>Edit Password</h1>
            <div className = 'row'>
              <h2>Current Password: </h2>
              <input type="text" />
            </div>
            <div className = 'row'>
              <h2>New Password: </h2>
              <input type="text" />
            </div>
            <div className = 'row'>
              <h2>Confirm Password: </h2>
              <input type="text" />
            </div>
            <button className="app-button">SAVE CHANGES</button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default EditAccountModal;
