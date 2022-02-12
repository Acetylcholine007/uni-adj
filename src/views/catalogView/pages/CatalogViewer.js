import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import "./CatalogViewer.css";
import ItemCard from "../components/ItemCard";
import { useHistory } from "react-router-dom";
import { InventoryContext } from "../../../shared/contexts/InventoryContextProvider";

const getCategoryContent = (category) => {
  switch (category) {
    case "kitchen":
      return {
        title: "Kitchen",
      };
    case "bathroom":
      return {
        title: "Bathroom",
      };
    case "outdoors":
      return {
        title: "Outdoors",
      };
    case "bedroom":
      return {
        title: "Bedroom",
      };
    case "livingroom":
      return {
        title: "Living Room",
      };
    case "utility":
      return {
        title: "Utility",
      };
    case "all":
      return {
        title: "All Products",
      };
    default:
      return null;
  }
};

const CatalogViewer = () => {
  const {
    inventory: { products },
  } = useContext(InventoryContext);
  const catId = useParams().catId;
  const query = useParams().query ?? "";
  const category = getCategoryContent(catId);
  const history = useHistory();

  if (category)
    return (
      <div>
        <h1 className="category-header">{category.title}</h1>
        <Grid container spacing={4}>
          {products
            .filter((product) =>
              catId === "all" ? true : product.tags.includes(catId)
            )
            .filter((item) => {
              if (query === "") {
                return true;
              } else {
                return item.name.toLowerCase().includes(query.toLowerCase());
              }
            })
            .map((item) => (
              <Grid
                item
                xs={6}
                md={4}
                lg={3}
                key={item.productId}
                onClick={() =>
                  history.push(`/catalogs/${catId}/${query === "" ? "null" : query}/${item.productId}`)
                }
              >
                <ItemCard item={item} />
              </Grid>
            ))}
        </Grid>
      </div>
    );
  return <div>Invalid category</div>;
};

export default CatalogViewer;
