import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { InventoryContext } from "../../../shared/contexts/InventoryContextProvider";
import "./HomePage.css";

const HomePage = () => {
  const {
    inventory: { products },
  } = useContext(InventoryContext);
  const history = useHistory();

  return (
    <div>
      <div className="home-header">
        <h1 className="header-text">What's New?</h1>
        <p className="home-link" onClick={() => history.push('./catalogs/all')}>View More</p>
      </div>
      <div className="home-header">
        <h1 className="header-text">
          What's <span style={{ color: "red" }}>HOT?</span>
        </h1>
        <p className="home-link" onClick={() => history.push('./catalogs/all')}>View More</p>
      </div>
    </div>
  );
};

export default HomePage;
