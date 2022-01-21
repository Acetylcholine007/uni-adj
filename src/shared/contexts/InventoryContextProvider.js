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
        description: 'Product description',
        price: 50000,
        ratings: { 1: 4, 2: 3 },
        badge: { label: "NEW!", color: "red" },
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [
          { userId: "1", message: "Good" },
          { userId: "2", message: "Good" },
        ],
        brand: "1",
        tags: [
          "kitchen",
          "bathroom",
          "outdoors",
          "bedroom",
          "livingroom",
          "utility",
        ],
      },
      {
        productId: "2",
        name: "Samsung Side by Side Refrigerator",
        description: 'Product description',
        price: 70000,
        ratings: { 1: 4, 2: 3 },
        badge: { label: "BRAND NEW!", color: "orange" },
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: [
          "kitchen",
          "bathroom",
          "outdoors",
          "bedroom",
          "livingroom",
          "utility",
        ],
      },
      {
        productId: "3",
        name: "4-Door French Refrigerator",
        description: 'Product description',
        price: 150000,
        ratings: { 1: 1, 2: 3 },
        badge: null,
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: [
          "kitchen",
          "bathroom",
          "outdoors",
          "bedroom",
          "livingroom",
          "utility",
        ],
      },
      {
        productId: "4",
        name: "Samsung Inverter Refrigerator",
        description: 'Product description',
        price: 18000,
        ratings: null,
        badge: { label: "SURPLUS", color: "brown" },
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: [
          "kitchen",
          "bathroom",
          "outdoors",
          "bedroom",
          "livingroom",
          "utility",
        ],
      },
      {
        productId: "5",
        name: "Samsung Inverter Refrigerator",
        description: 'Product description',
        price: 50000,
        ratings: { 1: 5, 2: 3 },
        badge: { label: "NEW!", color: "red" },
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: [
          "kitchen",
          "bathroom",
          "outdoors",
          "bedroom",
          "livingroom",
          "utility",
        ],
      },
      {
        productId: "6",
        name: "Samsung Side by Side Refrigerator",
        description: 'Product description',
        price: 70000,
        ratings: { 1: 5, 2: 5 },
        badge: { label: "BRAND NEW!", color: "orange" },
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: [
          "kitchen",
          "bathroom",
          "outdoors",
          "bedroom",
          "livingroom",
          "utility",
        ],
      },
      {
        productId: "7",
        name: "4-Door French Refrigerator",
        description: 'Product description',
        price: 150000,
        ratings: { 1: 1, 2: 0 },
        badge: null,
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: [
          "kitchen",
          "bathroom",
          "outdoors",
          "bedroom",
          "livingroom",
          "utility",
        ],
      },
      {
        productId: "8",
        name: "Samsung Inverter Refrigerator",
        description: 'Product description',
        price: 18000,
        ratings: null,
        badge: { label: "SURPLUS", color: "brown" },
        uri: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: [
          "kitchen",
          "bathroom",
          "outdoors",
          "bedroom",
          "livingroom",
          "utility",
        ],
      },
    ],
    brands: [
      {
        brandId: "1",
        name: "Samsung",
        brandUri:
          "https://marketingweek.imgix.net/content/uploads/2014/10/Samsung_logo.jpg",
      },
      {
        brandId: "2",
        name: "LG",
        brandUri:
          "https://www.lgnewsroom.com/wp-content/uploads/2021/07/lg-logo_.png",
      },
      {
        brandId: "3",
        name: "Panasonic",
        brandUri:
          "https://i.pinimg.com/originals/a3/7d/9d/a37d9d116de85133d17bc691f8b263ab.jpg",
      },
      {
        brandId: "4",
        name: "Hitachi",
        brandUri:
          "https://yt3.ggpht.com/ytc/AKedOLR06SaIzikoXAf-fd76cB5RWoeSBekJB1hx0DWx=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        brandId: "5",
        name: "General Electric",
        brandUri:
          "https://images.successstory.com/img_company/company_1435925461.jpg",
      },
      {
        brandId: "6",
        name: "Yamaha",
        brandUri:
          "https://www.yamaha-motor.com.ph/yamaha-official-logo.jpg",
      },
      {
        brandId: "7",
        name: "Whirlpool",
        brandUri:
          "https://mma.prnewswire.com/media/1439279/Whirlpool_EDC_Logo.jpg",
      },
      {
        brandId: "8",
        name: "ACE",
        brandUri:
          "https://pbs.twimg.com/profile_images/884779803185827840/MfvHiD5G_400x400.jpg",
      },
      {
        brandId: "9",
        name: "Sharp",
        brandUri:
          "https://primer.com.ph/business/wp-content/uploads/sites/9/2016/10/sharp-brand.jpg",
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
