import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { InventoryContext } from "../../../shared/contexts/InventoryContextProvider";
import Carousel from "../components/Carousel";
import FeatureCard from "../components/FeatureCard";
import { SliderData } from "../components/SliderData";

import "./HomePage.css";

const HomePage = () => {
  const {
    inventory: { products },
  } = useContext(InventoryContext);
  const history = useHistory();

  return (
    <div>
      <div>
        <FeatureCard slides={SliderData} />
      </div>
      <div className="home-header">
        <h1 className="header-text">
          What's <span style={{ color: "rgb(216,6,54)" }}>NEW?</span>
        </h1>
        <p className="home-link" onClick={() => history.push("./catalogs/all")}>
          View More
        </p>
      </div>
      <Carousel products={products.filter((item) => item.promo === 'NEW')} />
      <div className="home-header">
        <h1 className="header-text">
          What's <span style={{ color: "rgb(216,6,54)" }}>HOT?</span>
        </h1>
        <p className="home-link" onClick={() => history.push("./catalogs/all")}>
          View More
        </p>
      </div>
      <Carousel products={products.filter((item) => item.promo === 'HOT')} />
      <div className="home-header">
        <h1 className="header-text">
          What's <span style={{ color: "rgb(216,6,54)" }}>SALE?</span>
        </h1>
        <p className="home-link" onClick={() => history.push("./catalogs/all")}>
          View More
        </p>
      </div>
      <Carousel products={products.filter((item) => item.promo === 'SALE')} />
    </div>
  );
};

export default HomePage;
