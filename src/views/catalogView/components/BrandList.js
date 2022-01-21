import React from "react";
import "./BrandList.css";

const BrandList = ({ brands }) => {
  return (
    <>
      <div className="brand-row">
        {[0, 1, 2, 3].map((col) => (
          <div className="brand-column">
            {brands.map((brand, index) => {
                console.log(col);
                console.log(index)
              if (index % 4 === col)
                return <img alt="brand-banner" src={brand.brandUri} />;
              return null;
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default BrandList;
