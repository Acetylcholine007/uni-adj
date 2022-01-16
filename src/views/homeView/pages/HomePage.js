import React, { useContext } from "react";
import { InventoryContext } from "../../../shared/contexts/InventoryContextProvider";
import "./HomePage.css";

const HomePage = () => {
  const {
    inventory: { products },
  } = useContext(InventoryContext);

  return (
    <div>
      <div className="home-header">
        <h1 className="header-text">What's New?</h1>
        <p className="home-link">View More</p>
      </div>
      <div className="home-header">
        <h1 className="header-text">
          What's <span style={{ color: "red" }}>HOT?</span>
        </h1>
        <p className="home-link">View More</p>
      </div>
    </div>
  );
};

export default HomePage;
