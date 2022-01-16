import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import "./CatalogViewer.css";
import ItemCard from "../components/ItemCard";
import { useHistory } from "react-router-dom";

const items = [
  {
    id: 1,
    name: "Samsung Inverter Refrigerator",
    price: 50000,
    ratings: 4,
    badge: { label: "NEW!", color: "red" },
    uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
  },
  {
    id: 2,
    name: "Samsung Side by Side Refrigerator",
    price: 70000,
    ratings: 4,
    badge: { label: "BRAND NEW!", color: "orange" },
    uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
  },
  {
    id: 3,
    name: "4-Door French Refrigerator",
    price: 150000,
    ratings: 3,
    badge: null,
    uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
  },
  {
    id: 4,
    name: "Samsung Refrigerator 2018",
    price: 18000,
    ratings: null,
    badge: { label: "SURPLUS", color: "brown" },
    uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
  },
  {
    id: 5,
    name: "Samsung Inverter Refrigerator",
    price: 50000,
    ratings: 4,
    badge: { label: "NEW!", color: "red" },
    uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
  },
  {
    id: 6,
    name: "Samsung Side by Side Refrigerator",
    price: 70000,
    ratings: 4,
    badge: { label: "BRAND NEW!", color: "orange" },
    uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
  },
  {
    id: 7,
    name: "4-Door French Refrigerator",
    price: 150000,
    ratings: 3,
    badge: null,
    uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
  },
  {
    id: 8,
    name: "Samsung Refrigerator 2018",
    price: 18000,
    ratings: null,
    badge: { label: "SURPLUS", color: "brown" },
    uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
  },
];

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
  const catId = useParams().catId;
  const category = getCategoryContent(catId);
  const history = useHistory();

  if (category)
    return (
      <div>
        <h1 className="category-header">{category.title}</h1>
        <Grid container spacing={8}>
          {items.map((item) => (
            <Grid
              item
              xs={6}
              md={3}
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
