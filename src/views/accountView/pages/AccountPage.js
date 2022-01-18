import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import AppModal from "../../../shared/components/AppModal";
import OrderModal from "../../../shared/components/OrderModal";
import { useOrderContext } from "../../../shared/hooks/useOrderContext";
import { useUserContext } from "../../../shared/hooks/useUserContext";
import OrderStub from "../components/OrderStub";
import "./AccountPage.css";

const AccountPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useUserContext();
  const { orders } = useOrderContext(user.userId);

  return (
    <div>
      <h1>Your Account</h1>
      <div className="account-info">
        <div className="image-container">
          <div>
            <img
              src={user.profileUri}
              alt="Profile_Avatar"
              className="account-avatar"
            />
          </div>
        </div>
        <div className="account-stub">
          <div>
            <h1>{`${user.firstname} ${user.lastname}`}</h1>
            <h3>{user.email}</h3>
            <h4>{user.contactNo}</h4>
          </div>
          <IconButton>
            <Edit />
          </IconButton>
        </div>
      </div>
      <table className="account-table">
        <thead className="account-table-header">
          <tr>
            <td colSpan={2}>ACTIVE ORDER</td>
            <td>STATUS</td>
            <td>TOTAL AMOUNT</td>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter((order) => order.status !== "Complete")
            .map((order) => (
              <OrderStub order={order} setShowModal={setShowModal}/>
            ))}
        </tbody>
      </table>
      <h1>Order History</h1>
      <table className="account-table">
        <tbody>
          {orders
            .filter((order) => order.status === "Complete")
            .map((order) => (
              <OrderStub order={order} setShowModal={setShowModal}/>
            ))}
        </tbody>
      </table>
      <AppModal showModal={showModal} setShowModal={setShowModal}>
        <OrderModal />
      </AppModal>
    </div>
  );
};

export default AccountPage;
