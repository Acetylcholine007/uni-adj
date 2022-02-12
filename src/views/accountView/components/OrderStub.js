import React from "react";
import "./OrderStub.css";

const OrderStub = ({ order, setShowModal, setTargetOrder }) => {
  return (
    <tr className="order-stub" onClick={() => {
      setTargetOrder(order.orderId);
      setShowModal(true);
    }}>
      <td colSpan={2}>
        <ul className="stub-list">
          {order.list.map((item) => (
            <li>
              <img
                src="https://i.rtings.com/assets/products/1UbkxYvb/lg-c1-oled/design-small.jpg"
                alt="item_pic"
                className="stub-pic"
              />
              <h4>{item.name}</h4>
              <h3 align='right' style = {{flexGrow: 1}}>{`x${item.quantity}`}</h3>
            </li>
          ))}
        </ul>
      </td>
      <td>{order.status}</td>
      <td>
        <h3>{`P ${order.list
          .map((item) => item.quantity * item.price)
          .reduce((a, b) => a + b)}`}</h3>
      </td>
    </tr>
  );
};

export default OrderStub;
