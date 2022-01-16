import React, { useContext } from "react";
import { InventoryContext } from "../../../shared/contexts/InventoryContextProvider";
import "./InventoryPage.css";

const InventoryPage = () => {
  const {
    inventory: { products },
  } = useContext(InventoryContext);

  return (
    <div>
      <h1 className="inventory-header">Inventory</h1>
      <table className="inventory-table">
        <thead>
          <tr>
            <td>Item No.</td>
            <td>Name</td>
            <td>Availability</td>
            <td>Count</td>
            <td>Price per Unit</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <td>{item.productId}</td>
              <td>{item.name}</td>
              <td>{item.stocks > 0 ? 'Available' : 'Depleted'}</td>
              <td>{item.stocks}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryPage;
