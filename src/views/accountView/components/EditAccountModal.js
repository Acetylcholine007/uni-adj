import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../../shared/hooks/useUserContext";
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

const EditAccountModal = ({ showModal, setShowModal }) => {
  const classes = useStyles();
  const { user, userDispatch } = useUserContext();
  const [newUserData, setNewUserData] = useState({ ...user });
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAccountError, setIsAccountError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const accountInfoHandler = () => {
    if (true) {
      setIsAccountError(false);
      userDispatch({ type: "UPDATE", payload: { ...user, ...newUserData } });
      setShowModal(false);
    } else {
      setIsAccountError(true);
    }
  };

  const passwordHandler = () => {
    if (confirmPassword === newPassword && currentPassword === user.password) {
      setIsPasswordError(false);
      userDispatch({
        type: "UPDATE",
        payload: { ...user, password: newPassword },
      });
      setShowModal(false);
    } else {
      setIsPasswordError(true);
    }
  };

  useEffect(() => {
    setNewUserData({ ...user });
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsAccountError(false);
    setIsPasswordError(false);
  }, [user, showModal]);

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
            <h1 style={{ margin: 0 }}>
              Edit Information {isAccountError && <span>Error</span>}
            </h1>

            <label>
              First Name:
              <input
                type="text"
                value={newUserData.firstname}
                onChange={(e) =>
                  setNewUserData({
                    ...newUserData,
                    firstname: e.target.value,
                  })
                }
              />
            </label>

            <label>
              Last Name:
              <input
                type="text"
                value={newUserData.lastname}
                onChange={(e) =>
                  setNewUserData({ ...newUserData, lastname: e.target.value })
                }
              />
            </label>

            <label>
              Username:
              <input
                type="text"
                value={newUserData.username}
                onChange={(e) =>
                  setNewUserData({ ...newUserData, username: e.target.value })
                }
              />
            </label>

            <label>
              Address:
              <input
                type="text"
                value={newUserData.address}
                onChange={(e) =>
                  setNewUserData({ ...newUserData, address: e.target.value })
                }
              />
            </label>

            <label>
              Contact Number:
              <input
                type="text"
                value={newUserData.contactNo}
                onChange={(e) =>
                  setNewUserData({
                    ...newUserData,
                    contactNo: e.target.value,
                  })
                }
              />
            </label>

            <button className="app-button" onClick={accountInfoHandler}>
              SAVE CHANGES
            </button>
          </Grid>
          <Grid item xs={12} md={6} className={classes.subPanel}>
            <h1 style={{ margin: 0 }}>
              Edit Password {isPasswordError && <span>Error</span>}
            </h1>

            <label>
              Current Password:
              <input
                type="text"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </label>

            <label>
              New Password:
              <input
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>

            <label>
              Confirm Password:
              <input
                type="text"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>

            <button className="app-button" onClick={passwordHandler}>
              SAVE CHANGES
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default EditAccountModal;
