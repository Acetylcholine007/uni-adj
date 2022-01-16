import React, { createContext, useReducer } from "react";

export const InventoryContext = createContext();

const InventoryContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, products: [...state.products, action.payload] };
      case "EDIT":
        var newState = { ...state };
        //TODO: add edit product statement
        return newState;
      case "DELETE":
        var newState = { ...state };
        //TODO: add remove product statement
        return newState;
      default:
        return state;
    }
  };

  const [inventory, inventoryDispatch] = useReducer(reducer, {
    products: [
      {
        productId: "1",
        name: "Samsung Inverter Refrigerator",
        price: 50000,
        ratings: { 1: 4, 2: 3 },
        badge: { label: "NEW!", color: "red" },
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: ['kitchen', 'bathroom', 'outdoors', 'bedroom', 'livingroom', 'utility']
      },
      {
        productId: "2",
        name: "Samsung Side by Side Refrigerator",
        price: 70000,
        ratings: { 1: 4, 2: 3 },
        badge: { label: "BRAND NEW!", color: "orange" },
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: ['kitchen', 'bathroom', 'outdoors', 'bedroom', 'livingroom', 'utility']
      },
      {
        productId: "3",
        name: "4-Door French Refrigerator",
        price: 150000,
        ratings: { 1: 1, 2: 3 },
        badge: null,
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: ['kitchen', 'bathroom', 'outdoors', 'bedroom', 'livingroom', 'utility']
      },
      {
        productId: "4",
        name: "Samsung Inverter Refrigerator",
        price: 18000,
        ratings: null,
        badge: { label: "SURPLUS", color: "brown" },
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: ['kitchen', 'bathroom', 'outdoors', 'bedroom', 'livingroom', 'utility']
      },
      {
        productId: "5",
        name: "Samsung Inverter Refrigerator",
        price: 50000,
        ratings: { 1: 5, 2: 3 },
        badge: { label: "NEW!", color: "red" },
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: ['kitchen', 'bathroom', 'outdoors', 'bedroom', 'livingroom', 'utility']
      },
      {
        productId: "6",
        name: "Samsung Side by Side Refrigerator",
        price: 70000,
        ratings: { 1: 5, 2: 5 },
        badge: { label: "BRAND NEW!", color: "orange" },
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: ['kitchen', 'bathroom', 'outdoors', 'bedroom', 'livingroom', 'utility']
      },
      {
        productId: "7",
        name: "4-Door French Refrigerator",
        price: 150000,
        ratings: { 1: 1, 2: 0 },
        badge: null,
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: ['kitchen', 'bathroom', 'outdoors', 'bedroom', 'livingroom', 'utility']
      },
      {
        productId: "8",
        name: "Samsung Inverter Refrigerator",
        price: 18000,
        ratings: null,
        badge: { label: "SURPLUS", color: "brown" },
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: ['kitchen', 'bathroom', 'outdoors', 'bedroom', 'livingroom', 'utility']
      },
    ],
    brands: [
      {
        brandId: "1",
        name: "Samsung",
        brandUri:
          "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
      },
    ],
  });

  return (
    <InventoryContext.Provider value={{ inventory, inventoryDispatch }}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryContextProvider;
