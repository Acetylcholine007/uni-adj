import {
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
  Delete,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

import { useUserContext } from "../../shared/hooks/useUserContext";
import "./CartCard.css";

const CartCard = ({
  item: { product, quantity },
  selectedItems,
  setSelectedItems,
}) => {
  const history = useHistory();
  const { user, userDispatch } = useUserContext();
  const isSelected =
    selectedItems.find((item) => item.productId === product.productId) !==
    undefined;

  const removeHandler = (productId) => {
    userDispatch({
      type: "REMOVE_CART",
      payload: { userId: user.userId, productId },
    });
  };

  const checkHandler = () => {
    if (isSelected) {
      setSelectedItems(
        selectedItems.filter((item) => item.productId !== product.productId)
      );
    } else {
      setSelectedItems([
        ...selectedItems,
        { ...product, quantity },
      ]);
    }
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item-badge">
        <IconButton onClick={checkHandler}>
          {isSelected ? (
            <CheckBoxOutlined sx={{ color: "white" }} />
          ) : (
            <CheckBoxOutlineBlank sx={{ color: "white" }} />
          )}
        </IconButton>
      </div>
      <div className="cart-item-badge-right">
        <IconButton onClick={() => removeHandler(product.productId)}>
          <Delete sx={{ color: "white" }} />
        </IconButton>
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
