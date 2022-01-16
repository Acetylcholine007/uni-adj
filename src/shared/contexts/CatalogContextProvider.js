import React, { createContext, useReducer } from "react";

export const CatalogContext = createContext();

const CatalogContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "RATE":
        return { ...state, isLoggedIn: true, accountType: action.payload };
      case "ADD":
        return { ...state, isLoggedIn: true, accountType: action.payload };
      case "EDIT":
        return { ...state, isLoggedIn: false, accountType: 0 };
      case "DELETE":
        return { ...state, authSection: action.payload };
      default:
        return state;
    }
  };

  const [catalog, catalogDispatch] = useReducer(reducer, {
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
    <CatalogContext.Provider value={{ catalog, catalogDispatch }}>
      {children}
    </CatalogContext.Provider>
  );
};

export default CatalogContextProvider;
