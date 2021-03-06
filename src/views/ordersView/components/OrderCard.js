import React from "react";
import "./OrderCard.css";

const OrderCard = ({ order, setShowModal, setTargetOrder }) => {
  return (
    <div className="order-card" onClick={() => {
      setTargetOrder(order.orderId);
      setShowModal(true);
    }}>
      <div className="order-card-header">
        <div className="order-card-circle" />
        <h3>{order.user.username}</h3>
        <h3 style={{flexGrow: 1, textAlign: 'right'}}>{order.date}</h3>
      </div>
      <div className="order-card-content">
        <ul className="order-list">
          {order.list.map((item) => (
            <li>
              <h4>{item.name}</h4>
              <h4>{item.quantity}</h4>
            </li>
          ))}
        </ul>
      </div>
      <div className="order-card-footer">
        <h5 style={{ fontWeight: "light", fontStyle: "italic" }}>
          {order.status}
        </h5>
        <h2>&#8369;{` ${order.list
          .map((item) => item.quantity * item.price)
          .reduce((a, b) => a + b).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</h2>
      </div>
    </div>
  );
};

export default OrderCard;
