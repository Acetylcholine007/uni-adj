import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Star, StarBorder } from "@mui/icons-material";
import { InventoryContext } from "../../../shared/contexts/InventoryContextProvider";
import { useUserContext } from "../../../shared/hooks/useUserContext";
import CommentStub from "../components/CommentStub";
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
    for (var rating in product.ratings) ratingList.push(product.ratings[rating]);
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
          <Grid item xs={12} md={6}>
            <div className="viewer-image-container">
              <img
                src={product.uri}
                alt="product_image"
                className="viewer-image"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1>{product.name}</h1>
            <h3 style = {{verticalAlign: 'center'}}>
              <span>
                {[1, 2, 3, 4, 5].map((count) => {
                  if (count > ratings) return <StarBorder key={count} />;
                  else return <Star key={count} />;
                })}
              </span>
              <span>HOT</span>
            </h3>
            <h1>Price: {product.price}</h1>
            <button
              className="app-button"
              onClick={() => cartHandler(product.productId)}
            >
              ADD TO CART
            </button>
            <button
              className="app-button red"
              onClick={() => buyHandler(product)}
            >
              BUY NOW
            </button>
            <h3>Description:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              officiis doloremque enim magni necessitatibus suscipit alias atque
              voluptate illo quas hic eius adipisci nemo iste, perferendis
              dolore ullam veniam voluptas.
            </p>
          </Grid>
          <Grid item xs={12}>
            <h3>Comments:</h3>
            <ul className="comment-list">
              {product.comment.map((comment, index) => (
                <CommentStub comment={comment} key={index} />
              ))}
            </ul>
          </Grid>
        </Grid>
      </div>
    );
  }
  return <h1>Product does not exist</h1>;
};

export default ProductViewer;
