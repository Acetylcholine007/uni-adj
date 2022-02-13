import { Grid, Divider } from "@mui/material";
import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Star, StarBorder } from "@mui/icons-material";
import { InventoryContext } from "../../../shared/contexts/InventoryContextProvider";
import { useUserContext } from "../../../shared/hooks/useUserContext";
import "./ProductViewer.css";
import { AuthContext } from "../../../shared/contexts/AuthContextProvider";

const ProductViewer = () => {
  const {
    auth: { userId },
    authDispatch,
  } = useContext(AuthContext);
  const productId = useParams().productId;
  const {
    inventory: { products },
  } = useContext(InventoryContext);
  const { user, userDispatch } = useUserContext();
  const history = useHistory();
  const product = products.find((product) => product.productId === productId);

  const ratingList = [];
  if (product.ratings != null)
    for (var rating in product.ratings)
      ratingList.push(product.ratings[rating]);
  const ratings =
    ratingList.length !== 0
      ? ratingList.reduce((a, b) => a + b) / ratingList.length
      : 0;

  const cartHandler = (pid) => {
    if (userId !== null) {
      userDispatch({
        type: "ADD_CART",
        payload: {
          userId: user.userId,
          item: { productId: pid, quantity: 1 },
        },
      });
    } else {
      authDispatch({ type: "TOGGLE_MODAL", payload: true });
    }
  };

  const buyHandler = (product) => {
    if (userId !== null) {
      userDispatch({
        type: "SET_SELECTED_ITEMS",
        payload: {
          userId: user.userId,
          selectedItems: [{ ...product, quantity: 1 }],
        },
      });
      history.push("/account/checkout");
    } else {
      authDispatch({ type: "TOGGLE_MODAL", payload: true });
    }
  };

  if (product !== undefined) {
    return (
      <div className="product-viewer">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <div className="viewer-image-container">
              <img
                src={product.uri}
                alt="product_image"
                className="viewer-image"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <h1 className="product-name">{product.name}</h1>
            <div className="rating-bar">
              <span>
                {[1, 2, 3, 4, 5].map((count) => {
                  if (count > ratings) return <StarBorder key={count} />;
                  else return <Star key={count} />;
                })}
              </span>
              {product.badge.label === "HOT!" && (
                <h3 style={{ backgroundColor: "rgb(251,6,62)" }}>HOT!</h3>
              )}
              {product.badge.label === "NEW!" && (
                <h3 style={{ backgroundColor: "orange" }}>NEW!</h3>
              )}
              {product.badge.label === "SURPLUS" && (
                <h3 style={{ backgroundColor: "burlywood" }}>SURPLUS</h3>
              )}
            </div>
            <div className="price-bar">
              <h1 className="currency">&#8369;</h1>
              <h1>
                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h1>
            </div>
            <div className="product-actions">
              <button onClick={() => cartHandler(product.productId)}>
                ADD TO CART
              </button>
              <button onClick={() => buyHandler(product)}>BUY NOW</button>
            </div>
            <Divider />
            <h2>Description:</h2>
            <p>{product.description}</p>
          </Grid>
        </Grid>
      </div>
    );
  }
  return <h1>Product does not exist</h1>;
};

export default ProductViewer;
