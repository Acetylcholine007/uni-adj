import {
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
  Delete,
  Add,
  Remove,
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
    setSelectedItems(
      selectedItems.filter((item) => item.productId !== product.productId)
    );
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
      setSelectedItems([...selectedItems, { ...product, quantity }]);
    }
  };

  const quantityHandler = (productId, quantity) => {
    userDispatch({
      type: "CHANGE_QUANTITY",
      payload: { userId: user.userId, productId, quantity },
    });
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
          <h3>
            &#8369;
            {` ${product.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          </h3>
          <div>
            <p>Quantity </p>
            <div className="quantity-area">
              <IconButton
                sx={{
                  backgroundColor: "#C0C0C0",
                  borderRadius: 0,
                  margin: "1rem",
                }}
                onClick={() => quantityHandler(product.productId, quantity - 1)}
              >
                <Remove fontSize="small" />
              </IconButton>
              <p>{quantity}</p>
              <IconButton
                sx={{
                  backgroundColor: "#C0C0C0",
                  borderRadius: 0,
                  margin: "1rem",
                }}
                onClick={() => quantityHandler(product.productId, quantity + 1)}
              >
                <Add fontSize="small" />
              </IconButton>
            </div>
          </div>
          {/* <p>
            Quantity{" "}
            <span>
              <IconButton
                sx={{
                  backgroundColor: "#C0C0C0",
                  borderRadius: 0,
                  margin: "1rem",
                }}
                onClick={() =>
                  quantityHandler(product.productId, quantity - 1)
                }
              >
                <Remove fontSize="small" />
              </IconButton>
            </span>
            <span>{quantity}</span>
            <span>
              <IconButton
                sx={{
                  backgroundColor: "#C0C0C0",
                  borderRadius: 0,
                  margin: "1rem",
                }}
                onClick={() =>
                  quantityHandler(product.productId, quantity + 1)
                }
              >
                <Add fontSize="small" />
              </IconButton>
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
