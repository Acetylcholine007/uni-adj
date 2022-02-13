import { Grid, Divider } from "@mui/material";
import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Star, StarBorder } from "@mui/icons-material";
import { InventoryContext } from "../../../shared/contexts/InventoryContextProvider";
import { useUserContext } from "../../../shared/hooks/useUserContext";
import "./ProductViewer.css";

const ProductViewer = () => {
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
    userDispatch({
      type: "ADD_CART",
      payload: {
        userId: user.userId,
        item: { productId: pid, quantity: 1 },
      },
    });
  };

  const buyHandler = (product) => {
    userDispatch({
      type: "SET_SELECTED_ITEMS",
      payload: {
        userId: user.userId,
        selectedItems: [{ ...product, quantity: 1 }],
      },
    });
    history.push("/account/checkout");
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
            <h3 style={{ verticalAlign: "center" }}>
              <span>
                {[1, 2, 3, 4, 5].map((count) => {
                  if (count > ratings) return <StarBorder key={count} />;
                  else return <Star key={count} />;
                })}
              </span>
            </h3>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              officiis doloremque enim magni necessitatibus suscipit alias atque
              voluptate illo quas hic eius adipisci nemo iste, perferendis
              dolore ullam veniam voluptas.
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
  return <h1>Product does not exist</h1>;
};

export default ProductViewer;
