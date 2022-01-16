import { Star, StarBorder } from "@mui/icons-material";
import React from "react";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const ratingList = [];
  if (item.ratings != null)
    for (var rating in item.ratings) ratingList.push(item.ratings[rating]);
    
  const ratings = ratingList.length !== 0
    ? ratingList.reduce((a, b) => a + b) / ratingList.length
    : 0;

  return (
    <div className="item-container">
      {item.badge && (
        <div className={`item-badge ${item.badge.color}`}>
          <p>{item.badge.label}</p>
        </div>
      )}
      <div className="item-card">
        <img src={item.uri} alt="item_pic" className="item-image" />
        <div className="item-footer">
          <h4>{item.name}</h4>
          <h3>{`P ${item.price}`}</h3>
          {item.ratings && (
            <span>
              {[1, 2, 3, 4, 5].map((count) => {
                if (count > ratings) return <StarBorder />;
                else return <Star />;
              })}
            </span>
          )}
          {!item.ratings && <p>No Ratings Yet</p>}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
