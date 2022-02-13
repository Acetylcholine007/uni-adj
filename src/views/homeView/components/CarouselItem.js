import React from "react";
import { useHistory } from "react-router-dom";
import "./CarouselItem.css";

const CarouselItem = ({ product }) => {
  const history = useHistory();

  return (
    <div className="carousel-item-container">
      <img
        className="carousel-item-picture"
        src={product.uri}
        alt="carousel-item"
      />
      <div className="carousel-item-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button
          onClick={() => history.push(`catalogs/all/all/${product.productId}`)}
        >
          VIEW ITEM
        </button>
      </div>
    </div>
  );
};

export default CarouselItem;
