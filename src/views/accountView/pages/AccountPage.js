import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
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
  return (
    <div>
      <h1>Your Account</h1>
      {/* <div className = "image-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/1200px-Ambersweet_oranges.jpg"
            alt="Profile_Avatar"
            className="account-avatar"
          />
        </div> */}
      <div className="account-info">
        {/* <div className='image-wrapper'/> */}
        <div className="image-container">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/1200px-Ambersweet_oranges.jpg"
              alt="Profile_Avatar"
              className="account-avatar"
            />
          </div>
        </div>
        <div className="account-stub">
          <div>
            <h1>John</h1>
            <h3>john@gmail.com</h3>
            <h4>09216498896</h4>
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
          {activeOrder.map((order) => (
            <OrderStub order={order} />
          ))}
        </tbody>
      </table>
      <h1>Order History</h1>
      <table className="account-table">
        <tbody>
          {activeOrder.map((order) => (
            <OrderStub order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountPage;
