import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useOrderContext } from "../../../shared/hooks/useOrderContext";
import { useUserContext } from "../../../shared/hooks/useUserContext";
import OrderStub from "../components/OrderStub";
import "./AccountPage.css";

const activeOrder = [
  {
    user: "Wendell",
    date: "1/8/2022",
    list: [{ name: "Samsung Refrigerator", quantity: 1, price: 50000 }],
    status: "Shipped",
  },
  {
    user: "Ivy",
    date: "1/8/2022",
    list: [{ name: "Japan Surplus Smart TV", quantity: 1, price: 120000 }],
    status: "Shipped",
  },
  {
    user: "Rahino",
    date: "1/8/2022",
    list: [{ name: "Iwata Air Cooler", quantity: 2, price: 30000 }],
    status: "Shipped",
  },
  {
    user: "John",
    date: "1/8/2022",
    list: [
      { name: "LG LM57 43 Inch FHD TV", quantity: 1, price: 110000 },
      { name: "Samsung Side by Side Refrigerator", quantity: 1, price: 110000 },
    ],
    status: "On Delivery",
  },
  {
    user: "Sofia",
    date: "1/8/2022",
    list: [{ name: "3D LPG Gas Stove Burner", quantity: 2, price: 670 }],
    status: "Shipped",
  },
  {
    user: "Marrise",
    date: "1/8/2022",
    list: [{ name: "Electric Fan Capacitor", quantity: 5, price: 250 }],
    status: "Placed",
  },
];

const AccountPage = () => {
  const {user} = useUserContext();
  const {orders} = useOrderContext(user.userId);

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
          {orders.filter((order) => order.status !== 'Complete').map((order) => (
            <OrderStub order={order} />
          ))}
        </tbody>
      </table>
      <h1>Order History</h1>
      <table className="account-table">
        <tbody>
          {orders.filter((order) => order.status === 'Complete').map((order) => (
            <OrderStub order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountPage;
