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
    default:
      return null;
  }
};

const CatalogViewer = () => {
  const {
    inventory: { products },
  } = useContext(InventoryContext);
  const catId = useParams().catId;
  const category = getCategoryContent(catId);
  const history = useHistory();

  if (category)
    return (
      <div>
        <h1 className="category-header">{category.title}</h1>
        <Grid container spacing={8}>
          {products.filter((product) => product.tags.includes(catId)).map((item) => (
            <Grid
              item
              xs={6}
              md={4}
              lg={3}
              key={item.id}
              onClick={() => history.push(`/catalogs/${catId}/${item.id}`)}
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
