import React from "react";
import "./HomePage.css";

const HomePage = () => {
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
