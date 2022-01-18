import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { InventoryContext } from "../../../shared/contexts/InventoryContextProvider";
import CommentStub from "../components/CommentStub";
import "./ProductViewer.css";

const ProductViewer = () => {
  const productId = useParams().productId;
  const {
    inventory: { products },
  } = useContext(InventoryContext);

  const product = products.find((product) => product.productId === productId);

  if (product !== undefined) {
    return (
      <div className="product-viewer">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img
              src={product.uri}
              alt="product_image"
              className="viewer-image"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <h1>{product.name}</h1>
            <h4>
              Ratings: 4 <span>HOT</span>
            </h4>
            <h3>Price: {product.price}</h3>
            <button className="app-button">Add to Cart</button>
          </Grid>
          <Grid item xs={12}>
            <h3>Description:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              officiis doloremque enim magni necessitatibus suscipit alias atque
              voluptate illo quas hic eius adipisci nemo iste, perferendis
              dolore ullam veniam voluptas.
            </p>
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
