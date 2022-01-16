import React, { createContext, useReducer } from "react";

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, isLoggedIn: true, accountType: action.payload };
      case "EDIT":
        return { ...state, isLoggedIn: true, accountType: action.payload };
      case "DELETE":
        return { ...state, isLoggedIn: false, accountType: 0 };
      default:
        return state;
    }
  };

  const [order, orderDispatch] = useReducer(reducer, {
    isLoggedIn: true,
    accountType: 2,
    authSection: "LOGIN",
    user: {
      username: "Acetylcholine",
      firstname: "Rahino",
      lastname: "Quijano",
      email: "test@gmail.com",
      profileUri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/1200px-Ambersweet_oranges.jpg",
      backgroundUri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/1200px-Ambersweet_oranges.jpg",
    },
  });

  return (
    <OrderContext.Provider value={{ order, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
