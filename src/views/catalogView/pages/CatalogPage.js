import { Grid } from "@mui/material";
import React, { useContext } from "react";
import Masonry from "react-masonry-css";
import { useHistory } from "react-router";
import { InventoryContext } from "../../../shared/contexts/InventoryContextProvider";
import "./CatalogPage.css";

const CatalogPage = () => {
  const {
    inventory: { brands },
  } = useContext(InventoryContext);
  const history = useHistory();

  return (
    <div>
      <h1>Categories:</h1>
      <Grid container spacing={3}>
        <Grid item xs={6} md={4}>
          <button
            className="app-button p-color full-width"
            onClick={() => history.push("/catalogs/kitchen")}
          >
            Kitchen
          </button>
        </Grid>
        <Grid item xs={6} md={4}>
          <button
            className="app-button s-color full-width"
            onClick={() => history.push("/catalogs/bathroom")}
          >
            Bathroom
          </button>
        </Grid>
        <Grid item xs={6} md={4}>
          <button
            className="app-button p-color full-width"
            onClick={() => history.push("/catalogs/outdoors")}
          >
            Outdoors
          </button>
        </Grid>
        <Grid item xs={6} md={4}>
          <button
            className="app-button s-color full-width"
            onClick={() => history.push("/catalogs/bedroom")}
          >
            Bedroom
          </button>
        </Grid>
        <Grid item xs={6} md={4}>
          <button
            className="app-button p-color full-width"
            onClick={() => history.push("/catalogs/livingroom")}
          >
            Living Room
          </button>
        </Grid>
        <Grid item xs={6} md={4}>
          <button
            className="app-button s-color full-width"
            onClick={() => history.push("/catalogs/utility")}
          >
            Utility
          </button>
        </Grid>
      </Grid>
      <h2>Featured Brands</h2>
      <h3
        align="center"
        style={{
          fontStyle: "italic",
          width: "100%",
          backgroundColor: "#F3F2F2",
        }}
      >
        Fill your home with these brands
      </h3>
      <Masonry
        breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.brandUri}
            className="brand-banner"
            alt={brand.name}
            onClick={() => history.push('/catalogs/all')}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default CatalogPage;
