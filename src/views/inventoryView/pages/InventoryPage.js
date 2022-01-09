import React from "react";
import "./InventoryPage.css";

const items = [
  {
    itemNo: 1,
    name: "Fan",
    availablility: "Available",
    count: 100,
    price: 1000,
  },
  {
    itemNo: 2,
    name: "Ref",
    availablility: "Available",
    count: 100,
    price: 1000,
  },
  {
    itemNo: 3,
    name: "TV",
    availablility: "Available",
    count: 100,
    price: 1000,
  },
  {
    itemNo: 4,
    name: "Washing Machine",
    availablility: "Available",
    count: 100,
    price: 1000,
  },
  {
    itemNo: 5,
    name: "AC Unit",
    availablility: "Available",
    count: 100,
    price: 1000,
  },
  {
    itemNo: 6,
    name: "Iron",
    availablility: "Available",
    count: 100,
    price: 1000,
  },
  {
    itemNo: 7,
    name: "LED Light",
    availablility: "Available",
    count: 100,
    price: 1000,
  },
  {
    itemNo: 8,
    name: "Electrical Wire",
    availablility: "Available",
    count: 100,
    price: 1000,
  },
  {
    itemNo: 9,
    name: "Switch",
    availablility: "Available",
    count: 100,
    price: 1000,
  },
];

const InventoryPage = () => {
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
          {items.map((item) => (
            <tr>
              <td>{item.itemNo}</td>
              <td>{item.name}</td>
              <td>{item.availablility}</td>
              <td>{item.count}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryPage;
