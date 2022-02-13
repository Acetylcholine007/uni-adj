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

  const parsedQuery = query.split("-");

  console.log(parsedQuery)
  const filterProducts = products
    .filter((product) =>
      catId === "all" ? true : product.tags.includes(catId)
    )
    .filter((item) => {
      if (parsedQuery[0] === "all" || parsedQuery[0] === "") {
        return true;
      } else {
        return item.name.toLowerCase().includes(parsedQuery[0].toLowerCase());
      }
    })
    .filter((i) => {
      if (parsedQuery[1] === undefined || parsedQuery[1] === "") {
        return true;
      } else {
        return i.brand === parsedQuery[1];
      }
    })
    .filter((i) => {
      if (parsedQuery[2] === undefined || parsedQuery[2] === "") {
        return true;
      } else {
        return i.promo === parsedQuery[2];
      }
    });
    filterProducts.forEach(i => console.log(i.promo))

  if (category)
    return (
      <div>
        <h1 className="category-header">{category.title}</h1>
        {filterProducts.length !== 0 && (
          <Grid
            container
            spacing={5}
            sx={{ boxSizing: "border-box", width: "100%", margin: 0 }}
          >
            {filterProducts.map((item) => (
              <Grid
                item
                xs={6}
                md={4}
                lg={3}
                key={item.productId}
                onClick={() =>
                  history.push(
                    `/catalogs/${catId}/${
                      parsedQuery[0] === "" ? "all" : parsedQuery[0]
                    }/${item.productId}`
                  )
                }
              >
                <ItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        )}
        {filterProducts.length === 0 && <h1>No Products</h1>}
      </div>
    );
  return <div>Invalid category</div>;
};

export default CatalogViewer;
