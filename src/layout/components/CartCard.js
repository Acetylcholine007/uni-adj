import React from "react";
import { useHistory } from "react-router-dom";
import "./CartCard.css";

const CartCard = ({ item: { product, quantity } }) => {
  const history = useHistory();

  return (
    <div className="cart-item-container">
      <div className="cart-item-badge">
        <input
          type="checkbox"
          id={product.productId}
          value={product.productId}
          className="cart-checkbox"
        />
      </div>
      <div
        className="cart-item-card"
        onClick={() => history.push(`/catalogs/all/${product.productId}`)}
      >
        <img src={product.uri} alt="item_pic" className="cart-item-image" />
        <div className="cart-item-footer">
          <h4>{product.name}</h4>
          <h3>{`P ${product.price}`}</h3>
          <p>{`Quantity: ${quantity}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
