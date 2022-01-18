import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, users: [...state.users, action.payload] };
      case "UPDATE":
        var newState = { ...state };
        //TODO: add edit account statement
        return newState;
      case "CANGE_PASSWORD":
        var newState = { ...state };
        //TODO: add edit password statement
        return newState;
      default:
        return state;
    }
  };

  const [users, userDispatch] = useReducer(reducer, {
    users: [
      {
        userId: "1",
        username: "admin",
        firstname: "John",
        lastname: "Doe",
        email: "admin@gmail.com",
        password: "1234",
        accountType: 3,
        contactNo: "09212734539",
        profileUri:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/1200px-Ambersweet_oranges.jpg",
        orders: [],
        cart: [
          { productId: "1", quantity: 2 },
          { productId: "1", quantity: 2 },
          { productId: "1", quantity: 2 },
          { productId: "1", quantity: 2 },
          { productId: "1", quantity: 2 },
          { productId: "1", quantity: 2 },
        ],
      },
    ],
  });

  return (
    <UserContext.Provider value={{ users, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
