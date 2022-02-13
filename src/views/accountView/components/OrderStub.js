import React from "react";
import "./OrderStub.css";

const OrderStub = ({ order, setShowModal, setTargetOrder }) => {
  return (
    <tr className="order-stub" onClick={() => {
      setTargetOrder(order.orderId);
      setShowModal(true);
    }}>
      <td colSpan={2} style={{width: '60%'}}>
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
      <td style={{width: '20%'}}>{order.status}</td>
      <td style={{width: '20%'}}>
        <h3>&#8369;{` ${order.list
          .map((item) => item.quantity * item.price)
          .reduce((a, b) => a + b).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</h3>
      </td>
    </tr>
  );
};

export default OrderStub;
